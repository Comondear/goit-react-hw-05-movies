import SearchForm from '../components/SearchForm';
// import { MovieDetails } from './MovieDetails';
// import { MoviesList } from './MoviesList';
// import { Container } from './App.styled';

import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as movieApi from '../components/api';
import Loader from '../components/Loader';
import { Link } from 'react-router-dom';
import { Title } from '../components/Styles';

export default function SearchMovie() {
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get('query') || '');
  const [movies, setMovies] = useState([]);
  // const location = useLocation();
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (!search) return;
    setLoading(true);
    movieApi.getMoviesSearch(search).then(response => {
      if (response.results.length === 0) {
        return toast.info(
          'Sorry, there are no more movies matching your search query!!!'
        );
      }
      setMovies(response.results);
      setLoading(false);
    });
  }, [search]);

  const formSubmit = search => {
    navigate(`/movies/?query=${search}`);
    setSearch(search);
    setMovies([]);
  };

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <header text="SEARCH MOVIES" />
      <SearchForm
        searchProps={formSubmit}
        search={search}
        isLoading={isLoading}
      />
      {movies && movies.length > 0 ? (
        <ul>
          {movies.map(({ id, title }) => (
            <Link to={`/movies/${id}`}>
              <Title>{title}</Title>
            </Link>
          ))}
        </ul>
      ) : (
        <p></p>
      )}
    </>
  );
}
