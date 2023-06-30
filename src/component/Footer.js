import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
     <div className="container-fluid ">
      <div className="  row px-5 pt-4 pb-2 row-cols-md-2 row-cols-1  row-cols-lg-4" style={{background:'#1A3E4C'}}>
        <div className="col my-3">
             <div>
             <h4 className='text-white' >INFORMATION</h4>
              <p className='lead'>Pages</p>
              <p className='lead'>Your Team</p>
              <p className='lead'>Features</p>
              <p className='lead'>Pricing</p>
            
             </div>
              
        </div>
        <div className="col my-3">
          <h5 className='text-white'>RESOURCE</h5>
          <p className='lead'>Morning Center</p>
          <p className='lead'>Video tutorial</p>
          <p className='lead'>Team & Services</p>
          <p className='lead'>API</p>
        </div>
        <div className="col my-3">
          <h5 className='text-white'>HELP</h5>
          <p className='lead'>SignUp</p>
          <p className='lead'>Login</p>
          <p className='lead'>Term & Services</p>
          <p className='lead'>Privacy Policy</p>

          
        </div>
        <div className="col my-3">
          <h5 className='text-white'>CONTACT US</h5>
            <p className="leada">Flat no -228 ,faridabad</p>
            <p className="lead">+91 9990127407</p>
            <p className="lead">Vikash752200@gmail.com</p>
        </div>
        <p className="lead m-auto fw-bolder">&#169;Copyright 2023</p>
      </div>
     </div>
    </>
   
  )
}

export default Footer