import React from 'react'
import './card2.css'
export const Card2 = ({
    title,
    description,
  }) => {
    return (
      <div className="card-container-2">
        {title && <h1 className="card-title-2">{title}</h1>}
        {description && <p className="card-description-2">{description}</p>}
        
    </div>
    );
  };
