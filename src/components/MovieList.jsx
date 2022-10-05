import { StyledLink } from '../pages/Home.styled';

export const MovieList = ({ movies }) => {
    return (
        <ul>
            {movies.map((movie) =>
                <li key = {movie.id}>
            <StyledLink to={`${movie.id}`}>
                {movie.title || movie.name}
            </StyledLink>
        </li>)
}
                
        </ul>
    )
}