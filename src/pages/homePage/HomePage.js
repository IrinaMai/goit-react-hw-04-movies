import React, {useState, useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';
import api from '../../api/api'
import {title, list, item } from './HomePage.module.css'

const listInitial = []

const HomePage = () => {
    const [state, setState] = useState([...listInitial]);
    const location = useLocation();
      
    useEffect(() => {
        api.fetchMovieList().then(result => setState(prev => ([...prev, ...result.results])))
    }, []);
 
    return (
        <>
        <h2 className={title}>Tending movies list</h2>
            {(state.length>0) && (
                <ol className= {list}>
                {state.map(({ id, title, poster_path}) =>
                (<li className={item} key={id}>
                    <Link to={{pathname:`/movies/${id}`, state: {from: location} }}>{title}</Link></li>))} 
            </ol> )}
        </>
    );
};

export default HomePage;