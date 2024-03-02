import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaUser,FaBagShopping, FaSistrix } from "react-icons/fa6";
import Home from './shop/Home';
import Shop from './shop/Shop';
import WhyUs from './shop/WhyUs';
import Testimonial from './shop/Testimonial';
import Contact from './shop/Contact';
import './App.css';


 

const Main = () => {
  return (<>
    <div className='menubar'>
    <Router>
      <div className="main">
        <ul>
          <li className='nav' > <Link to="/" style={{textDecoration: 'none',color:'black'}}>Home</Link></li>
          <li className='nav'> <Link to="/Shop" style={{textDecoration: 'none',color:'black'}}>Shop</Link></li>
          <li className='nav'> <Link to="/WhyUs" style={{textDecoration: 'none',color:'black'}}>WhyUs</Link></li>
          <li className='nav'> <Link to="/Testimonial" style={{textDecoration: 'none',color:'black'}}>Testimonial</Link></li>
          <li className='nav'> <Link to="/Contact" style={{textDecoration: 'none',color:'black'}}>Contact</Link></li>
          
          <li className='nav'> <FaUser />Login</li>
          <li><FaBagShopping /></li>
          <li>< FaSistrix /></li>

        </ul> 
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/Shop" element={<Shop/>}></Route>
          <Route exact path="/WhyUs" element={<WhyUs/>}></Route>
          <Route exact path="/Testimonial" element={<Testimonial/>}></Route>
          <Route exact path="/Contact" element={<Contact/>}></Route>
          
        </Routes>
      </div>
    </Router>
  </div>
   
   
  
  
 

</>

  )
}

export default Main