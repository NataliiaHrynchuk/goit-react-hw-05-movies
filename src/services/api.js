import axios from 'axios';
const API_KEY = '6860d409037e6854532ae07af7af1d83';
const BASE_URL = 'https://api.themoviedb.org/3';

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
    try {
        const response = await axios.get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`);
        return response.data;
    } catch (error) {
        new Error(`There is no movie`);
    }
}

