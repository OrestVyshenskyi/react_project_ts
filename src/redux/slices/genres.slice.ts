import {createSlice} from "@reduxjs/toolkit";

import {IGenre} from "../../interfaces";

interface IState {
    genres:IGenre[]
}

const initialState:IState ={
    genres:[]
};

const slice = createSlice({
    name:'genreSlice',
    initialState,
    reducers:{
        setGenres:(state, action) =>{
            const {genres} = action.payload;
            state.genres = genres
        }
    }
})

const {reducer:genreReducer, actions} = slice;

const genreActions = {
    ...actions
}

export {
    genreReducer,
    genreActions
}