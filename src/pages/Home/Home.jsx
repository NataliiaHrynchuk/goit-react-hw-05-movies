import React, { useState, useEffect } from 'react';
import { MovieList } from 'components/MovieList/MovieList';
import * as API from 'services/api';
import * as SC from './Home.styled';
const IMG_URL = 'https://image.tmdb.org/t/p/w200';


const Home = () => {
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        API
            .getTradingMovies()
            .then((results) => setMovies(results.map(
                    ({ id,
                        title,
                        name,
                        poster_path: poster,
                    }) => {
                        return {
                            id,
                            title,
                            name,
                            poster: IMG_URL + poster,
                        }}
                )));
    }, []);

    return (
        <main>
            <SC.Title>Trending today</SC.Title>
            {movies &&
                <MovieList movies={movies}/>
            }
        </main>
    )
};

export default Home;