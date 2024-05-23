import React from 'react'
import './section3.css'
import {Card2} from '../../components/Card2/Card2'
const Section3 = () => {
  return (
    <div className='section3'id='services'>
        <img src='src/assets/images/rectangle_3_copy_3.jpg' className='img'/>
        <div>
        <img src='src/assets/images/rectangle_1_copy_20.png' className='cube-img'/>
        <h2 className='heading3'>3.</h2>
        </div>
        <h3 className='head3'>HOW IT WORKS?</h3>
        <h4 className='head4'>LOREM IPSUM DOLOR</h4>
      <div className='card'>
        <img src='src/assets/images/Ellipse 2.png' className='circle1'/>
        <div className='c1'>
        <Card2
          title="LOREM IPSUM DOLOR"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut "
        />
        </div >
        <div><img src="src/assets/images/rectangle_4_copy_2.png" className='line1'/></div>
        <img src='src/assets/images/Ellipse 2 copy 2 (1).png' className='circle2'/>
        <div className='c2'>
        <Card2
          title="LOREM IPSUM DOLOR"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut  "
        />
        </div>
        <img src="src/assets/images/rectangle_4_copy_2.png" className='line2'/>
        <img src='src/assets/images/Ellipse 2 copy 3 (1).png' className='circle3'/>
        <div className='c3'>
        <Card2
          title="LOREM IPSUM DOLOR"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut  "
        />
        </div>
      </div>
    </div>
  )
}

export default Section3
