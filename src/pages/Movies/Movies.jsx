import SearchForm from '../../components/SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import { MovieList } from 'components/MovieList/MovieList';
import { useSearchParams } from 'react-router-dom';
import { NoResults } from 'components/NoResults/NoResults';
import noResults from 'components/images/clipart2883707.png';
import * as SC from './Movies.styled';
import * as API from '../../services/api';

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
            .then(setMovies)
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
