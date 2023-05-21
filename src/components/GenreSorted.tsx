import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";

import MovieListCard from "./MovieListCard";
import {movieService} from "../services";
import {IResults} from "../interfaces";

const GenreSorted = () => {
    const {state} = useLocation()

    const [movies, setMovies] = useState<IResults|null>(null)

    useEffect(() => {
        movieService.movieByGenresId(1, state.id).then(value => value.data).then(value => setMovies(value))
    },)

    return (
            <div className={'movies'}>{movies &&
                movies.results.map(movie => <MovieListCard key={movie.id} movie={movie}/>)
            }</div>
    );
};

export default GenreSorted;