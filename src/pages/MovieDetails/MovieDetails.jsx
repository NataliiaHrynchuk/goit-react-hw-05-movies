import { useParams, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';
import { BackLink } from '../../components/BackLink/BackLink';
import { Suspense } from 'react';
import * as API from '../../services/api';
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
                <SC.Box>
                <BackLink to={backLinkHref}>Go back</BackLink>
                    <SC.Container>
                        {poster ? (
                        <SC.Poster src={poster}
                            alt='movie cover' />
                        ) : (
                            <SC.Poster src = {dafaultURL}
                            alt='movie cover' width="200px" />    
                        )}
                    
                        <SC.Wrap>
                            <SC.BigTitle>{title || name}({releaseYear})</SC.BigTitle>
                            <SC.Text>User Score: {userScore}%</SC.Text>
                            <SC.MiddleTitle>Overview</SC.MiddleTitle>
                            <SC.Text>{overview}</SC.Text>
                            <SC.SmallTitle>Genres</SC.SmallTitle>
                            <SC.Text>{genres.map(genre => genre.name).join(', ')}</SC.Text>
                        </SC.Wrap>
                    </SC.Container>
                    <SC.Wrap>
                        <SC.Text>Additional information</SC.Text>
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
                </SC.Box>
        }
    </div>
    )
};
