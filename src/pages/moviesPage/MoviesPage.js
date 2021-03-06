import React, { useEffect, useState } from 'react';
import { Link, useHistory, useRouteMatch, useLocation } from 'react-router-dom';
import api from '../../api/api';
import {title, list, item, movieId } from './MoviesPage.module.css'


const initialState = {
    id: '',
    query: '',
    queryList: [],
  
}

const MoviesPage = () => {
    const [state, setState] = useState({ ...initialState })
    const match = useRouteMatch();
    const location = useLocation();
    const history = useHistory();

    useEffect(() => {
        if (location.state) {
            api.fetchMovieQuery(location.state.query).then(result => setState(prev => ({ ...prev, queryList: [...result.results], query: location.state.query })))
        }
 
    }, [])

     const onQueryHndl = (e) => {
        setState((prev) => ({ ...prev, query: e.target.value }))
    }
       
    const onSubmitHndl = (e) => {
        e.preventDefault();
        history.push({pathname: location.pathname, search: `query=${state.query}`})
        api.fetchMovieQuery(state.query).then(result => setState(prev => ({ ...prev, queryList: [...result.results] })))
    }
 
    
    return (
        <>
            <div>
                <form onSubmit={onSubmitHndl}>
                    <label className={title}> Insert key words
                     <input type="text" value={state.query} name="query" onChange = {onQueryHndl} />
                    </label>
                    <button type='submt'>Search</button>
                </form>
            </div>
            <ol className={list}>
                {state.queryList.map(({ id, title }) =>
                (<li key={id} className={item}>
                    <Link to={{pathname:`${match.url}/${id}`, state: {from: location.pathname, query: state.query} }} >{title}</Link></li>))} 
             </ol>
        </>
    );
}

export default MoviesPage;