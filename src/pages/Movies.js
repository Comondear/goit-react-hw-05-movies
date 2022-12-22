import SearchForm from '../components/SearchForm';
// import { MovieDetails } from './MovieDetails';
// import { MoviesList } from './MoviesList';
// import { Container } from './App.styled';

import { useState, useEffect } from 'react';
import {
  NavLink,
  useLocation,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import { toast } from 'react-toastify';
import * as movieApi from '../components/api';
import NotFound from './NotFound';

export default function SearchMovie() {
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get('query') || '');
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!search) return;

    movieApi.getMoviesSearch(search).then(response => {
      if (response.results.length === 0) {
        return toast.info(
          'Sorry, there are no more movies matching your search query!!!'
        );
      }
      setMovies(response.results);
    });
  }, [search]);

  const formSubmit = search => {
    navigate(`/movies/?query=${search}`);
    setSearch(search);
    setMovies([]);
  };

  return (
    <>
      <header text="SEARCH MOVIES" />
      <SearchForm searchProps={formSubmit} search={search} />
      {movies && movies.length > 0 ? (
        <ul>
          {movies.map(({ id, title }) => (
            <li key={id}>
              <NavLink to={`/movies/${id}`} state={location}>
                <li>
                  <p>{title}</p>
                </li>
              </NavLink>
            </li>
          ))}
        </ul>
      ) : (
        <NotFound />
      )}
    </>
  );
}
