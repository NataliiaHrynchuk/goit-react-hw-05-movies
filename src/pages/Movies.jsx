import SearchForm from '../components/SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import { MovieList } from 'components/MovieList';
import { useSearchParams } from 'react-router-dom';
import * as API from '../services/api';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') ?? "";
    console.log(query);
    
    const handleFormSubmit = name => { 
        setSearchParams(name !== "" ? { query: name } : {});        
    };

    useEffect(() => {
        if (!query) {
            return;
        }
        API
            .getMoviesByName(query)
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
                setMovies([...receivedMovies]);
            })
    }, [query]);
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
