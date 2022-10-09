import axios from 'axios';
const API_KEY = '6860d409037e6854532ae07af7af1d83';
const BASE_URL = 'https://api.themoviedb.org/3';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
    api_key: '2123fea73978ac77fe6a3f347cf7ced6',
    include_adult: false,
};
const IMG_URL = 'https://image.tmdb.org/t/p/w200';
const defaultImg = 'http://placehold.it/100x200'

export async function getTradingMovies() {
    try {
        const response = await axios.get(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`);
        return response.data;
    } catch(error) {
    new Error('There is no movie');
}
};

export async function getMoviesByName(query) {
    const searchParams = new URLSearchParams({
        api_key: API_KEY,
        language: 'en-US',
        page: 1,
        include_adult: false,
        query,
    });
    try {
        const response = await axios.get(`${BASE_URL}/search/movie?${searchParams}`);
        return response.data;
    } catch (error) {
        new Error(`There is no movie with name ${query}`);
    }
};

export async function getMovieById(movieId) {
    return axios
    .get(`/movie/${movieId}?`)
    .then(
        ({
            data:{
                id, 
                poster_path: poster,
                title,
                name,
                release_date: releaseYear,
                vote_average: userScore,
                overview,
                genres,
            },
        }) => ({
            id,
            poster: IMG_URL + poster,
            title,
            name,
            releaseYear: new Date(releaseYear).getFullYear(),
            userScore: Math.round(userScore * 10),
            overview,
            genres,
        })
    )
    .catch (error => {
        console.log(error.message);
    });
};

export const getCast = movieId => {
    return axios
        .get(`/movie/${movieId}/credits?`)
        .then(({data: {cast}}) =>
        cast.map(({ id, name, character, profile_path: photo}) => ({
            id,
            name, 
            character,
            photo: photo ? IMG_URL + photo : defaultImg,
        }))
        )
        .catch (error => {
            console.log(error.message);
        })
};

export const getReviews = movieId => {
    return axios
    .get(`/movie/${movieId}/reviews?`)
    .then (({data: {results}}) => 
    results.map(({id, author, content}) => ({
        id,
        author, 
        content,
    }))
    )   
    .catch (error => {
        console.log(error.message);
    });
};



