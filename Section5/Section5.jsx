import React from 'react'
import './section5.css'
import { Card4 } from '../Card4/Card4'
const Section5 = () => {
  return (
    <div className='section5' id='contactus'>
      <img src='src/assets/images/rectangle_1_copy_20.png' className='cube-img-3'/>
      <h2 className='heading5'>5.</h2>
      <h3 className='heading2-last'>GET IN TOUCH</h3>
    <div className="icons">
    <div className='icon-email'>
      <img src='src/assets/images/Rectangle 1 copy 16.png' className='email'/>
    <div className='email1'>
    <Card4
      title="EMAIL"
      description='free@psdfreebies.com free@psdfreebies.com'
      />
    </div>
      </div>

    <div className="icon-phone">
        <img src='src/assets/images/Rectangle 1 copy 17.png' className='phone'/>
        <div className='phone1'>
    <Card4
      title="CALL US!"
      description='+123 456 7890 '
      />
    </div>
    </div>


    <div className="icon-location">
        <img src='src/assets/images/Rectangle 1 copy 18.png' className='location'/>
        <div className="location1">
        <Card4
      title="ADDRESS"
      description='123, Main Road ,New City My Country 123456 '
      />
        </div>
    </div>
    </div>

    <p className='copyright'>COPYRIGHT 2019| Designed By PSDFreebies.com</p>
    <div>
    <img src='src/assets/images/rectangle_1_copy_21.png' className='last-img'/>
    <h4 className='top'><a href="#home" style={{color:"white"}}>TOP</a></h4>    
    </div>
    </div>

  )
}

export default Section5
