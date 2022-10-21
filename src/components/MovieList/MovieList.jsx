import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import PropTypes from 'prop-types';
import * as SC from './MovieList.styled';
import noResults from 'components/images/clipart2883707.png';

export const MovieList = ({ movies }) => {
    const [baseUrl] = useState('https://image.tmdb.org/t/p/w500');
    const location = useLocation();
    
    return (
        <SC.Box>
            {movies.map(({ id, title, name, poster_path}) =>
                <SC.MovieItem key = {id}>
            <SC.StyledLink to={`/movies/${id}`} state={{from:location}}>
                <SC.Poster 
                src={
                    poster_path ? baseUrl + poster_path : noResults
                    } 
                    alt={title || name}/>
                <SC.MiddleTitle>{title || name}</SC.MiddleTitle>
            </SC.StyledLink>
        </SC.MovieItem>)
}
                
        </SC.Box>
    )
};

MovieList.propTypes = {
    movies: PropTypes.array.isRequired,
}