import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('');

    //obtengo el dato ingresado en mi input
    const handleInputChange = (e)=> {
        setInputValue(e.target.value);
    }
    //añado a mi arreglo de categorias
    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length>2){
            setCategories(cat => [inputValue,...cat]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Search"
            />
        </form>
    )
}
AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired
};