import SearchForm from '../components/SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import { MovieList } from 'components/MovieList';
import * as API from '../services/api';

const Movies = () => {
    const [movieName, setMovieName] = useState('');
    const [movies, setMovies] = useState([]);
    
    const handleFormSubmit = query => { 
        setMovieName(query);
        setMovies([]);
        
    };

    useEffect(() => {
        if (!movieName) {
            return;
        }
        API
            .getMoviesByName(movieName)
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
                console.log(receivedMovies);
                setMovies(prevMovies => [...prevMovies, ...receivedMovies]);
            })
    }, [movieName]);
    return (
        <main>
            <SearchForm onSubmit={handleFormSubmit} />
            {movies &&
                <MovieList movies={movies}/>       
            }
        </main>
    )
};

export default Movies;
