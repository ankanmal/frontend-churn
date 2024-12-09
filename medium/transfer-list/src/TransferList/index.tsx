import React, { useState } from 'react';
import { data } from './data';
import "./ts.css"

export const TransferList = () => {
  const [checked,setChecked] = useState(false)
  const [datas,setDatas] = useState(data)
  const [leftItems, setLeftItems] = useState(datas)
  const [rightItems, setRightItems] = useState([])

  const handleSelectItems = (id, checked, listSide)=>{
    const iterableList = listSide === 'left' ? leftItems : rightItems;

    const newItems= iterableList.map((item)=>{
        if(item.id === id){
          return {
            ...item,
            checked:checked
          }
        }else{
          return item
        }
    })

    if(listSide === 'left') {
      setLeftItems(newItems)
    }else{
      setRightItems(newItems)
    }
  }
  const moveItems =(direction)=>{
    if(direction === 'right'){
      moveItemsToRight()
    }else{
      moveItemsToLeft()
    }
  }

  const moveItemsToRight=()=>{
    const filtered = leftItems.filter((value)=> value.checked)
    const remaining = leftItems.filter((value)=> !value.checked)

    //unchecking the filtered items
    const unchecked =filtered.map((value)=>{
      return {
        ...value,
        checked:false
      }
    })
    setRightItems([...rightItems,...unchecked])
    setLeftItems([...remaining])
  }
  const moveItemsToLeft = ()=>{
    const filtered = rightItems.filter((value)=> value.checked)
    const remaining = rightItems.filter((value)=> !value.checked)

    //unchecking the filtered items
    const unchecked =filtered.map((value)=>{
      return {
        ...value,
        checked:false
      }
    })
    setRightItems([...remaining])
    setLeftItems([...leftItems,...unchecked])

  }

  return (
    <div className='main-container'>
          <Container items={leftItems} onItemSelect={(id, checked)=>handleSelectItems(id,checked,'left')}/>
          <div className='button-list'>
        <button className='buttons' onClick={()=>moveItems('right')}>Right</button>
        <button className='buttons' onClick={()=>moveItems('left')}>Left</button>
      </div>
      <Container items={rightItems} onItemSelect={(id, checked)=>handleSelectItems(id,checked,'right')}/>
      </div>



  );
};

const Container = ({items, onItemSelect})=>{
  return(
    <div className='list'>

    {
      items.map((value,idx)=>(
        <Checkbox {...value} onSelect={(checked)=>onItemSelect(value.id,checked)}/>
      ))
    }
    </div>

)}

const Checkbox = ({title,checked, onSelect})=>{

  return(
    <div className='items'>
    <label>
      <span className={`spans ${checked ? "active" : ''}`}>{title}</span>
      <input type="checkbox" hidden checked={checked}  onChange={(e)=>onSelect(e.target.checked)}/>
    </label>
  </div>
  )
}
