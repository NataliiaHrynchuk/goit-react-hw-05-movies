import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MovieList } from 'components/MovieList/MovieList';
import { NoResults } from 'components/NoResults/NoResults';
import noResults from 'components/images/clipart2883707.png';
import * as API from 'services/api';
import * as SC from './Home.styled';

const Home = () => {
    const [isLoadingMovies, setIsLoadingMovies] = useState(false);
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const location = useLocation();
    
    useEffect(() => {
        const fetchTradingMovies = async () => {
            try {
                setIsLoadingMovies(true);
                const movies = await API.getTradingMovies();
                setMovies(movies);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoadingMovies(false);
            }
        };
        fetchTradingMovies();
    }, []);

    return (
        <main>
            <SC.Title>Trending today</SC.Title>
            {error && (
                <>
                    <NoResults imageUrl={noResults} location={location} />
                    <p>{error}</p>
                </>
            )
                }
            {isLoadingMovies && <p>Loading...</p>}
            {movies && !isLoadingMovies &&
                <MovieList movies={movies} location={location}/>
            }
        </main>
    )
};

export default Home;