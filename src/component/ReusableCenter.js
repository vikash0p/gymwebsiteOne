
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const ReusableCenter = (props) => {
  useEffect(()=>{
    Aos.init({
      duration:1000,
      delay:100,
      once:true
    
    })
  })
 

  
    const{heading,paragraphOne,paragraphTwo}=props
  return (
    <>
        <div className="container-fluid">
          
        </div>
    <div className="container-fluid"  >
         <div className="row"  style={{height:'350px',background:'#DEF4FD'}}  data-aos="fade-down">
           <div className="col w-50 text-center m-auto align-self-center px-3">
             <h1 className='fw-bold'>{heading}</h1>
             <p className='text-dark lead mt-3'>{paragraphOne}</p>
             <p className='text-dark lead'>{paragraphTwo}</p>
           </div>
         </div>
       </div>

    </>
  )
}

export default ReusableCenter