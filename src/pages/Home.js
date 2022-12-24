import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import * as moviesApi from '../components/api';
import { Title } from '../components/Styles';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    moviesApi.getTrending().then(response => setMovies(response.results));
  }, []);

  return (
    <>
      <ul>
        {movies.map(({ id, title }) => (
          <Link key={id} to={`/movies/${id}`} state={location}>
            <Title>{title}</Title>
          </Link>
        ))}
      </ul>
    </>
  );
}
