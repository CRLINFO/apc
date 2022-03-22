/* ---------- Esto debe de ir en archivo que se exportara al index*/
import PropTypes from 'prop-types'
import React, { useState } from 'react'

/* --------------------------- Funcional component*/
                            //>Resibiendo una función como propiedad
export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue]  = useState('');

    //>Esta función se llama desde el evento onChange del inputText
    const handleInputChange = (e)=>{

        //>El parametro 'e' nos permite obtener le valor de la tecla presionada
        setInputValue(e.target.value);

    }

    //>Esta función se llama desde el evento 'onSubmit' del formualario
    const handleSubmit = (e)=>{

        e.preventDefault();

        if (inputValue.trim().length > 2) {
          
          //>Uso de la funcion pasada como propiedad al componente
          setCategories(cats => [inputValue, ...cats]);

          setInputValue('')

        }


    }

  return (
    <form onSubmit={handleSubmit}>
                                              {/* Llamada a la funcion handleInputChange */}
        <input type='text' value={inputValue} onChange={handleInputChange}/>

    </form>
  )
}

/* ----------------------- Propiedades del componentes*/
AddCategory.prototype = {
  setCategories: PropTypes.func.isRequired
}

/* ------------------------------ Exportaciones*/
export default AddCategory;
