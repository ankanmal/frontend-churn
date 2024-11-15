import { useState } from "react"
import Checkbox from "./Components/Checkbox"
import { list } from "./list"

interface List {
  id: number;
  name : string;
  checked?: boolean;
}

const App = () => {
  const [items, setItems]= useState<List[]>(list)
  const handleSelectAll = (checkedValue : Boolean) =>{
    let selectAll = items.map((value)=> ({...value, checked:checkedValue}))
    setItems(selectAll)
  }
  const handleCheckBox = (element: List,checkedValue: Boolean) =>{
    let temp = items.map((el)=>
      el.id === element.id ? {...el, checked:checkedValue} : el
    )
    setItems(temp)
  }

  return (
    <div>
    <Checkbox
      label="Select All"
      checked= { items.filter((el) => el?.checked !== true).length < 1 ? true
        : false
      }
      onChange={(checked: Boolean) =>handleSelectAll(checked)}
     />
     <form>
      {items.map((value)=>{
        return <Checkbox
                label={value.name}
                checked = {value?.checked}
                onChange={(checked: Boolean)=>handleCheckBox(value,checked)}
                key={value.id}/>
      })}
     </form>

   </div>
  )
}

export default App