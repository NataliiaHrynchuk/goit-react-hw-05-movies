import { useParams, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';
import { BackLink } from '../components/BackLink/BackLink';
import { Suspense } from 'react';
import * as API from '../services/api';
import * as SC from './MovieDetails.styled';


const dafaultURL = 'https://i.ibb.co/BrYLsTv/default-movie-poster-min.jpg';

export default function MovieDetails() { 
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const location = useLocation();
    const backLinkHref = location?.state?.from ?? "/movies";

    const { poster, title, name, releaseYear, userScore, overview, genres } =
    movie ?? {};
    

    useEffect(() => {
        if (!movieId) {
            return;
        }
        API
            .getMovieById(movieId)
            .then(setMovie)
    }, [movieId]);
    
    return (
        <div>
            
        {movie &&
                <>
                <BackLink to={backLinkHref}>Go back</BackLink>
                    <SC.Box>
                        {poster ? (
                        <img src={poster}
                            alt='movie cover' />
                        ) : (
                            <img src = {dafaultURL}
                            alt='movie cover' width="200px" />    
                        )}
                    
                        <div>
                            <h2>{title || name}({releaseYear})</h2>
                            <p>User Score: {userScore}%</p>
                            <h3>Overview</h3>
                            <p>{overview}</p>
                            <h4>Genres</h4>
                            <p>{genres.map(genre => genre.name).join(', ')}</p>
                        </div>
                    </SC.Box>
                    <SC.Wrap>
                        <p>Additional information</p>
                        <SC.DetailsList>
                            <li>
                                <SC.Link to="cast" state={{from: location}}>Cast</SC.Link>
                            </li>
                            <li>
                                <SC.Link to="reviews" state={{from: location}}>Reviews</SC.Link>
                            </li>
                        </SC.DetailsList>
                        <Suspense fallback={<div>Loading...</div>}>
                            <Outlet/>
                        </Suspense>
                    </SC.Wrap>
                </>
        }
    </div>
    )
};
