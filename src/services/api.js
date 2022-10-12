import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
    api_key: '6860d409037e6854532ae07af7af1d83',
    include_adult: false,
};

const IMG_URL = 'https://image.tmdb.org/t/p/w200';

export const getTradingMovies = () => {
    return axios.get(`/trending/all/day?`)
    .then(({data: {results}}) => 
    results)
    . catch (error => {
       console.log(error.message);
    });
};

export const getMoviesByName = query => {
    return axios
    .get(`/search/movie?query=${query}`)
    .then(({data: {results}}) => 
    results)
    . catch (error => {
       console.log(error.message);
    });
};

export const getMovieById = movieId => {
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
        cast
        )
        .catch (error => {
            console.log(error.message);
        })
};

export const getReviews = movieId => {
    return axios
    .get(`/movie/${movieId}/reviews?`)
    .then (({data: {results}}) => 
    results
    )   
    .catch (error => {
        console.log(error.message);
    });
};




