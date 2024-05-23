import React from 'react'
import './card4.css'
export const Card4 = ({
    title,
    description,
  }) => {
    return (
      <div className="card4">
        {title && <h1 className="card4-title">{title}</h1>}
        {description && <p className="card4-description">{description}</p>}
        
    </div>
    );
  };