import React from 'react'
import {wrapActor, imgActor } from '../pages/movieDetails/MovieDetailes.module.css'


const Cast = ({ cast = [] }) => {

    return (
    <div className={wrapActor}>
    <ul>
        {(cast.length > 0) && cast.map(item => (
            <li key={item.id}>
                <p><b>Character: </b>{item.character}</p>
            <p><b>Actor: </b>{item.name}</p>
            <img className={imgActor} src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`} alt={item.name}/>
            </li>
        ))}
    </ul>
    </div>

    );
}

export default Cast;