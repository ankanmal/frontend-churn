
import React, { useEffect } from 'react'
import { useKeyPress } from './useKeyPress'
import toast, { Toaster } from 'react-hot-toast';

const App = () => {
  const shift = useKeyPress('Shift');
  const enter = useKeyPress('Enter')

  useEffect(()=>{
    if(shift && enter) showToast()
  },[shift,enter])

  const showToast = ()=>{
    toast.success('Yayyyyy Presssedddd')
  }
  return (
    <div>
      <Toaster position='top-center' reverseOrder={false}/>
       <div>
        <h1>Press Shift + Enter</h1>
       </div>
    </div>
  )
}

export default App