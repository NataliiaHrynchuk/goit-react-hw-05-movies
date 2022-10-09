import * as API from '../../services/api';
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        API
            .getReviews(movieId)
            .then(setReviews); 
    }, [movieId]);

    return (
        <div>
            {reviews.length > 0 ? (
                <ul>
                {reviews.map(({id, author, content}) => (
                    <li key={id}>
                        <h3>{author}</h3>
                        <p>{content}</p>
                    </li>
                ))}
                </ul>
            ) : (
                <p>We don`t have any reviews for this movie</p>
            )}
        </div>
    )
};

export default Reviews;
