import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as moviesApi from '../components/api';
import { Container } from 'components/Styles';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    moviesApi
      .getReviews(movieId)
      .then(response => setReviews(response.results));
  }, [movieId]);

  return (
    <>
      {reviews.length > 0 ? (
        <Container>
          {reviews.map(({ id, author, content }) => (
            <div key={id}>
              <h3>
                Autor : <span>{author}</span>
              </h3>
              <p>{content}</p>
            </div>
          ))}
        </Container>
      ) : (
        <h3>
          <p text="We don’t have any reviews for this movie" />
        </h3>
      )}
    </>
  );
}
