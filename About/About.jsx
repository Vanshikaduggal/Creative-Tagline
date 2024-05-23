import React from 'react'
import './about.css'
import {Cards} from '../../components/Cards/Cards'
const About = () => {
  return (
    <div className='about' id='about'>
      <h2 className='head2'>WHY CHOOSE US</h2>
      <h3 className='head-3'>LOREM IPSUM DOREM</h3>
      
      <div>
      
      <div className='card'>
      <div className='card1'>
      <Cards
          title="FEATURE"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna "
        />
      </div>
        <img src="src/assets/images/rectangle_4_copy_2.png" className='line'/>
        <div className='card2'>
        <Cards
          title="ABOUT US"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna "
        />
        </div>
      </div>
      <button className='button3'>READ MORE</button>
      </div>
      
      
    </div>
  )
}

export default About
