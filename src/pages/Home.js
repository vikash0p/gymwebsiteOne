import React from 'react'
import './Home.css'
import Header from '../component/Header';


import img1 from '../images/HomeImage/info-box-vector-1.png'
import img2 from '../images/HomeImage/info-box-vector-2.png'
import img3 from '../images/HomeImage/info-box-vector-3.png'
import img4 from '../images/HomeImage/h1-video-button-backround-img.jpg'
import img5 from '../images/HomeImage/h1-single-img.png'
import img6 from '../images/HomeImage/event-single-img-1-550x550.jpg'
import img7 from '../images/HomeImage/event-single-img-2-550x550.jpg'
import img8 from '../images/HomeImage/event-single-img-3-550x550.jpg'
import img9 from '../images/HomeImage/event-single-img-4-550x550.jpg'
import img10 from '../images/HomeImage/h1-custom-icon-img-1.png'
import img11 from '../images/HomeImage/h1-custom-icon-img-2.png'
import img12 from '../images/HomeImage/h1-custom-icon-img-3.png'
import img13 from '../images/HomeImage/h1-custom-icon-img-4.png'
import img14 from '../images/HomeImage/team-img-1.jpg'
import img15 from '../images/HomeImage/team-img-2.jpg'
import img16 from '../images/HomeImage/team-img-3.jpg'
import img17 from '../images/HomeImage/team-img-4.jpg'
import img18 from '../images/HomeImage/h2-process-img-1.png'
import img19 from '../images/HomeImage/h2-process-img-2.png'
import img20 from '../images/HomeImage/h2-process-img-3.png'
import img21 from '../images/HomeImage/h2-process-img-4.png'

import img22 from '../images/HomeImage/h1-slider1-img-1.png'
import img23 from '../images/pexels1.jpg'
import img24 from '../images/pexels2.jpg'
import img25 from '../images/pexels3.jpg'


import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import ReusableCenter from '../component/ReusableCenter';
import Carousel from '../component/Carousel';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';




const Home = () => {
  useEffect(()=>{
    Aos.init({
      duration:1000,
      delay:100, 
    })
  })

  return (
    <>
    <Carousel imageOne={img23} imageTwo={img24} imageThree={img25} />

  <div className="container-fluid">
    {/* 1.--------------------------fitst section------------------------- */}
    
    <div className="row">
      <div className="col-12 col-sm-12 col-md-4 col-lg-4" id='imageOne'>
        <motion.div className='text-center images '  whileHover={{ background:'black',}}  transition={{ duration: 0.5 }}>
        <img src={img1} alt='images' />
        <p className='fs-3' >GROUP PROGRAM</p>
        <motion.div initial={{opacity:0}} whileHover={{opacity:1}}   transition={{ duration: 0.5 }}>
        <p className='px-5'>Improve your body strength. Join our group trainings and get in shape fast.</p>
          <p className='text-primary'>  read more<i className=" mx-1 fa-sharp fa-solid fa-arrow-right-long"></i></p>
        </motion.div>
         
        </motion.div>
       
      </div>
      <div className="col-12 col-sm-12 col-md-4 col-lg-4" id="imageTwo">
        <motion.div className=' text-center images' whileHover={{ background:'black',}}  transition={{ duration: 0.5 }}>
        <img src={img2} alt='images' />
        <p className='fs-3' >PERSONAL TRAINER</p>
        <motion.div initial={{opacity:0}} whileHover={{opacity:1}}   transition={{ duration: 0.5 }}>
          <p className='px-5'>Stay motivated. Our personal trainers will help you find a perfect workout.</p>
          <p className='text-primary'>  read more<i className=" mx-1 fa-sharp fa-solid fa-arrow-right-long"></i></p>
        </motion.div>
        </motion.div>
       
      </div>
      <div className="col-12 col-sm-12 col-md-4 col-lg-4" id="imageThree">
      <motion.div className=' text-center images' whileHover={{ background:'black',}}  transition={{ duration: 0.5 }}>
        <img src={img3} alt='images' />
        <p className='fs-3' >CARDIO PROGRAM</p>
        <motion.div initial={{opacity:0}} whileHover={{opacity:1}}   transition={{ duration: 0.5 }}>
          <p className='px-5'>Get your best body ever. Our trainers will build your perfect cardio workout.</p>
          <p className='text-primary'>  read more<i className=" mx-1 fa-sharp fa-solid fa-arrow-right-long"></i></p>
        </motion.div>
        </motion.div>
      </div>
    </div>
      {/* --------------------------------1.section end ----------------------------------*/}
     

  </div>

{/* -----------------------------------2.second section start------------------------------ */}

 <div className="container-fluid m-auto" style={{background:'#DEF4FD'}}  >
           <div  className="row" >
              <div className="co-12 col-sm-12 col-md-7 col-lg-7">
              <img src={img4} alt="images" className='img-fluid'data-aos="fade-left" />
              </div>
            
              <div className="co-12 col-sm-12 col-md-5 col-lg-5 text-center   align-self-center px-5 mb-sm-4 "data-aos="fade-left">
                  <h1>RUN AN EXTRAMILE <span className='text-center'> EASILY</span> </h1>
                  <p className="text-dark">Prepare for your first half-marathon or run another one easily with our personalized running programs. Try our strength exercises for runners.</p>
                  <button className="btn btn-primary rounded-0 px-5 py-1 fs-5 mt-3 ">READ MORE   <i className=" mx-1 fa-sharp fa-solid fa-arrow-right-long  mx-2 "></i></button>
              
              </div>
            </div>
                  {/*-------------------------- second.second-setion------------------- */}

            <div className="row">
              <div className="co-12 col-sm-12 col-md-5 col-lg-5 text-center   align-self-center px-5" data-aos="fade-right">
                  <h1>WHAT WE HAVE <span className='text-center'>TO OFFER </span> </h1>
                  <p className="text-dark"> Enjoy our progressive programs with world className fitness equipment, trainers and nutrition counselors to help you transform your body and health.</p>
                  <button className="btn btn-primary rounded-0 px-5 py-1 fs-5 mt-3 ">READ MORE   <i className=" mx-1 fa-sharp fa-solid fa-arrow-right-long  mx-2 "></i></button>
              </div>
              <div className="co-12 col-sm-12 col-md-7 col-lg-7">
              <img src={img5} alt="images" className='img-fluid'  />
              </div>
            </div>
  </div>
{/* -----------------------------------2.second section end------------------------------ */}
{/* -----------------------------------3. thired section end------------------------------ */}

      <div className="container-fluid">
        <div className="row"> 
          <div className="col " id="sectionThreeImage" >
          
    
            
          </div>
        </div>
      </div>
{/* -----------------------------------3. thired section end------------------------------ */}
{/* -----------------------------------4. fourth section end------------------------------ */}
 <ReusableCenter heading="TRAINING PROGRAM" paragraphOne='Let us take your workout routines to the next level with our full-body programs and' paragraphTwo='intensity challenges. Find a training that matches your needs.'  />


<div className="container-fluid">
  <div className="row row-cols-lg-4 row-cols-md-2 row-cols-sm-1 row-cols-1">
  <div className="col bg-dark p-5" >
    <p className=' text-primary'>BODY SHAPE</p>
    <h3 className='text-light mt-3'>CROSSFIT</h3>
    <p className='mt-4'>Curabitur ullamcorper ultricies nisi.Nam eget</p>
    <p className='mb-3'>dui.Etiam rhomcus maecenas</p>
    <NavLink className='link-light text-decoration-none ' to=''>READ MORE   <i className=" mx-1 fa-sharp fa-solid fa-arrow-right-long "></i></NavLink>
  </div>
  <div className="col">
    <img src={img6} alt="images" className='img-fluid' />
  </div>
  <div className="col p-5 bg-primary">
  <p className=' text-dark'>RELAX PROGRAM</p>
    <h3 className='text-light mt-3'>BODY BALANCE</h3>
    <p className='mt-4'>Curabitur ullamcorper ultricies nisi.Nam eget</p>
    <p className='mb-3'>dui.Etiam rhomcus maecenas</p>
    <NavLink className='link-light text-decoration-none ' to=''>READ MORE   <i className=" mx-1 fa-sharp fa-solid fa-arrow-right-long "></i></NavLink>
  </div>
  <div className="col"> <img src={img7} alt="images" className='img-fluid' /> </div>
  <div className="col"> <img src={img8} alt="images" className='img-fluid' /> </div>
  <div className="col bg-dark p-5">
  <p className=' text-primary'>CARDIO WARKFLOW</p>
    <h3 className='text-light mt-3'>CARDIO</h3>
    <p className='mt-4'>Curabitur ullamcorper ultricies nisi.Nam eget</p>
    <p className='mb-3'>dui.Etiam rhomcus maecenas</p>
    <NavLink className='link-light text-decoration-none ' to=''>READ MORE   <i className=" mx-1 fa-sharp fa-solid fa-arrow-right-long "></i></NavLink>
  </div>
  <div className="col"> 
  <img src={img9} alt="images" className='img-fluid' />
  </div>
  <div className="col p-5 bg-primary">
  <p className=' text-dark'>POWER-PRO</p>
    <h3 className='text-light mt-3'>BOX</h3>
    <p className='mt-4'>Curabitur ullamcorper ultricies nisi.Nam eget</p>
    <p className='mb-3'>dui.Etiam rhomcus maecenas</p>
    <NavLink className='link-light text-decoration-none ' to=''>READ MORE   <i className=" mx-1 fa-sharp fa-solid fa-arrow-right-long "></i></NavLink>
  </div>
    
  </div>
</div>

{/* -----------------------------------4. fourth section end------------------------------ */}
{/* -----------------------------------5 fifth section end------------------------------ */}
<ReusableCenter heading="SET HIGH FITNESS GOALS" paragraphOne='After you decide to start training we will make sure you get the best fitness program. ' paragraphTwo=' Our sport experts and latest sports equipment are the winning combination.'  />


<div className="container-fluid">
  <div className="row  row-cols-lg-4 row-cols-md-2 row-cols-sm-1 row-cols-1 text-center justify-contetent-between">
    <div className="col p-5 ">
      <img src={img10} alt="" className='img-fluid' />
      <h5 className='mb-3'>QUALITY EQUIPMENT</h5>
      <p className='text-dark lead'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
      <p className='text-dark lead'>Aen ean commodo ligula eget dolor.</p>
    </div>
    <div className="col p-5">
      <img src={img11} alt="" className='img-fluid' />
      <h5 className='mb-3'>HEALTHY NUTRUTION PLAN</h5>
      <p  className='text-dark lead'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
      <p  className='text-dark lead'>Aen ean commodo ligula eget dolor.</p>
    </div>
    <div className="col p-5">
      <img src={img12} alt="" className='img-fluid' />
      <h5 className='mb-3'>SHOWER SERVICE</h5>
      <p  className='text-dark lead'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
      <p  className='text-dark lead'>Aen ean commodo ligula eget dolor.</p>
    </div>
    <div className="col p-5 ">
      <img src={img13} alt="" className='img-fluid' />
      <h5 className='mb-3'>UNIQUE TO YOUR NEEDS</h5>
      <p  className='text-dark lead'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
      <p  className='text-dark lead'>Aen ean commodo ligula eget dolor.</p>
    </div>
  </div>
  </div>

{/* -----------------------------------5 fifth section end------------------------------ */}
{/* -----------------------------------6 six section end------------------------------ */}
<div className="container-fluid">
 
 <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 px-5 align-items-end ">
      <div className="col p-lg-5 px-4 py-2 ">
        <h1>MEET OUR</h1>
        <h1>STRONGEST TEAM</h1>
      </div>
      <div className="col p-lg-5 px-4 py-2 ">
        <button className="btn btn-primary px-5 py-1 rounded-0 fs-5">READ MORE   <i className=" mx-1 fa-sharp fa-solid fa-arrow-right-long  mx-2 "></i> </button>
      </div>
 
 </div>
  
</div>
<div className="container-fluid">
  
<div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-4">
    <div className="col">
      <img src={img14} alt="images" className='img-fluid' />
    </div>
    <div className="col">
    <img src={img15} alt="images" className='img-fluid' />
    </div>
    <div className="col">
    <img src={img16} alt="images" className='img-fluid' />
    </div>
    <div className="col">
    <img src={img17} alt="images" className='img-fluid' />
    </div>
    
  </div>
</div>

{/* -----------------------------------6 six section end------------------------------ */}
{/* -----------------------------------7 seven section end------------------------------ */}
<ReusableCenter heading="STOP WISHING. START DOING." paragraphOne='After you decide to start training we will make sure you get the best fitness program. ' paragraphTwo=' Our sport experts and latest sports equipment are the winning combination.'  />




      <div className="container-fluid  ">
        <div className="row  row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-4 align-items-center px-3 py-4">
          <div className="col px-3">
            <img src={img18} alt="images"  />
            <h5 className='px-5 mt-2'>MOVEMENT</h5>
            <p className='text-dark px-4'>Lorem ipsum dolor sit .</p>
            <p className='text-dark px-5'>Lorem ipsum </p>
          </div>
          <div className="col">
            <img src={img19} alt="images"  />
            <h5 className='px-5 mt-2'>TIME</h5>
            <p className='text-dark px-4'>Lorem ipsum dolor sit .</p>
            <p className='text-dark px-5'>Lorem ipsum </p>
          </div>
          <div className="col">
            <img src={img20} alt="images"  />
            <h5 className='text-center mt-2'>PRACTISE</h5>
            <p className='text-dark text-center'>Lorem ipsum dolor sit .</p>
            <p className='text-dark text-center'>Lorem ipsum </p>
          </div>
          <div className="col px-5">
            <img src={img21} alt="images"  />
            <h5 className='px-5 mt-2'>WEIGHT LOSS</h5>
            <p className='text-dark px-4'>Lorem ipsum dolor sit .</p>
            <p className='text-dark px-5'>Lorem ipsum </p>
          </div>
        </div>
      </div>

{/* -----------------------------------7 seven section end------------------------------ */}

   

    </>
  )
}

export default Home