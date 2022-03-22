import React from 'react'

export const GifGirdItem = ({id, title, url}) => {

  return (


    <div className='card animate__animated animate__fadeInLeft'>
        <img src={url} ></img>
        <p>{title}</p>
    </div>

  )
}
