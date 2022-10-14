import SearchForm from '../../components/SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import { MovieList } from 'components/MovieList/MovieList';
import { useSearchParams } from 'react-router-dom';
import { NoResults } from 'components/NoResults/NoResults';
import noResults from 'components/images/clipart2883707.png';
import * as SC from './Movies.styled';
import * as API from '../../services/api';

const IMG_URL = 'https://image.tmdb.org/t/p/w200';

const Movies = () => {
    const [movies, setMovies] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') ?? "";
    
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
        <SC.Section>
            <SearchForm onSubmit={handleFormSubmit} />
            {movies &&  ((movies.length > 0) ? (
                <MovieList movies={movies}/>
            ) : (
                <NoResults children={noResults}/>
            ))
            }
        </SC.Section>
    )
};

export default Movies;
