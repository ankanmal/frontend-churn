import * as React from 'react';
import './App.css';
import Toast from './components/Toast/Toast';

export default function App() {
  const [inputText, setInputText]= React.useState('This is a Toast Item');
  const [toastPosition,setToastPosition] = React.useState('top-left');
  const [toastEmoji, setToastEmoji] = React.useState('😂');

  const [showToast, setShowToast] = React.useState(false);


  return (
    <div>
      <div className="container">
        <h2>Configurations</h2>
        <div className='items'>
            <label htmlFor="">Toast Title</label>
            <input type="text" value={inputText} onChange={(e)=> setInputText(e.target.value)}/>
            <div>
              <label htmlFor="">Position</label> <br />

                <select name="positions" onChange={(e)=>setToastPosition(e.target.value)}>
                  <option value="top-left">Top Left</option>
                  <option value="top-right">Top Right</option>
                  <option value="bottom-right">Bottom Right</option>
                  <option value="bottom-left">Bottom Left</option>
                </select>
            </div>
            <div>
              <label htmlFor="">Icon</label> <br />

                <select name="icon" id="" onChange={(e)=> setToastEmoji(e.target.value)}>
                  <option value="😂">😂</option>
                  <option value="🤤">🤤</option>
                  <option value="🖕">🖕</option>
                  <option value="✌️">✌️</option>
                </select>
            </div>
            <button onClick={() => setShowToast(true)}>Sumbit</button>
        </div>
      </div>
      <Toast
        message={inputText}
        position={toastPosition}
        emoji={toastEmoji}
        trigger={showToast}
        onComplete={() => setShowToast(false)} // Reset after triggering
      />
    </div>
  );
}
