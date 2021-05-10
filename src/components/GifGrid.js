// import React, { useEffect, useState } from 'react'
import React from 'react'
import PropTypes from 'prop-types'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({category}) => {

    //custom hook
    const {data:images ,loading} = useFetchGifs(category);
    
    return (
        <div className="card-grid">
            <h3 className="animate__animated animate__backInLeft">{category}</h3>
            { loading && <p>Cargando...</p> }
            <div className="card-grid-img">
                {
                    images.map( img => (
                        <GifGridItem 
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </div>
    )
}

GifGrid.propTypes = {
    category : PropTypes.string.isRequired
}
