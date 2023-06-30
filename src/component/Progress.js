import { motion } from 'framer-motion'
import React, { useState } from 'react'


const Progress = ({done}) => {
    const[style,setStyle]=useState({})
    setTimeout(()=>{
        const newStyle={
            opacity:1,
            width:`${done}%`
        }
        setStyle(newStyle)
    },2000)
  return (
    <>
    <motion.div className="progress" >
       <div className="progress-bar progress-bar-striped  progress-bar-animated " role="progressbar" style={style} aria-valuenow="10" aria-valuemin="20" aria-valuemax="100">
        {done}%
       </div>
     </motion.div>
    </>
  )
}

export default Progress