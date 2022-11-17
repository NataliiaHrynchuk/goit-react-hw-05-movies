import { useParams, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';
import { BackLink } from 'components/BackLink/BackLink';
import { MovieSkeleton } from "components/MovieSkeleton";
import { Suspense } from 'react';
import { NoResults } from 'components/NoResults/NoResults';
import noResults from 'components/images/clipart2883707.png';
import * as API from 'services/api';
import * as SC from './MovieDetails.styled';


const dafaultURL = 'https://i.ibb.co/BrYLsTv/default-movie-poster-min.jpg';
const IMG_URL = 'https://image.tmdb.org/t/p/w200';

export default function MovieDetails() { 
    const { movieId } = useParams();
    const [isLoadingMovie, setIsLoadingMovie] = useState(false);
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);
    const location = useLocation();
    const backLinkHref = location?.state?.from ?? "/home";

    const { 
        poster_path: poster, 
        title, 
        name, 
        release_date: releaseYear, 
        vote_average: userScore,
        overview, 
        genres 
    } = movie ?? {};
    
    useEffect(() => {
        if (!movieId) {
            return;
        } const fetchMovieById = async () => {
            try {
                setIsLoadingMovie(true);
                const movie = await API.getMovieById(movieId);
                setMovie(movie);
            } catch {
                setError(`Such a movie does not exist`);
            } finally {
                setIsLoadingMovie(false);
            }
        };
        fetchMovieById();        
    }, [movieId]);
    
    return (
        <div>
                <SC.Box>
                <BackLink to={backLinkHref}>Go back</BackLink>
                {error &&(
                    <>
                        <NoResults imageUrl={noResults} />
                        <p>{error}</p>
                    </>)
                }
                {isLoadingMovie && <MovieSkeleton/>}
                {movie && !isLoadingMovie && (
                    <>
                    <SC.Container>
                        {poster ? (
                        <SC.Poster src={IMG_URL + poster}
                            alt='movie cover' />
                        ) : (
                            <SC.Poster src = {dafaultURL}
                            alt='movie cover' width="200px" />    
                        )}
                    
                        <SC.Wrap>
                            <SC.BigTitle>{title || name}({new Date(releaseYear).getFullYear()})</SC.BigTitle>
                            <SC.Text>User Score: {Math.round(userScore * 10)}%</SC.Text>
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
                                <SC.Link to="cast" state={{from: location.state.from}}>Cast</SC.Link>
                            </li>
                            <li>
                                <SC.Link to="reviews" state={{from: location.state.from}}>Reviews</SC.Link>
                            </li>
                        </SC.DetailsList>
                        <Suspense fallback={<div>Loading...</div>}>
                            <Outlet/>
                        </Suspense>
                    </SC.Wrap>
                    </>
                )
                }
                
                </SC.Box>
    </div>
    )
};
