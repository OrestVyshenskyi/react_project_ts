import React from 'react';
import {useSearchParams} from "react-router-dom";

import {useAppSelector} from "../hooks/redux.hooks";

const MoviesPagination = () => {
    const {page} = useAppSelector(state => state.movies)

    const [,setQuery] = useSearchParams()

    const next = () =>{
        // @ts-ignore
        setQuery(prev => ({...prev, page:+prev.get('page')+1}))
    }
    const prev = () =>{
        // @ts-ignore
        setQuery(prev => ({...prev, page:+prev.get('page')-1}))
    }

    return (
        <div className={'pagination'}>
            <button style={{fontSize:'30px'}} disabled={page === 1} onClick={prev}>Prev Page</button>
            <h1>Current Page:{page}</h1>
            <button style={{fontSize:'30px'}} disabled={page === 500} onClick={next}>Next Page</button>
        </div>
    );
};

export default MoviesPagination;