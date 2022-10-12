import { useLocation } from 'react-router-dom';
import * as SC from './MovieList.styled';

export const MovieList = ({ movies }) => {
    const location = useLocation();
    return (
        <SC.Box>
            {movies.map(({ id, title, name, poster}) =>
                <SC.MovieItem key = {id}>
            <SC.StyledLink to={`/movies/${id}`} state={{from:location}}>
                <SC.Poster src={poster} alt={title || name}/>
                <h3>{title || name}</h3>
            </SC.StyledLink>
        </SC.MovieItem>)
}
                
        </SC.Box>
    )
}