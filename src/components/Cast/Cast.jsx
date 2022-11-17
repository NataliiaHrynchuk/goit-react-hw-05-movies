import * as API from '../../services/api';
import * as SC from './Cast.styled';
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import defaultPhoto from 'components/images/free-sticker-think-7598091.png'

const IMG_URL = 'https://image.tmdb.org/t/p/w200';

const Cast = () => { 
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);
    const [isLoadingCast, setIsLoadingCast] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCast = async () => {
            try {
                setIsLoadingCast(true);
                const cast = await API.getCast(movieId);
                setCast(cast.map(({ id, name, character, profile_path: photo }) => ({
                    id,
                    name,
                    character,
                    photo: photo ? IMG_URL + photo : defaultPhoto,
                })))
            } catch {
                setError(`A cast does not exist`);
            } finally {
                setIsLoadingCast(false);
            }
        };
        fetchCast();                
    }, [movieId]);

    return (
        <div>
            {error && <p>{error}</p>}
            {isLoadingCast && <p>Loading...</p>}
            {!isLoadingCast && cast.length > 0 && (
                <SC.CastList>
                {cast.map(({id, name, character, photo }) => {
                    return (
                        <SC.CastItem key={id}>
                            <img src={photo} alt="actor" />
                            <SC.Wrap>
                                <SC.Name>{name}</SC.Name>
                            {character &&
                                <SC.Character>Character: {character}</SC.Character>
                            }
                            </SC.Wrap>
                        
                    </SC.CastItem>
                    )
                })}
            </SC.CastList>
            )}
        </div>
    )
};

export default Cast;