import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './component/Footer'

import Home from './pages/Home'

import Navbar from './component/Navbar'
import Shop from './pages/Shop'
import Plans from './pages/Plans'
import Contact from './pages/Contact'
import Event from './pages/Event'




const App = () => {
  return (
    <div style={{background:"#DEF4FD"}} >
        
        <BrowserRouter>
          <Navbar/>
        <Routes>
          <Route  path='/' element={<Home/>}  /> 
          <Route  path='/shop' element={<Shop/>}  /> 
          <Route  path='/plans' element={<Plans/>}  /> 
          <Route  path='/contact' element={<Contact/>}  /> 
          <Route  path='/event' element={<Event/>}  /> 
         

        </Routes>
        <Footer/>
        </BrowserRouter>
    </div>
  )
}

export default App