import React, { useEffect, useState } from 'react';
import { items as defaultItems } from './items';
import './App.css';

export default function MultipleFilters() {
  const [items, setItems] = useState(defaultItems);
  const [activeFilters, setActiveFilters] = useState<any>([])

  let filters = ['Bags', 'Watches', 'Sports', 'Sunglasses'];

  const handleFilters =  (el: string) =>{
    if(activeFilters.includes(el)){
      const filtered = activeFilters.filter(item => item !== el)
      setActiveFilters(filtered)
    }else {
    setActiveFilters([...activeFilters,el])
  }
  }

  useEffect(() => {
    displayFilteredItems()

  }, [activeFilters])

  const displayFilteredItems = ( ) =>{
    if(activeFilters.length > 0){
      const list = activeFilters.map((el)=>{
        let items = defaultItems.filter((item) => item.category === el )
        return items
      })
      setItems(list.flat())
    }else {
      setItems(defaultItems)
    }

  }

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Algochurn Filters</h2>
      <div className="buttons-container">
        {filters.map((el, idx) => (
          <button className={`button ${activeFilters.includes(el) ? 'active' : ''}`} key={`filters-${idx}`} onClick={()=>handleFilters(el)} >
            {el}
          </button>
        ))}
      </div>
      <div className="items-container">
        {items.map((item, idx) => (
          <div key={`items-${idx}`} className="item">
            <p>{item.name}</p>
            <p className="category">{item.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
