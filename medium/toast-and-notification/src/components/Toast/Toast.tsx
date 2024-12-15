import React, { useEffect, useState } from 'react';
import "./Toast.css"

export default function Toast({message, position, emoji, trigger, onComplete}) {
  const [toast, setToast] =useState([])
  useEffect(()=>{
    if (trigger) {
      const id = Math.random().toString(36).substring(2, 9);
      setToast((current) => [...current, { id, message, position, emoji }]);

      // Notify App that Toast is handled
      onComplete();
      setTimeout(() => removeToast(id), 5000);
    }

  },[trigger,message,position,emoji,onComplete])

  const removeToast=(id)=>{
    setToast((prev)=>prev.filter((toast)=> toast.id !== id))
  }
  return (
    <div className={`toast-container ${position}`}>
      {toast.map((value)=>(
        <div className='toast' key={value.id}>
          <div className='toast-content'>
            <span>{value.emoji}</span> <span>{value.message}</span>
          </div>
          <button className='close-btn' onClick={()=>removeToast(value.id)}>
          x
          </button>
        </div>
      ))}
    </div>
  );
}
