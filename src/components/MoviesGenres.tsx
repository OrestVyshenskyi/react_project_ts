import React, {FC, useEffect} from 'react';
import {useDispatch} from "react-redux";
import {useAppSelector} from "../hooks/redux.hooks";

import {movieService} from "../services";
import {genreActions} from "../redux";
import Genre from "./Genre";

const MoviesGenres:FC = () => {
    const dispatch = useDispatch();
    const {genres} = useAppSelector(state => state.genres);

    useEffect(() => {
        movieService.genres().then(value => value.data).then(value => dispatch(genreActions.setGenres(value)))
    }, [dispatch])


    return (
        <div className={'genre_name'}>
            {genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export default MoviesGenres;