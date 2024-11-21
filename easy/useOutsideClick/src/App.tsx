import {  useRef } from "react"
import { useOutsideClick } from "./hooks/useOutsideClick";
import toast, { Toaster } from "react-hot-toast";



export default function App() {
  const domNode = useRef(null)

useOutsideClick(domNode,()=> toast('Clicked Outside'))


  return (
    <div>
      <Toaster/>
      <div className="container" >
        <div className="children"  ref={domNode}>
        <h1>Click Outside to Show Toast</h1>
      </div>
      </div>
    </div>
  );
}
