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
    }
  }



  return(
    <div style={{width:"50rem"}}>
      <div className='text-container'>
      <textarea name="user text" id="user_text" placeholder='Enter Your Text here...' onChange={handleChange} onKeyDown={handleEnter} value={text} rows={8}></textarea>
      </div>

      <div className='document-container'>
      <h2>Document</h2>
      <div className='document-body'>

           {items.map((value,index)=>{
            return <p key={index} className={ items.length - 1 === index ? 'last-item' : '' }>{value}</p>
          })}


      </div>
      </div>


    </div>
  );
};
