import * as API from '../../services/api';
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import defaultPhoto from 'components/images/free-sticker-think-7598091.png'

const IMG_URL = 'https://image.tmdb.org/t/p/w200';

const Cast = () => { 
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => {
        API
            .getCast(movieId)
            .then(cast => 
                setCast(cast.map(({ id, name, character, profile_path: photo}) => ({
                    id,
                    name, 
                    character,
                    photo: photo ? IMG_URL + photo : defaultPhoto,
                }))
            ))
                
    }, [movieId]);

    return (
        <div>
            {cast.length > 0 && (
                <ul>
                {cast.map(({id, name, character, photo }) => {
                    return (
                        <li key={id}>
                        <img src={photo} alt="actor"></img>
                        <p>{name}</p>
                        {character && <p>Character: {character }</p>}
                    </li>
                    )
                })}
            </ul>
            )}
        </div>
    )
};

export default Cast;