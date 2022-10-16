import * as API from '../../services/api';
import * as SC from './Reviews.styled';
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        API
            .getReviews(movieId)
            .then(results => 
                setReviews(results.map(({id, author, content}) => ({
                        id,
                        author, 
                        content,
                    })))); 
    }, [movieId]);

    return (
        <div>
            {reviews.length > 0 ? (
                <SC.ReviewsList>
                {reviews.map(({id, author, content}) => (
                    <li key={id}>
                        <h3>{author}</h3>
                        <p>{content}</p>
                    </li>
                ))}
                </SC.ReviewsList>
            ) : (
                <p>We don`t have any reviews for this movie</p>
            )}
        </div>
    )
};

export default Reviews;
