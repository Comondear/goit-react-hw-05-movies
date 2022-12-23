import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as moviesApi from '../components/api';
import { Title } from '../components/Styles';

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    moviesApi.getTrending().then(response => setMovies(response.results));
  }, []);

  return (
    <>
      <ul>
        {movies.map(({ id, title }) => (
          <Link to={`/movies/${id}`}>
            <Title>{title}</Title>
          </Link>
        ))}
      </ul>
    </>
  );
}
