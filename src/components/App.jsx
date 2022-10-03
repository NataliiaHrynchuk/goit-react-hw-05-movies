import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Movies } from '../pages/Movies';
import { MovieDetails } from './MovieDetails';
import { Cast } from './Cast';
import { Reviews } from './Reviews';
import { Header, Link } from './App.styled';


export const App = () => {
  return (
    <div>
      <Header>
        <nav>
          <Link to="/" end>Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Routes>
        <Route path="/" element={<Home />}/>
          <Route path="/movies" element={<Movies />}/>
            <Route path="movies:moviId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews/>}/>
            </Route>
      </Routes>
    </div>
  );
};
