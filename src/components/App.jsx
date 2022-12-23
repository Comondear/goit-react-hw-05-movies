import { Routes, Route, Outlet } from 'react-router-dom';
import { Container } from './Styles';
import { Suspense, lazy } from 'react';
import Navigation from 'components/Navigation';
import { ToastContainer } from 'react-toastify';
import Loader from '../components/Loader';
import 'react-toastify/dist/ReactToastify.css';
import './AppGlobalStyle.css';

const NotFound = lazy(() => import('pages/NotFound'));
const Home = lazy(() => import('pages/Home'));
const SearchMovie = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Cast = lazy(() => import('pages/Cast'));
const Reviews = lazy(() => import('pages/Reviews'));

export const App = () => {
  return (
    <Container>
      <Navigation />
      <ToastContainer autoClose={5000} />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="movies"
            element={
              <>
                <Outlet />
              </>
            }
          >
            <Route index element={<SearchMovie />}></Route>
            <Route path=":movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />}></Route>
              <Route path="reviews" element={<Reviews />}></Route>
            </Route>
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Suspense>
    </Container>
  );
};
