import { useParams, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';
import { BackLink } from '../components/BackLink/BackLink';
import { Suspense } from 'react';
import * as API from '../services/api';
import * as SC from './MovieDetails.styled';

const Status = {
    IDLE: 'idle',
    RESOLVED: 'resolved',
    REJECTED: 'rejected',
}
export default function MovieDetails() { 
    const { movieId } = useParams();
    const [movie, setMovie] = useState('');
    const [status, setStatus] = useState('idle');
    const [error, setError] = useState(null);
    const location = useLocation();
    const backLinkHref = location?.state?.from ?? "/movies";
    

    useEffect(() => {
        if (!movieId) {
            return;
        }
        API
            .getMovieById(movieId)
            .then((data) => {
                console.log(data);
                setMovie(data);
                setStatus(Status.RESOLVED);
            })
            .catch(error => {
                setError(error);
                setStatus(Status.REJECTED);
        })
    }, [movieId]);
    
    return (
        <div>
            {status === Status.REJECTED && <p>{error.message}</p>}
        {movie &&
                <>
                <BackLink to={backLinkHref }>Go back</BackLink>
                    <SC.Box>
                        {movie.poster_path ? (
                        <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                            alt='movie cover' />
                        ) : (
                            <img src = 'https://i.ibb.co/BrYLsTv/default-movie-poster-min.jpg'
                            alt='movie cover' width="200px" />    
                        )}
                    
                        <div>
                            <h2>{movie.title || movie.name}</h2>
                            <p>User Score: {Math.round(movie.vote_average * 10)}%</p>
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
                                <SC.Link to="cast" state={{from: location}}>Cast</SC.Link>
                            </li>
                            <li>
                                <SC.Link to="reviews" state={{from: location}}>Reviews</SC.Link>
                            </li>
                        </ul>
                        <Suspense fallback={<div>Loading...</div>}>
                            <Outlet/>
                        </Suspense>
                    </SC.Wrap>
                </>
        }
    </div>
    )
};
