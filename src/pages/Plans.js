import React from 'react'
import Header from '../component/Header'
import img from '../images/ShopImage/pricing-title-img.jpg'

const Plans = () => {
  return (
    <>
        <Header image={img} plan='pricing plans' />
        
        <div className="container-fluid m-auto">
            <div className="row gap-5 justify-content-center">
             <div className="col-12 col-sm-12 col-md-3 col-lg-3 bg-dark my-5 py-5 text-center text-light">
                <h4 className="fw-bold"> <span>$</span> <sub className='fs-1'>33</sub> </h4>
                <p className="text-primary mt-3">SINGLE CLASS</p>
                <p className='mt-4 fw-bolder'>CLASS dROP-IN</p>
                <p className='mt-3'>LOREM IPSUM DOLOR SIT AMET</p>
                <hr className='border border-secondary mt-2' />
                <p className='mt-3'> AENEAN MASSA </p>
                <hr className='border border-secondary mt-2' />

                <p className='mt-3'>QUISQUE RUTRUM</p>
                <hr className='border border-secondary mt-2' />
                <button className="btn btn-primary  rounded-0 px-5 py-1 fs-5 mt-5 ">READ MORE   <i className=" mx-1 fa-sharp fa-solid fa-arrow-right-long  mx-2 "></i></button>
            </div>  
            <div className="col-12 col-sm-12 col-md-3 col-lg-3 bg-dark my-5 py-5 text-center text-light">
                <h4 className="fw-bold"> <span>$</span> <sub className='fs-1'>49</sub> </h4>
                <p className="text-primary mt-3">PER MONTH</p>
                <p className='mt-4 fw-bolder'>12 MONTH UNLIMITED</p>
                <p className='mt-3'>LOREM IPSUM DOLOR SIT AMET</p>
                <hr className='border border-secondary mt-2' />
                <p className='mt-3'> AENEAN MASSA </p>
                <hr className='border border-secondary mt-2' />

                <p className='mt-3'>QUISQUE RUTRUM</p>
                <hr className='border border-secondary mt-2' />
                <button className="btn btn-primary  rounded-0 px-5 py-1 fs-5 mt-5 ">READ MORE   <i className=" mx-1 fa-sharp fa-solid fa-arrow-right-long  mx-2 "></i></button>
            </div>  
            <div className="col-12 col-sm-12 col-md-3 col-lg-3 bg-dark my-5 py-5 text-center text-light">
                <h4 className="fw-bold"> <span>$</span> <sub className='fs-1'>99</sub> </h4>
                <p className="text-primary mt-3">SINGLE CLASS</p>
                <p className='mt-4 fw-bolder'>SIX MONTH UNLIMITED</p>
                <p className='mt-3'>LOREM IPSUM DOLOR SIT AMET</p>
                <hr className='border border-secondary mt-2' />
                <p className='mt-3'> AENEAN MASSA </p>
                <hr className='border border-secondary mt-2' />

                <p className='mt-3'>QUISQUE RUTRUM</p>
                <hr className='border border-secondary mt-2' />
                <button className="btn btn-primary  rounded-0 px-5 py-1 fs-5 mt-5 ">READ MORE   <i className=" mx-1 fa-sharp fa-solid fa-arrow-right-long  mx-2 "></i></button>
            </div>  
             
            </div>
            </div>
    </>
  )
}

export default Plans