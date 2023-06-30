
import { motion } from 'framer-motion'
import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../images/fitness.png'
import "./Navbar.css"





const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg  py-1 sticky-top" style={{ background: '#67AFCB' }}>
        <div className="container-fluid">
          <img src={Logo} alt="logo" width='45px' height='50px' className='img-fluid  mx-lg-2 mx-0' />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent" >
            <ul className="navbar-nav m-auto mb-2 mb-lg-0 gap-lg-4">
              <li className="nav-item" >
                <NavLink className="nav-link link-light active fs-4" aria-current="page" to="/" >Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link link-light  fs-4" to="/shop">Shop</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link link-light  fs-4" to="/plans">plans</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link link-light  fs-4" to="/contact">Contact</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link link-light  fs-4" to="/event">Event</NavLink>
              </li>


            </ul>
          </div>

        </div>
      </nav>
    </>
  )
}

export default Navbar