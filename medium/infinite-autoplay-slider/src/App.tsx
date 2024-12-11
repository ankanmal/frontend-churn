
import React, { useEffect, useState,useRef } from 'react';
import './App.css'
import { cardDetails } from './cardDetails';

export default function App() {
  const [playing, setPlaying]=useState(true)
  return (
    <div>
      <div className="container">
            <Row speed={20} playing={playing}>
                {cardDetails.map((items,idx) => <Card key={idx} card={items}/>)}
            </Row>


      </div>
    </div>
  );
}


const Card = ({card})=>{
  const rotateValues = ['2deg', '-2deg', '0deg', '3deg', '-3deg'];

  const getRotationValue = () => {
    let val = rotateValues[Math.floor(Math.random() * rotateValues.length)];
    return `rotate(${val})`;}
  return(
    <>
    <a href={card?.href} target="__blank">
      <div className="card" style={{ transform: getRotationValue() }}>
        <svg
          fill="currentColor"
          width="45"
          height="36"
          style={{ color: '#cbd5e1' }}
        >
          <path d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z"></path>
        </svg>
        <h1>{card?.content}</h1>
        <div className="card-bottom">
          <img src={card?.avatar} />
          <p>{card?.name}</p>
        </div>
      </div>
    </a>

    </>
  )
}

const Row = ({speed, playing, children})=>{
  const scrollerRef = useRef();
  const clonedScrollerRef = useRef();

  const hoverRef = React.useRef(false);
  const playingRef = React.useRef(playing);

  const clonedChildren = React.Children.map(children, (child) => {
    return React.cloneElement(child);
  });

  useEffect(() => {
    playingRef.current = playing;
  }, [playing]);

  useEffect(() => {
    const pixelsPerFrame = speed / 60;
    let animating = true;
    let scrollerXPos = 0;
    let clonedScrollerXPos = 0;
    function animate() {
      if (playingRef.current) {
        if (hoverRef.current) {
          scrollerXPos -= pixelsPerFrame / 2;
          clonedScrollerXPos -= pixelsPerFrame / 2;
        } else {
          scrollerXPos -= pixelsPerFrame;
          clonedScrollerXPos -= pixelsPerFrame;
        }

        if (scrollerXPos <= -scrollerRef.current.offsetWidth) {
          scrollerXPos = scrollerRef.current.offsetWidth;
        }

        if (clonedScrollerXPos <= -clonedScrollerRef.current.offsetWidth * 2) {
          clonedScrollerXPos = 0;
        }

        scrollerRef.current.style.transform = `translateX(${scrollerXPos}px)`;
        clonedScrollerRef.current.style.transform = `translateX(${clonedScrollerXPos}px)`;
      }

      if (animating) {
        window.requestAnimationFrame(animate);
      }
    }
    window.requestAnimationFrame(animate);

    return () => (animating = false);
  }, []);

  return(
    <div
    className='row'
    onMouseOver={()=>hoverRef.current =(true)}
    onMouseOut = {()=> hoverRef.current=(false)}
    >
    <div  ref={scrollerRef}>{children}</div>
    <div  ref={clonedScrollerRef}>{clonedChildren}</div>
    </div>
  )

}

