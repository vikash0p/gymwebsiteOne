import React from 'react'
import { motion } from 'framer-motion';

const ThreeImage = (props) => {
    const{img, text ,price}=props
  return (
    <>
          <div className="col-12 col-sm-12 col-md-3 col-lg-3 overflow-hidden ">
                 <motion.img src={img} alt="images" className='img-fluid' initial={{sacle:0}} whileHover={{scaleX:1.1}} />
                    <h3 className='text-center'>{text}</h3>
                    <h4 className='text-center'>{price}</h4>
                        <div className="text-center">
                        <button className="btn btn-primary  rounded-0 px-5 py-1 fs-5 mt-3 ">READ MORE   <i className=" mx-1 fa-sharp fa-solid fa-arrow-right-long  mx-2 "></i></button>
                        </div>
                </div>
                
    </>
  )
}

export default ThreeImage