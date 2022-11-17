  import SearchForm from '../../components/SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MovieList } from 'components/MovieList/MovieList';
import { useSearchParams } from 'react-router-dom';
import { NoResults } from 'components/NoResults/NoResults';
import noResults from 'components/images/clipart2883707.png';
import * as SC from './Movies.styled';
import * as API from 'services/api';

const Movies = () => {
    const [isLoadingMovies, setIsLoadingMovies] = useState(false);
    const [movies, setMovies] = useState(null);
    const [error, setError] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') ?? "";
    const location = useLocation();
    
    const handleFormSubmit = name => { 
        setSearchParams(name !== "" ? { query: name } : {});        
    };

    useEffect(() => {
        if (!query) {
            return;
        } const fetchMovieByQuery = async () => {
            try {
                setIsLoadingMovies(true);
                const movies = await API.getMoviesByName(query);
                setMovies(movies);
            } catch {
                setError(`No movies found with name ${query}`);
            } finally {
                setIsLoadingMovies(false);
            }
        };
        fetchMovieByQuery();
    }, [query]);

    return (
        <SC.Section>
            <SearchForm onSubmit={handleFormSubmit} />
            {error && (
                <>
                    <NoResults imageUrl={noResults} location={location} />
                    <p>{error}</p>
                </>
            )}
            {isLoadingMovies && <p>Loading...</p>}
            {movies && !isLoadingMovies && ((movies.length > 0) ? (
                <MovieList movies={movies} location={location}/>            
            ) : (
                <>
                    <NoResults imageUrl={noResults} location={location} />
                    <p>{`No movies found with name ${query}`}</p>
                </>    
            ))
            }
        </SC.Section>
    )
};

export default Movies;
