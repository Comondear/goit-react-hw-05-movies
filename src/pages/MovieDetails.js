import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation, Outlet } from 'react-router-dom';
import Loader from '../components/Loader';

import * as movieApi from '../components/api';
import {
  MovieCard,
  MovieInfo,
  MovieLink,
  MovieH2,
  MovieH3,
  GoBackBTN,
  MoviePage,
} from '../components/Styles';
// import NotFound from '../pages/NotFound';

export default function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    movieApi.getMovieId(movieId).then(response => setMovie(response));
  }, [movieId]);

  const movieScore = score => {
    return Math.floor(score * 10) + '%';
  };

  const movieGanres = genres => {
    if (genres === null) return;
    return genres.map(genre => genre.name).join(', ');
  };

  const onBtnClick = () => {
    location.state
      ? navigate(location.state.pathname + location.state.search)
      : navigate('/');
  };

  const viewPoster = poster_path => {
    if (poster_path === null) {
      return 'https://wipfilms.net/wp-content/data/posters/tt0338683.jpg';
    }
    return `https://image.tmdb.org/t/p/w300${poster_path}`;
  };

  return isLoading ? (
    <Loader />
  ) : (
    <>
      {!movie ? (
        <p></p>
      ) : (
        <>
          <MoviePage>
            <GoBackBTN
              type="button"
              onClick={onBtnClick}
              label={'GO BACK'}
              to="/movies"
            >
              Go back
            </GoBackBTN>
            <MovieCard isLoading={isLoading}>
              <img
                src={`${viewPoster(movie.poster_path)}`}
                alt={movie.title}
                width="320"
              />
              <MovieInfo>
                <MovieH2>{movie.title}</MovieH2>
                <p> User Score: {`${movieScore(movie.vote_average)}`} </p>
                <MovieH3>Overview</MovieH3>
                <p>{movie.overview}</p>
                <MovieH3>Genres</MovieH3>
                <p>{`${movieGanres(movie.genres)}`}</p>
              </MovieInfo>
            </MovieCard>
            <div text="Additional information" />
            <MovieLink to={`/movies/${movie.id}/cast`} state={location.state}>
              Cast
            </MovieLink>
            <MovieLink
              to={`/movies/${movie.id}/reviews`}
              state={location.state}
            >
              Reviews
            </MovieLink>
            <Outlet />
          </MoviePage>
        </>
      )}
    </>
  );
}
