import { useState } from 'react';

export const Document = () => {
  const [text,setText] = useState('');
  const [items, setItems] = useState<string[]>([])
  const handleChange = (event)=>{
    setText(event.target.value)
  }
  const handleEnter =(event)=>{
    if(event.key === 'Enter'){
      event.preventDefault()
      setItems([...items,text])
      setText("")
      console.log(items)
    }
  }

  return(
    <div>
      <textarea name="user text" id="user_text" placeholder='Enter Your Text here...' onChange={handleChange} onKeyDown={handleEnter} value={text}></textarea>
      <h2>Document</h2>
      <div>

          {items.map((value,index)=>{
            return <p key={index} className={ items.length - 1 === index ? 'last-item' : '' }>{value}</p>
          })}

      </div>


    </div>
  );
};
