import { StyledLink } from '../pages/Home.styled';
import { useLocation } from 'react-router-dom';

export const MovieList = ({ movies }) => {
    const location = useLocation();
    return (
        <ul>
            {movies.map((movie) =>
                <li key = {movie.id}>
            <StyledLink to={`/movies/${movie.id}`} state={{from:location}}>
                {movie.title || movie.name}
            </StyledLink>
        </li>)
}
                
        </ul>
    )
}