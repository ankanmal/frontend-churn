import { useEffect, useState } from "react"


export const useKeyPress = (targetKey: any) =>{
  const [keyPressed, setKeyPressed] = useState(false)

  const handleDown =({key}: any)=>{
    if(key === targetKey) setKeyPressed(true)
  }

  const handleUp = ({key}: any) => {
    if(key === targetKey) setKeyPressed(false)
  }
  useEffect(()=>{

    document.addEventListener('keydown', handleDown)
    document.addEventListener('keyup', handleUp)

    return () =>{
      document.removeEventListener('keydown', handleDown)
      document.removeEventListener('keyup', handleUp)
    }

  })


  return keyPressed
}