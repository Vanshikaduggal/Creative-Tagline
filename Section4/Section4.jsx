import React from 'react'
import './section4.css'
import Card3 from '../Card3/Card3'
const Section4 = () => {
  return (
    <div className='section4' id='pages'>
        <img src='src/assets/images/rectangle_1_copy_20.png' className='cube-img-1'/>
      <h2 className='heading4'>4.</h2>
      <h3 className='heading'>TESTIMONIALS</h3>
      <h4 className='heading-4'>LOREM IPSUM DOLOR</h4>
    <div className='card3-1'>
    <Card3
     paragraphText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore magni quod eveniet illo blanditiis accusamus
     molestiae hic sit cumque ex modi, aspernatur mollitia impedit, minus magnam soluta enim dolorum quae sed? Dolorem deserunt 
     enim reiciendis? Officiis sit labore minus aliquam." 
     buttonText="READ MORE" />  
         <img src='src/assets/images/rectangle_4_copy_2.png' className='line8'/>
    </div>
    <div className="card3-2">
        <Card3 paragraphText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore magni quod eveniet illo blanditiis 
        accusamus molestiae hic sit cumque ex modi, aspernatur mollitia impedit, minus magnam soluta enim dolorum quae sed? Dolorem
         deserunt enim reiciendis? Officiis sit labore minus aliquam." 
     buttonText="READ MORE" />
    </div>
    </div>
  )
}

export default Section4

