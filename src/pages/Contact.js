import React from 'react'
import Header from '../component/Header'
import img from '../images/ShopImage/h5-banner-img-3.jpg'
import { Form  } from 'formik'

const Contact = () => {
  return (
    <>
    <Header image={img} plan='contact us' />
    <div className="continer m-auto">
        <div className="row">
            <div className="col-8 m-auto my-5" >
            <input type="text" class="form-control form-control-lg rounded-0  mt-4 border border-primary"  placeholder="First Name"/>
            <input type="text" class="form-control form-control-lg rounded-0  mt-4 border border-primary"  placeholder="Last Name"/>
            <input type="phone" class="form-control form-control-lg rounded-0 mt-4 border border-primary"  placeholder="Phone Number"/>
            <input type="email" class="form-control form-control-lg rounded-0 mt-4 border border-primary"  placeholder="Email"/>
            <textarea name="" id="" cols="120" rows="5" className='mt-4 border border-primary '  >Comment</textarea>
            <button className="btn btn-primary px-5 py-1 fs-5  mt-4 rounded-0">SEND</button>
  

            </div>
        </div>
    </div>
    <div className="container-fluid">
        <div className="row bg-primary ">
                <div className="col-6 my-5 text-center m-auto">
                    <h1 className='text-light'>CONTACT WITH US</h1>
                        <div className="d-flex justify-content-center mt-4">
                    <h2><i className="fa-brands fa-facebook mx-2 fs-1 text-light"></i></h2>
                    <h2><i className="fa-brands fa-twitter mx-2 fs-1 text-light"></i></h2>
                    <h2><i className="fa-brands fa-instagram mx-2 fs-1 text-light"></i></h2>
                    <h2><i className="fa-brands fa-youtube mx-2 fs-1 text-light"></i></h2>
                    <h2><i class="fa-brands fa-linkedin-in  mx-2 fs-1 text-light"></i></h2>
                        </div>
                </div>
        </div>
    </div>

    </>
  )
}

export default Contact