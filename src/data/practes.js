/* -------------------------------------------------------------------------- */
/*                      GifExpertApp - Component (VID70)                      */
/* -------------------------------------------------------------------------- */
/* ---------- Esto debe de ir en archivo que se exportara al index*/
// import PropTypes from 'prop-types'
// import { Fragment } from "react";

import AddCategory from "../components/AddCategory"

/* --------------------------- Funcional component*/
// const GifExpertApp = ()=>{
    
//     return (
//         <Fragment>
//             <h2>GifExpertApp</h2>
//             <hr/>
//         </Fragment>
//     );

// }

/* ------------------------------ Exportaciones*/
// export default GifExpertApp;

/* -------------------------------------------------------------------------- */
/*                   Crando una lista de categorias (VID71)                   */
/* -------------------------------------------------------------------------- */
/* ---------- Esto debe de ir en archivo que se exportara al index*/
// import PropTypes from 'prop-types'
// import { Fragment, useState } from "react";

/* --------------------------- Funcional component*/
// const GifExpertApp = ()=>{
    
    //>useState que establece un array a la constante desestructurada 'categories'
    // const [categories, setCategories] = useState(['One Punch', 'Batman', 'Dragon Ball'])

    // const hendleAdd = ()=>{

        //>Función del useState que modifica el array categories
    //     setCategories([...categories, 'pepe']);

    // }

    // return (
    //     <Fragment>
    //         <h2>GifExpertApp</h2>
    //         <hr/>

    //         <ol>

                {/* { //>Recorriendo todas las posiciones del array categorias 
                     categories.map((category) =>{

                        return <li key={category}>{category}</li>

                    })}

            </ol>

            <button onClick={hendleAdd}>Agregar</button>
        </Fragment>
    );

} */}

/* ------------------------------ Exportaciones*/
// export default GifExpertApp;


/* -------------------------------------------------------------------------- */
/*                       Componente AddCategory VID(72)                       */
/* -------------------------------------------------------------------------- */
/* ---------- Esto debe de ir en archivo que se exportara al index*/
// import React, { useState } from 'react';

/* --------------------------- Funcional component*/
// export const AddCategory = () => {

//     const [inputValue, setInputValue]  = useState('Hola mundo');

    //>Esta función se llama desde el evento onChange del inputText
    // const handleInputChange = (e)=>{

        //>El parametro 'e' nos permite obtener le valor de la tecla presionada
    //     setInputValue(e.target.value);

    // }

    //>Esta función se llama desde el evento 'onSubmit' del formualiro
    // const handleSubmit = (e)=>{

    //     e.preventDefault();

    //     console.log('echo');

    // }

//   return (
//     <form onSubmit={handleSubmit}>
//                                               {/* Llamada a la funcion handleInputChange */}
//         <input type='text' value={inputValue} onChange={handleInputChange}/>

//     </form>
//   )
// }

/* ------------------------------ Exportaciones*/
// export default AddCategory;

/* -------------------------------------------------------------------------- */
/*                   Comunicación entre componentes VID(73)                   */
/* -------------------------------------------------------------------------- */
/* ---------- Esto debe de ir en archivo que se exportara al index*/
// import PropTypes from 'prop-types'
// import React, { useState } from 'react'

// /* --------------------------- Funcional component*/
                           //>Resibiendo una función como propiedad
// export const AddCategory = ({setCategories}) => {

//     const [inputValue, setInputValue]  = useState('');

    //>Esta función se llama desde el evento onChange del inputText
//     const handleInputChange = (e)=>{

        //>El parametro 'e' nos permite obtener le valor de la tecla presionada
//         setInputValue(e.target.value);

//     }

     //>Esta función se llama desde el evento 'onSubmit' del formualario
//     const handleSubmit = (e)=>{

//         e.preventDefault();

//         if (inputValue.trim().length > 2) {
          
           //>Uso de la funcion pasada como propiedad al componente
//           setCategories(cats => [...cats, inputValue]);

//           setInputValue('')

//         }


//     }

//   return (
//     <form onSubmit={handleSubmit}>
//                                               {/* Llamada a la funcion handleInputChange */}
//         <input type='text' value={inputValue} onChange={handleInputChange}/>

//     </form>
//   )
// }

// /* ----------------------- Propiedades del componentes*/
// AddCategory.prototype = {
//   setCategories: PropTypes.func.isRequired
// }

// /* ------------------------------ Exportaciones*/
 // export default AddCategory;

 /* -------------------------------------------------------------------------- */
 /*                fetch API -Obtener imagenes deseadas (VID74)                */
 /* -------------------------------------------------------------------------- */
/* ---------- Esto debe de ir en archivo que se exportara al index*/
// import { Fragment, useState } from "react";
// import AddCategory from './components/AddCategory';
// import GifGrid from './components/GifGrid';

// /* --------------------------- Funcional component*/
// const GifExpertApp = ()=>{
    
//     //>useState que establece un array a la constante desestructurada 'categories'
//     const [categories, setCategories] = useState(['Dragon Ball'])

//     return (
//         <Fragment>
//             <h2>GifExpertApp</h2>
            
//             {/* Pasando como propiedad una función al componenente addCategory*/}
//             <AddCategory setCategories = {setCategories}/>

//             <hr/>

//             <ol>

//                 { //>Recorriendo todas las posiciones del array categorias
//                     categories.map((category) =>(
//                                     //>El id de la categoria debe ser unico, de lo contrario lanzara un
//                         <GifGrid key={category} category =  {category}/>

//                     ))
                    
//                 }

//             </ol>

//         </Fragment>
//     );

// }

/* ------------------------------ Exportaciones*/
// export default GifExpertApp;


/* ------------------------------ Componente 2 ------------------------------ */

// import React, { Fragment, useState, useEffect } from 'react'
// import GifExpertApp from '../GifExpertApp';

// /* --------------------------- Funcional component*/
//                 //Resibiendo una propiedad como parametro en el componente
// const GifGrid = ({category}) => {

//     //>Esta función se utiliza para conectarse a la api de 'giphi' y obtener ciertas imagenes
//     const getGifs =  async ()=>{ //>Convierte una función en una promesa

//         const url = 'https://api.giphy.com/v1/gifs/search?q=batman&limit=10&key=ppmJmE9M3OnjXuCvk1US1goJRZflHKhP';        
//         //>fectch API proporciona una interfaz para recuperar recursos (incluso atravez d la red)
//         const resp = await fetch(url)
//         const {data} = await resp.json();

//         //>Recorremos el objeto data para traernos propiedades en concreto
//         const gifs = data.map(img => {

//             return {
//                     id: img.id, 
//                     title:img.title, 
//                     url: img.images?.downsized_medium.url
//                 }

//             });

//         console.log(gifs);

//     }

//     getGifs();

//   return (

//     <Fragment>
//         <h3>{category}</h3>
//     </Fragment>

//   )
// }


// /* ------------------------------ Exportaciones*/
// export default GifGrid;

 /* -------------------------------------------------------------------------- */
 /*                              useEffect (VID75)                             */
 /* -------------------------------------------------------------------------- */
 
//  import React, { Fragment, useState, useEffect } from 'react'
//  import GifExpertApp from '../GifExpertApp';
 
 /* --------------------------- Funcional component*/
                 //Resibiendo una propiedad como parametro en el componente
//  const GifGrid = ({category}) => {
 
//          const  [count, setCount] = useState(0)
         
//          useEffect(()=>{
 
//              getGifs()
 
//          }, [2])
 
//      //>Esta función se utiliza para conectarse a la api de 'giphi' y obtener ciertas imagenes
//      const getGifs =  async ()=>{ //>Convierte una función en una promesa
 
//          const url = 'https://api.giphy.com/v1/gifs/search?q=batman&limit=10&key=ppmJmE9M3OnjXuCvk1US1goJRZflHKhP';        
//          //>fectch API proporciona una interfaz para recuperar recursos (incluso atravez d la red)
//          const resp = await fetch(url)
//          const {data} = await resp.json();
 
//          //>Recorremos el objeto data para traernos propiedades en concreto
//          const gifs = data.map(img => {
 
//              return {
//                      id: img.id, 
//                      title:img.title, 
//                      url: img.images?.downsized_medium.url
//                  }
 
//              });
 
//          console.log(gifs);
 
//      }
 
 
//    return (
 
//      <Fragment>
//          <h3>{category}</h3>
//          <h4>{count}</h4>
//          <button onClick={() => setCount(count + 1)}>click</button>
//      </Fragment>
 
//    )
//  }


/* -------------------------------------------------------------------------- */
/*                  Mostrar los titulos de las imagenes (VID76                */
/* -------------------------------------------------------------------------- */
/* ---------- Esto debe de ir en archivo que se exportara al index*/
// import React, {
//     Fragment, useState, useEffect} from 'react'
// import GifExpertApp from '../GifExpertApp';
// import { GifGirdItem } from './GifGirdItem';


/* --------------------------- Funcional component*/
// const GifGrid = ({category}) => {

//     const [images, setImages] = useState([])

//     useEffect(() => {

//         getGifs()

//     }, [2])

    //>Esta función se utiliza para conectarse a la api de 'giphi' y obtener ciertas imagenes
    // const getGifs = async () => { //>Convierte una función en una promesa


        // const url = 'https://api.giphy.com/v1/gifs/search?q=batman&limit=10&key=ppmJmE9M3OnjXuCvk1US1goJRZflHKhP';
        //>fectch API proporciona una interfaz para recuperar recursos (incluso atravez d la red)
        // const resp = await fetch(url)
        // const {data} = await resp.json();

        //>Recorremos el objeto data para traernos propiedades en concreto
        // const gifs = data.map(img => {


        //     return {
        //         id: img.id,
        //         title: img.title,
        //         url: img.images?.downsized_medium.url
        //     }

        // });

        // console.log(gifs);

    //     setImages(gifs)

    //     console.log(images);
        
    // }


    // return (
        
        // <Fragment >
            {/* <h3 > {category} </h3>

            <ol> 
             //>Recorriendo todas las posiciones del array images para retornar un lista con el titulo y el id de la imagen  
                 {images.map(({id, title}) =>(

                    <li key={id}>

                        {title}

                    </li>

                    ))
                }
            </ol>  */}

            {/* <h3 > {category} </h3>

            {images.map(img =>(

                <GifGirdItem key={img.id} {...img}/>

            ))
            }
        

        </Fragment>

    )
} */}


// /* ------------------------------ Exportaciones*/
// export default GifGrid;

/* -------------------------------------------------------------------------- */
/*                            Custom HOOKS VID(79)                            */
/* -------------------------------------------------------------------------- */
// import {useState} from 'react'

// export const useFetchGifs = ()=>{


//     const [state, setState] = useState({
//         data:[],
//         loading: true
//     })

    
//     setTimeout(() => {
        
//         setState({
//             data:[1,2, 3],
//             loading: false
//         })
        
//     }, 3000);
    
//     return state;
    
// }

/* -------------------------------------------------------------------------- */
/*         useFetchGifs - obtener imágenes y bandera de carga (VID80)         */
/* -------------------------------------------------------------------------- */