import React from 'react'
import Header from '../component/Header'
import ReusableText from '../component/ReusableText'
import img1 from '../images/EventImage/h6-background-img-1.jpg'
import img2 from '../images/EventImage/h6-background-img-2.jpg'
import img3 from '../images/EventImage/h6-background-img-3.jpg'
import img4 from '../images/EventImage/h6-background-img-4.jpg'
import img5 from '../images/EventImage/h6-background-img-5.jpg'
import img6 from '../images/EventImage/h6-background-img-6.jpg'
import img7 from '../images/EventImage/h6-background-img-7.jpg'
import img8 from '../images/EventImage/h6-background-img-8.jpg'


const Event = () => {
  return (
    <>
            <div className="container-fluid">
                <div className="row">
                   <div className="col col-12 col-sm-12 col-md-12 col-lg-7">
                    <Header  image={img8} plan="The final countDown "  />
                   </div>
                   <div className="col col-12 col-sm-12 col-md-12 col-lg-5 mt-5 ">
                            <ReusableText head1='Only 70' head2='Sports' head3='available' />
                   </div>
                  
                </div>
                <div className="row">
                 
                   <div className="col col-12 col-sm-12 col-md-12 col-lg-5 mt-5">
                   <ReusableText head1='Explore' head2='Your ' head3='world' />
                   </div>
                   <div className="col col-12 col-sm-12 col-md-12 col-lg-7">
                    <Header  image={img2}  />
                   </div>
                  
                </div>

                <div className="row">
                   <div className="col col-12 col-sm-12 col-md-12 col-lg-7">
                    <Header  image={img4}   />
                   </div>
                   <div className="col col-12 col-sm-12 col-md-12 col-lg-5 mt-5">
                   <ReusableText head1='consistancy' head2='practice ' head3='trust' />

                   </div>
                  
                </div>


                <div className="row">
                 
                 <div className="col col-12 col-sm-12 col-md-12 col-lg-5 mt-5">
                 <ReusableText head1='make' head2='FEATURED ' head3=' ATHLETES' />
                 </div>
                 <div className="col col-12 col-sm-12 col-md-12 col-lg-7">
                  <Header  image={img5}  />
                 </div>
                
              </div>

              <div className="row">
                   <div className="col col-12 col-sm-12 col-md-12 col-lg-7">
                    <Header  image={img6}   />
                   </div>
                   <div className="col col-12 col-sm-12 col-md-12 col-lg-5 mt-5">
                   <ReusableText head1='make' head2='Big ' head3=' Dream' />
                   </div>
                  
                </div>

                <div className="row">
                 
                 <div className="col col-12 col-sm-12 col-md-12 col-lg-5 mt-5">
                 <ReusableText head1='Fight' head2='Yours ' head3=' self' />
                 </div>
                 <div className="col col-12 col-sm-12 col-md-12 col-lg-7">
                  <Header  image={img7} />
                 </div>
                
              </div>
              
              
              <div className="row">
                   <div className="col col-12 col-sm-12 col-md-12 col-lg-7">
                    <Header  image={img1}  />
                   </div>
                   <div className="col col-12 col-sm-12 col-md-12 col-lg-5 mt-5">
                   <ReusableText head1='lift ' head2='To ' head3='power' />
                   </div>
                  
                </div>
                

            </div>
    </>
  )
}

export default Event