

const myKey = '3b46d5b5a5aeae0315bdd7ebb8ac2849';
const baseUrl = 'https://api.themoviedb.org/3/';


const fetchMovieList = () => {
    return fetch(`${baseUrl}movie/top_rated?api_key=${myKey}&language=en-US&page=1`)
        .then(result => result.json())
};


const fetchMovieId = (movieId) => {
    return fetch(`${baseUrl}movie/${movieId}?api_key=${myKey}&language=en-US
`)
        .then(result => result.json())
};


const fetchMovieQuery = (query) => {
    return fetch(`
https://api.themoviedb.org/3/search/movie?api_key=3b46d5b5a5aeae0315bdd7ebb8ac2849&language=en-US&query=${query}&page=1&include_adult=false`)
        .then(result => result.json())
};

const fetchReview = (movieId) => {
    return fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=3b46d5b5a5aeae0315bdd7ebb8ac2849&language=en-US&page=1`)
        .then(result => result.json());
};

const fetchCast = (movieId) => {
    return fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=3b46d5b5a5aeae0315bdd7ebb8ac2849&language=en-US
`).then(result => result.json());
};


export default {fetchMovieList, fetchMovieId, fetchMovieQuery, fetchReview, fetchCast }

