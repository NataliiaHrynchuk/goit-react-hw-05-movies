import * as API from '../../services/api';
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

const Cast = () => { 
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => {
        API
            .getCast(movieId)
            .then(setCast)
    }, [movieId]);

    return (
        <div>
            {cast.length > 0 && (
                <ul>
                {cast.map(({ character, name, photo, id }) => {
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