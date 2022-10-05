import { useParams, Outlet } from "react-router-dom";
import { useEffect, useState } from 'react';
import * as API from '../services/api';
import * as SC from './MovieDetails.styled';
import {Link} from '../components/App.styled';

export const MovieDetails = () => { 
    const { movieId } = useParams();
    const [movie, setMovie] = useState('');
    

    useEffect(() => {
        if (!movieId) {
            return;
        }
        API
            .getMovieById(movieId)
            .then((data) => {
                console.log(data);
                setMovie(data);
            })
    }, [movieId]);
    
    return (
        <>
        {movie &&
            <>
                <SC.Box>
                    {movie.poster_path ? (
                        <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt='movie cover'/>
                    ) : (
                        <img src = 'https://i.ibb.co/BrYLsTv/default-movie-poster-min.jpg'
                            alt='movie cover' width="200px" />    
                    )}
                    
                    <div>
                        <h2>{movie.title}</h2>
                        <p>User Score: {movie.vote_average * 10}%</p>
                        <h3>Overview</h3>
                        <p>{movie.overview}</p>
                        <h4>Genres</h4>
                        <p>{movie.genres.map(genre => genre.name).join(', ')}</p>
                    </div>
                </SC.Box>
                <SC.Wrap>
                    <p>Additional information</p>
                    <ul>
                        <li>
                            <Link to="cast">Cast</Link>
                        </li>
                        <li>
                            <Link to="reviews">Reviews</Link>
                        </li>
                    </ul>
                    <Outlet/>
                </SC.Wrap>
                    
                </>
            }
        </>
        
        
    )
};
