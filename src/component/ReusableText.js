import Aos from 'aos'
import React from 'react'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const ReusableText = (props) => {
    const{head1,head2,head3}=props
    useEffect(()=>{
        Aos.init({
          duration:2000,
          offset:200,
          delay:100,
        })
    },[])
  return (
    <>
          <div  data-aos="zoom-in">
          <h1 className='px-5  text-uppercase mt-3'> {head1}</h1>
                    <h1 className='px-5  text-uppercase mt-3'> {head2}</h1>
                    <h1 className='px-5  text-uppercase mt-3'>{head3}</h1>
                    <h6 className='px-5 mt-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti nisi ex, recusandae unde earum saepe  sapiente odio vel similique! Odit e corrupti provident rem iure consequatur itaque voluptatibus?</h6>
                    <div className="d-grid px-5 mt-5">
                    <button className="btn btn-primary col-md-8 rounded-0 px-5 py-1 fs-5 mt-3 ">READ MORE   <i className=" mx-1 fa-sharp fa-solid fa-arrow-right-long  mx-2 "></i></button>
                    </div>

          </div>
    </>
  )
}

export default ReusableText