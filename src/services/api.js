import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
    api_key: '6860d409037e6854532ae07af7af1d83',
    include_adult: false,
};

export const getTradingMovies = () => {
    try {
        return axios
        .get(`/trending/all/day?`)
        .then(({data: {results}}) => 
        results)
    } catch (error) {
        console.log('error', {error});
        return null;
    };
};

export async function getMoviesByName (query) {
    try{
        return await axios
        .get(`/search/movie?query=${query}`)
        .then(({data: {results}}) => 
        results)
    } catch (error) {
        console.log('error', {error});
        return null;
    };
};

export const getMovieById = movieId => {
    try {
        return axios
        .get(`/movie/${movieId}?`)
        .then(({data}) => data)
    } catch (error) {
        console.log('error', {error});
        return null;
    };
};


export const getCast = movieId => {
    try {
        return axios
        .get(`/movie/${movieId}/credits?`)
        .then(({data: {cast}}) => cast)
    } catch (error) {
            console.log('error', {error});
        }
};



export const getReviews = movieId => {
    try {
        return axios
        .get(`/movie/${movieId}/reviews?`)
        .then (({data: {results}}) => results)
    } catch (error) {
        console.log('error', {error});
    };
};




