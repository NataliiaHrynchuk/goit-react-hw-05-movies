import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MovieList } from 'components/MovieList/MovieList';
import * as API from 'services/api';
import * as SC from './Home.styled';

const Home = () => {
    const [movies, setMovies] = useState([]);
    const location = useLocation();
    
    useEffect(() => {
        API
            .getTradingMovies()
            .then(setMovies)
    }, []);

    // console.log(location);

    return (
        <main>
            <SC.Title>Trending today</SC.Title>
            {movies &&
                <MovieList movies={movies} location={location}/>
            }
        </main>
    )
};

export default Home;