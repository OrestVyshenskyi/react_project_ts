import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";

import {IMovie} from "../interfaces";
import {movieService} from "../services";
import MovieInfo from "./MovieInfo";

const Movies = () => {
    const {state} = useLocation()
    const [movie, setMovie] = useState<IMovie|null>(null)

    useEffect(() => {
        movieService.movieById(state.id).then(value => value.data).then(value => setMovie(value))
    },[])

    return (
        <div>
            {movie &&
                <MovieInfo key={movie.id} movie={movie}/>
            }
        </div>
    );
};

export default Movies;