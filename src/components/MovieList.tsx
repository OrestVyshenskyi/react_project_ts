import React, {FC, useEffect} from 'react';
import {NavLink, useSearchParams} from "react-router-dom";

import MoviesPagination from "./MoviesPagination";
import {useAppDispatch, useAppSelector} from "../hooks/redux.hooks";
import {movieService} from "../services";
import {movieActions} from "../redux";
import MovieListCard from "./MovieListCard";


const MovieList:FC = () => {
    const dispatch = useAppDispatch();
    const {movies} = useAppSelector(state => state.movies);

    const[query, setQuery] = useSearchParams({page:'1'})

    useEffect(() => {
        setQuery(prev => ({...prev, page:'1'}))
    },[query])

    useEffect(() => {
        // @ts-ignore
        movieService.getAll(+query.get('page')).then(value => value.data).then(value => dispatch(movieActions.setMovies(value)))
    }, [query, dispatch])
    return (
        <div>

            <div className={'block'}><NavLink to={'genres'} className={'genre_link'}>
                Genres Filter
            </NavLink></div>
            <MoviesPagination/>
            <div className={'movies'}>
                {movies.map(movie => <MovieListCard key={movie.id} movie={movie}/>)}
            </div>
        </div>

    );
};

export default MovieList;