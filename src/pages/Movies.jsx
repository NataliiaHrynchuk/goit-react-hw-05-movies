import SearchForm from '../components/SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import { MovieList } from 'components/MovieList/MovieList';
import { useSearchParams } from 'react-router-dom';
import * as API from '../services/api';

const IMG_URL = 'https://image.tmdb.org/t/p/w200';

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
                        };}
                    
                )));
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
