import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import MoviePage from "./pages/MoviePage";
import MoviesGenres from "./components/MoviesGenres";
import GenreSorted from "./components/GenreSorted";
import Movies from "./components/Movies";
import './App.css'
import FindMoviesForm from "./components/FindMoviesForm";

const App = () => {
    return (
        <div>
          <Routes>
            <Route path={'/'} element={<MainLayout/>}>
              <Route index element={<Navigate to={'search'}/>}></Route>
              <Route path={'search'} index element={<FindMoviesForm/>}></Route>
              <Route path={'films'} element={<MoviePage/>}></Route>
              <Route path={'films/genres'} element={<MoviesGenres/>}></Route>
              <Route path={'films/:filmId'} element={<Movies/>}></Route>
              <Route path={'search/:filmId'} element={<Movies/>}></Route>
              <Route path={'films/genres/:genreId'} element={<GenreSorted/>}></Route>
              <Route path={'films/genres/:genreId/:filmId'} element={<Movies/>}></Route>
            </Route>
          </Routes>
        </div>
    );
};

export default App;