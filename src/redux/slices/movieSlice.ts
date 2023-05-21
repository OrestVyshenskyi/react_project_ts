import {createSlice} from "@reduxjs/toolkit";

import {IMovie} from "../../interfaces";

interface IState {
    movies:IMovie[];
    page:number;
}

const initialState:IState={
    movies:[],
    page:1
};

const slice = createSlice({
    name:'movieSlice',
    initialState,
    reducers:{
        setMovies:(state, action) =>{
            const {results, page} = action.payload;
            state.movies = results
            state.page = page
        }
    }
})

const {reducer:movieReducer, actions} = slice;

const movieActions = {
    ...actions
}

export {
    movieReducer,
    movieActions
}