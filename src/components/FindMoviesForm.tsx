import React, {useEffect, useState} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";

import FoundMovies from "./FoundMovies";
import {movieService} from "../services";
import {useAppDispatch, useAppSelector} from "../hooks/redux.hooks";
import {IMovie} from "../interfaces";
import {movieActions} from "../redux";


const FindMoviesForm = () => {
    const {register, handleSubmit} = useForm<IMovie>()
    const [movie, setMovie] = useState()
    const dispatch = useAppDispatch();
    const {movies} = useAppSelector(state => state.movies);

    useEffect(() => {

        movieService.search(movie?movie:'').then(value => value.data).then(value => dispatch(movieActions.setMovies(value)))
    }, [movie, dispatch])

    const searchMovies:SubmitHandler<IMovie> = (movie) =>{

        // @ts-ignore
        setMovie(movie.searchKey)
    }

    return (
        <div className={'searchBlock'}>
            <div>
                <div className={'findFilms'}>Find Your Films</div>
                <div className={'searchForm'}>
                    <form onSubmit={handleSubmit(searchMovies)}>
                        <input type={"text"} placeholder={'search your movies'} {...register('searchKey')}/>
                        <button type={"submit"}>Search</button>
                    </form>
                </div>
            </div>
            <div className={'searchMovie'}>
                {movies.map(movie => <FoundMovies key={movie.id} movie={movie}/>)}
            </div>

        </div>
    );
};

export default FindMoviesForm;