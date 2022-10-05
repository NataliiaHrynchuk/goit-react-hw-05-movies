import React, { useState, useEffect } from 'react';
import { MovieList } from 'components/MovieList';
import * as API from 'services/api';


export default function Home() {
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        API
            .getTradingMovies()
            .then((data) => {
                const receivedMovies = data.results.map(
                    ({ id,
                        title,
                        name,
                    }) => {
                        return {
                            id,
                            title,
                            name,
                        };
                    }
                );
                console.log(data.results.map(result => result));
                
                setMovies(prevMovies => [...prevMovies, ...receivedMovies]);
            })
            
    }, []);

    return (
        <main>
            <h1>Trending today</h1>
            {movies &&
                <MovieList movies={movies}/>
            }

        </main>
    )
};