import ReactCodeMirror from '@uiw/react-codemirror';
import { useEffect, useState } from 'react'
import { javascript } from '@codemirror/lang-javascript';
import { staticCode } from './sampleCode';

var timer : any
const TypeWriter = () => {
  const [value, setValue] = useState(`// Click Start Generating to see magic`);
  const[start,setStart] = useState(false);


  const handleTypewriter =( )=>{
    setStart(!start)
  }
  const handleStartButton = ()=>{
    setValue(` // Click Start Generating to see magic`)
    setStart(!start)
    clearInterval(timer)
  }
  const startTypewriter = () =>{
    let i = 0;
    let val = '';
    timer = setInterval(() => {
        if(i === staticCode.length -1) clearInterval(timer)
        val = val + staticCode[i]
        setValue(val)
        i++;
      }, 10);
  }

  useEffect(()=>{

    if (start) {
      startTypewriter()
    }
    return () =>{
      clearInterval(timer)
    }
  },[start])


  return (
    <>
    <div>
        <button disabled={start} onClick={handleTypewriter} > Start TypeWriter </button>
        <button onClick={handleStartButton}>Reset TypeWriter</button>
      </div>
    <ReactCodeMirror value={value} height="600px"  theme={'dark'} extensions={[javascript({ jsx: true })]}  />;
    </>
  )
}

export default TypeWriter