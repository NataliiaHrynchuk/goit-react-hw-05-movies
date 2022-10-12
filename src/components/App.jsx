import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';

const MovieDetails = lazy(() =>
  import('../pages/MovieDetails/MovieDetails')
);
const Home = lazy(() =>
  import('../pages/Home/Home')
);
const Movies = lazy(() =>
  import('../pages/Movies')
);
const Cast = lazy(() =>
  import('./MoreDetails/Cast')
);
const Reviews = lazy(() =>
  import('./MoreDetails/Reviews')
);

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />}/>
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews/>}/>
        </Route>
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
