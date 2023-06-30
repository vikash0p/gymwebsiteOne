import React from 'react'
import './Carousel.css'

const Carousel = (props) => {
  const { imageOne, imageTwo, imageThree } = props
  return (
    <>
      <div id="carouselExampleIndicators" className="carousel slide bg-light " data-bs-ride="carousel" >
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={imageOne} className="d-block w-100 img-fluid" alt="images"  />
          </div>
          <div className="carousel-item">
            <img src={imageTwo} className="d-block w-100 img-fluid" alt="images" />
          </div>
          <div className="carousel-item">
            <img src={imageThree} className="d-block w-100 img-fluid" alt="images" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}

export default Carousel