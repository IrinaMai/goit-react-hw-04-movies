import React, { useState, useEffect } from 'react';
import { useRouteMatch, useHistory, useLocation, Link, Route, Switch } from 'react-router-dom';
import api from '../../api/api';
import Cast from '../../components/Cast';
import Review from '../../components/Review';
import {detailedDiv, btn, image, description, title, imgActor, wrapActor, wrapper, actorName} from './MovieDetailes.module.css'


const MovieDetailes = () => {
    const [state, setState] = useState({});
    const [review, reviewState] = useState([]);
    const [cast, castState] = useState([])
    const match = useRouteMatch();
    const history = useHistory();
    const location = useLocation();
    const [locationParam, setLocationParam] = useState({});
   


    useEffect(() => {
        setLocationParam({...location.state})
        api.fetchMovieId(match.params.movieId).then(result => (setState({ ...result })))
      }, []);

    const onGoBackClick = () => {
        if (locationParam.query) {
            history.push({ pathname: locationParam.from, search: `?query=${locationParam.query}`, state:{query: locationParam.query} })
        } else history.push("/");
    }

    const onCastClick = () => {
        if (cast.length === 0) {
            api.fetchCast(match.params.movieId).then(result => castState([...result.cast]));
        } else (castState([]))
    };

    const onReviewsClick = () => {
        if (review.length === 0) {
            api.fetchReview(match.params.movieId).then(result => reviewState([...result.results]));
        }else (reviewState([]))
    };


    return (
        <>
            <button type="button" onClick={onGoBackClick} className={btn}> GO BACK </button>
            
            <div className={detailedDiv}>
                {state.poster_path && <img src={`https://image.tmdb.org/t/p/w500/${state.poster_path}`} alt={state.title} className={image }/>}
            
        <div className={description}>
            <h2 className={title}>{state.title}</h2>
            <p><span className={title}>User score: </span> {state.popularity}</p>
            <h4 className={title}>Overview</h4>
            <p> {state.overview}</p>
            <h4 className={title}>Genres</h4>
            <p>{state.genres && state.genres.map(item => item.name).join(', ')}</p>
        </div>
        </div>
            <p>Additional information</p>
            <ul>
                <li key="cast" onClick={onCastClick}>
                    <Link to={`${match.url}/cast`}> Cast </Link></li>
                <li key="reviews" onClick={onReviewsClick}>
                    <Link to={`${match.url}/review`}> Reviews </Link></li>
            </ul>
            {/* <div className={wrapper}>

                </div> */}
            
                 <Switch>
                <Route path={`${match.url}/cast`} render={() => <Cast cast={cast}/> }/> 
                <Route path={`${match.url}/review`} render={() => <Review review={review}/>}/>
            </Switch>
        </>
    );
}

export default MovieDetailes;