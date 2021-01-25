import React, { useState, useEffect } from 'react';
import { useRouteMatch, useHistory, useLocation, Link } from 'react-router-dom';
import api from '../../api/api';
import {detailedDiv, btn, image, description, title} from './MovieDetailes.module.css'

const showInitial = null;

// const reviewInitial = {
//     author: '',
//     content: '',
//     created: ''
// }

const MovieDetailes = () => {
    const [state, setState] = useState({})
    const [review, setReview] = useState ({})
    const match = useRouteMatch();
    const history = useHistory();
    const location = useLocation()


    useEffect(() => {
        api.fetchMovieId(match.params.movieId).then(result =>  (setState({ ...result })) )
    }, []);

    const onGoBackClick = () => {
        history.push(location.state.from)
    }

    const onCastClick = () => {
        
    }
    const onReviewsClick = () => {
        api.fetchReview(match.params.movieId).then(result => (setReview(prev => ({...prev, ...result.results})))).then(console.log(review))
    }


    return (
        <>
        <button type="button" onClick={onGoBackClick} className={btn}> GO BACK </button>
            <div className={detailedDiv}>
        <img src={`https://image.tmdb.org/t/p/w500/${state.poster_path}`} alt={state.title} className={image }/>
                
       <div className={description}>
        <h2 className={title}>{state.title}</h2>
        <p><span className={title}>User score: </span> {state.popularity}</p>
        <h4 className={title}>Overview</h4>
        <p> {state.overview}</p>
        <h4 className={title}>Genres</h4>
                    {/* <p>{state.genres.reduce((item, acc) => {
                        acc += item.name;
     return acc
 },'')}</p> */}
        </div>
            </div>
            <p>Additional information</p>
            <ul>
                <li key="cast"><Link onClick={onCastClick}>Cast</Link></li>
                <li key="reviews"><Link onClick={onReviewsClick}>Reviews</Link></li>
            </ul>
            {review.length && (
                <ul>
                    {review.map(item => (
                    <li>
                        <h5>{item.author}</h5>
                        <p>{item.content}</p>
                        <p>{item.data }</p>
                    </li> ))}
                </ul>
            )}
        </>
    );
}

export default MovieDetailes;