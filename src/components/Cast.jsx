import * as API from '../services/api';
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

const Cast = () => { 
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => {
        if (!movieId) {
            return;
        }
        API
            .getCast(movieId)
            .then(({ cast }) => {
                setCast([...cast]);
                console.log(cast);
        })
    }, [movieId])
    return (
        <div>
            <ul>
                {cast.map(({ character, name, profile_path, id }) => 
                    profile_path &&
                    <li key={id}>
                        <img src={`https://image.tmdb.org/t/p/w200${profile_path}`} alt="actor"></img>
                        <p>{name}</p>
                        {character && <p>Character: {character }</p>}
                    </li>
                )}
                
            </ul>
        </div>
    )
};

export default Cast;