import { Route, Routes } from 'react-router-dom';
import  Home  from '../pages/Home';
import { Movies } from '../pages/Movies';
import { MovieDetails } from '../pages/MovieDetails';
import { Cast } from './Cast';
import { Reviews } from './Reviews';
import * as SC from './App.styled';


export const App = () => {
  return (
    <div>
      <SC.Header>
        <nav>
          <SC.Link to="/" end>
            Home
          </SC.Link>
          <SC.Link to="/movies">Movies</SC.Link>
        </nav>
      </SC.Header>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/movies" element={<Movies />}/>
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews/>}/>
        </Route>
        <Route path="*" element={<Home />}/>
      </Routes>
    </div>
  );
};
