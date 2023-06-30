import React from 'react'
import './Shop.css'
import ReusableCenter from '../component/ReusableCenter'
import { motion } from 'framer-motion';
import Carousel from '../component/Carousel';



import img1 from '../images/ShopImage/h5-slider-background-img-1.jpg'
import img2 from '../images/ShopImage/h5-slider-background-img-2.jpg'
import img3 from '../images/ShopImage/h5-slider-background-img-3.jpg'
import img4 from '../images/ShopImage/h5-banner-img-1.jpg'
import img5 from '../images/ShopImage/h5-banner-img-2.jpg'
import img6 from '../images/ShopImage/h5-banner-img-3.jpg'
import img7 from '../images/ShopImage/h8_single-img-1.png'
import img8 from '../images/ShopImage/h8_single-img-2.png'
import img9 from '../images/ShopImage/h8_single-img-3.png'
import img10 from '../images/ShopImage/h8-phone-img.png'
import img11 from '../images/ShopImage/h5-single-img-1.jpg'
import img12 from '../images/ShopImage/h5-single-img-2.jpg'


import ThreeImage from '../component/ThreeImage';
import Progress from '../component/Progress';



const Shop = () => {
  return (
    <>
            <div className="container-fluid">
                <div className="row">
                    <Carousel imageOne={img1} imageTwo={img2} imageThree={img3}  />
                    
                </div>
            </div>
            {/*-------------------------------------2.second section second---------------------------- */}
            <ReusableCenter heading="FITNESS EQUIPMENT" paragraphOne="Lorem ipsum dolor sit amet, consectetuer adipiscing elit nean commodo ligula eget" paragraphTwo="dolor. Cum sociis Theme natoque penatibus et magnis dis." />    
        
            <div className="container-fluid m-auto">
              <div className="row gap-5 justify-content-center">
                <ThreeImage img={img4} text='ACTIVE WEAR' price='$280' />
                <ThreeImage img={img5} text=' STRAINGHT EQUIPMENT' price='$280' />
                <ThreeImage img={img6} text=' CARDIO EQUIPMENT' price='$280' />
            
              </div>
            </div>

          
             <ReusableCenter heading="SUPLIMENT" paragraphOne="Lorem ipsum dolor sit amet, consectetuer adipiscing elit nean  commodo ligula eget" paragraphTwo="dolor. Cum sociis Theme natoque penatibus et magnis dis." />    
         
             <div className="container-fluid m-auto">
               <div className="row gap-5 justify-content-center">
                 <ThreeImage img={img7} text='DIET WHEY' price='$280' />
                 <ThreeImage img={img8} text=' ESSENTIAL WOMEN' price='$280' />
                 <ThreeImage img={img9} text=' MEN' price='$280' />
             
               </div>
               </div>
                 {/*-------------------------------------2  end  section second---------------------------- */}
                 {/*-------------------------------------3  start section  -------------------------------- */}

                 <div className="container-fluid">
                    <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 mt-5">
                            <div className="col px-3 align-self-center my-5">
                                
                                <Progress done='69' />
                                <h6 className='mb-5'>IMMUNE</h6>
                                <Progress done='88' />
                                <h6 className='mb-5'>HEART & ENERGY</h6>
                                <Progress done='70' />
                                <h6 className='mb-5'>HEART & ENERGY</h6>
                                <Progress done='45'  />
                                <h6 className='mb-5'>SKIN</h6>
                                
                               
                            </div>
                            <div className="col">
                                <img src={img10} alt="" className='img-fluid' />
                            </div>
                    </div>
                 </div>
                {/*-------------------------------------3  start section  -------------------------------- */}
                {/*------------------------------------- 4. start section  -------------------------------- */}
                   
                <div className="container-fluid">
                    <div className="row gap-5">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 px-5 my-5">
                            <h1 className=''>WE DELIVER NATIONWIDE</h1>
                           <h6 className='my-4'>Lorem ipsum dolor sit amet justo, consectetuer adipiscing elit. Aenean commodo ligula eget dolor mauris sit amet.</h6>
                            <button className="btn btn-primary  rounded-0 px-5 py-1 fs-5 mt-3 ">READ MORE   <i className=" mx-1 fa-sharp fa-solid fa-arrow-right-long  mx-2 "></i></button>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-3">
                            <img src={img11} alt="images" className='' height={'458px'} />
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-3">
                        <img src={img12} alt="images" className=''  height={'362px'}  />
                        </div>
                    </div>
                </div>
 
                 
                {/*------------------------------------- 4. end section  -------------------------------- */}
                {/*------------------------------------- 5. start section  -------------------------------- */}
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col" id="shoplastimgae">
                                    
                                    <h1  id='shoplastHeading' className='w-50  text-center ' >FINAL CALL, UP TO 70% OFF SALE. LET’S GET MOVING</h1>

                                    
                                </div>
                            </div>
                        </div>
                {/*------------------------------------- 5. end section  -------------------------------- */}
               
       
    </>
  )
}

export default Shop