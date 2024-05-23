import React, { useState } from 'react';
import './navbar.css';
const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const toggleMenu = () => {
      setMenuVisible(!menuVisible);
    };
  return (
    <div className='page-1'>
      <div className='top-nav' id='home'>
      <img src='src/assets/images/Rectangle 1 copy 32.png' className='img-1'/>
      <img src='src/assets/images/creative.png' className='img-3'/>
      <img src=' src/assets/images/shape_4_copy_3_2.png'  className='img-4'/>  
      <img src='src/assets/images/shape_4_copy_3.png' className='img-5'/>
      <img src='src/assets/images/tagline_here.png'className='img-6'/> 
      <img src='src/assets/images/Rectangle 1 copy 22.png' className='image-res'/>
      <div>
      <nav className="navbar">
        <button className="menu-btn" onClick={toggleMenu} >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </svg>
      </button>
        
        <ul className={`nav-list group ${menuVisible ? 'show' : ''}`}>
            <li>
              <p className="nav-item-1">
                <a href="#">Home</a>
              </p>
            </li>
            <li>
              <p className="nav-item-1-2">
                <a href="#about">About us</a>
              </p>
            </li>
            <li>
              <p className="nav-item-1-3">
                <a href="#services">Services</a>
              </p>
            </li>
            <li>
              <p className="nav-item-1-4">
                <a href="#pages">Pages</a>
              </p>
            </li>
            <li>
              <p className="nav-item-1-5">
                <a href="#contactus">Contact Us</a>
              </p>
            </li>
          </ul>
          
            <img src='src/assets/images/rectangle_1_copy_4.png' className='img-2-1'/>
        </nav>
      </div>
      </div>
      <img src='src/assets/images/rectangle_1_copy_2.png' className='cube-1'/>
      <div className='cube-2-0'>
      <img src='src/assets/images/Rectangle 1 copy 29.png' className='cube-2'/>
      <h2 className='h2'>WE ARE BEST </h2>
      <p className='p-1'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor maxime quod 
      itaque hic maiores voluptatem accusamus deserunt provident quasi quam, nesciunt.</p>
      <button className='button'>Read More</button>
      </div>
      <div>
        <img src='src/assets/images/rectangle_1.png' className='cube-3'/>
        <h1 className='h1'>1.</h1>
        <h2 className='heading2-1'>LOREM IPSUM</h2>
        <p className='p1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius suscipit ut, odit 
        fugiat nulla illum possimus natus quibusdam quidem nam alias corrupti maiores dicta.</p>
      </div>
      <img src='src/assets/images/rectangle_1_copy_5.png' className='cube-4'/>
    </div>

  )
}

export default Navbar
