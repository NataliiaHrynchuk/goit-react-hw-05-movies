import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
    api_key: '6860d409037e6854532ae07af7af1d83',
    include_adult: false,
};

export const getTradingMovies = async() => {
    const response = await axios.get(`/trending/all/day?`);
    return response.data.results;
};

export const getMoviesByName = async query => {
        const response = await axios.get(`/search/movie?query=${query}`);
        return response.data.results;
};

export const getMovieById = async movieId => {
    const response = await axios.get(`/movie/${movieId}?`);
    return response.data;
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




