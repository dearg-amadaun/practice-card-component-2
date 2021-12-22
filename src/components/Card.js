import React from 'react'
import './card.css'

function Card({title, image, body}) {
    return (
        <div className='card-container'>
            <div className='image-container'>
                <img src={image} alt='' />
            </div>
            <div className="card-content">
                <div className='card-title'>
                    <h3>{title}</h3>    
                </div>
                <div className='card-body'>
                    <p>{body}</p>
                </div>
            <button>
                <a href='#'>
                    View More
                </a>
            </button>
            </div>
           
        </div>
        
    )
}

export default Card


