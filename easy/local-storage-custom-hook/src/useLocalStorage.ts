import { useState } from "react"

export const useLocalStorage = (key: string,value: string)=>{
  const [theme, setTheme] = useState(()=>{
    if(typeof window === 'undefined'){
      return value
    }
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : value

    } catch (error) {
      console.log(error)
      return value
    }
  })

  const setThemeValue = (value) =>{
    try {
      setTheme(value)
      if(typeof window !== "undefined") window.localStorage.setItem(key,JSON.stringify(value))
    } catch (error) {
        console.log(error)
    }
  }

  return [theme, setThemeValue]
}