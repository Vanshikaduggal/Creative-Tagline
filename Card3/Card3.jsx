import React from 'react'
import './Card3.css'
const Card3 = ({ paragraphText, buttonText }) => {
  return (
    <div className="card3">
      <p>{paragraphText}</p>
      <button>{buttonText}</button>
    </div>
  )
}

export default Card3

