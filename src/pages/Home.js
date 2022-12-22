import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as moviesApi from '../components/api';

export default function Home() {
  const location = useLocation();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    moviesApi.getTrending().then(response => setMovies(response.results));
  }, []);

  return (
    <>
      <ul>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={location}>
              <li>
                <p>{title}</p>
              </li>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
