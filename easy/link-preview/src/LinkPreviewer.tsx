
import { encode } from 'qss';
import './style.css';
import { useState } from 'react';
import {motion} from 'motion/react'

export default function LinkPreviewer({ url, children }:{url:any, children: any}) {
  const width = 200;
  const height = 125;
  // Write your code here
  // Documentation on how to screenshot any website:
  // https://microlink.io/screenshot
  const[show, setShow] = useState(false)
  const urlEncoded = encode({
    url,
    screenshot: true,
    meta: false,
    embed:'screenshot.url',
    colorScheme:'dark',

      'viewport.width': width * 3,
      'viewport.height' : height * 3,
      'viewport.deviceScaleFactor':1,
      'viewport.isMobile': true

  })

  const src = `https://api.microlink.io/?${urlEncoded}`;
  const dropIn = {
    hidden:{
      y:'-10vh',
      opacity:0
    },
    visible:{
      y:0,
      opacity: 1,
      transition:{
        duration: 0.1,
        type: 'spring',
        damping: 25,
        stiffness: 500
      }
    },
    exit:{
      y:'-100vh',
      opacity:0
    }
  }

  return (
    <div style={{position : 'relative', display: 'inline-block'}}>
      {show ?  (
      <motion.div
        variants={dropIn}
        initial='hidden'
        animate='visible'
        exit='exit'
        style={{
          position: 'absolute',
          top: '-150px',
          left: '-60px',
          right: '0',
          zIndex:10
        }} >
        <motion.img
          src={src}
          width={width}
          height={height}
          className='image'
        />
      </motion.div> ) : null}
      <a href={url} className="children" onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}>
      {children}
      </a>
    </div>
  );
}
