import React from 'react'
import './Header.css';



const Header = (props) => {
  const{image, plan}=props
  return (
    <>
        <header className="container-fluid">
          <div className="row">
            <div className="col">
              <img src={image} alt="images"  className='headerImage' />
              <h1 className='text-light headerHeading'>{plan}</h1>
              
            </div>
          </div>
        </header>
    </>
  )
}

export default Header