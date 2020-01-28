import React from 'react'
import './style.css'

function ImageCard(props) {
    return (
        <div className='image'>
            <img
            alt={ props.name }
            src={ props.image }
            onClick={ () => props.clicked(props.id)} />
        </div>
    )
}

export default ImageCard