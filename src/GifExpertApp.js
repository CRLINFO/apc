/* ---------- Esto debe de ir en archivo que se exportara al index*/
import PropTypes from 'prop-types'
import { Fragment, useState } from "react";
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

/* --------------------------- Funcional component*/
const GifExpertApp = ()=>{
    
    //>useState que establece un array a la constante desestructurada 'categories'
    const [categories, setCategories] = useState(['Dragon Ball'])

    return (
        <Fragment>
            <h2>GifExpertApp</h2>
            
            {/* Pasando como propiedad una función al componenente addCategory*/}
            <AddCategory setCategories = {setCategories}/>

            <hr/>

            <ol>

                { //>Recorriendo todas las posiciones del array categorias
                    categories.map((category) =>(
                                    //>El id de la categoria debe ser unico, de lo contrario lanzara un
                        <GifGrid key={category} category =  {category}/>

                    ))
                    
                }

            </ol>

        </Fragment>
    );

}

/* ------------------------------ Exportaciones*/
export default GifExpertApp;