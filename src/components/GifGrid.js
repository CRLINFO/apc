import React, {Fragment, useState, useEffect} from 'react'
import { useFetchGifs } from '../hooks/useFetchGif';
import { GifGirdItem } from './GifGirdItem';

/* --------------------------- Funcional component*/
const GifGrid = ({category}) => {

    const  {data:images, loading}  = useFetchGifs(category);

    return (
        <>
            <h3 > {category} </h3>

            {loading && <p>Cargando</p> }

            <div className="card-grid" >
 
                {images.map(img =>(

                    <GifGirdItem key={img.id} {...img}/>

                    ))
                }

            </div>
        </>

    )
}


// /* ------------------------------ Exportaciones*/
export default GifGrid;