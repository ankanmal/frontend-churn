import { useEffect } from "react"


export const useOutsideClick = (ref : any, callback : Function)=>{

  useEffect(()=>{

    const handlerEvent = (event)=>{

        if(!ref.current || ref.current.contains(event.target)){
          return
        }
        callback()
    }
    document.addEventListener('mousedown', handlerEvent )

    return () => document.removeEventListener('mousedown', handlerEvent)
  })
}