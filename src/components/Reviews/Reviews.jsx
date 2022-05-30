import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchMovieRewiews } from '../../services/movies-api';
import { Review } from './Review/Review';

export function Reviews() {
  const [reviews, setReviews] = useState(null);
  const param = useParams();

  useEffect(() => {
    fetchMovieRewiews(param.movieId).then(resp => setReviews(resp))
  }, [param.movieId]);

  return (
     reviews && (
      <div>
        {reviews.length === 0 ? (<div>We don't have any reviews for this movie.</div>) : (
          <ul>
            {reviews.map(review => (
              <li key={review.id} >
                <Review reviews={review} />
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  )
}