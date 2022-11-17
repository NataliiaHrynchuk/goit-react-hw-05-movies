import * as API from '../../services/api';
import * as SC from './Reviews.styled';
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);
    const [isLoadingReviews, setIsLoadingReviews] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                setIsLoadingReviews(true);
                const reviews = await API.getReviews(movieId);
                setReviews(reviews.map(({id, author, content}) => ({
                        id,
                        author, 
                        content,
                    })))
            } catch {
                setError(`Reviews don't exist`);
            } finally {
                setIsLoadingReviews(false);
            }
        }
        fetchReviews();
    }, [movieId]);

    return (
        <div>
            {error && <p>{error}</p>}
            {isLoadingReviews && <p>Loading...</p>}
            {!isLoadingReviews && reviews.length > 0 ? (
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
