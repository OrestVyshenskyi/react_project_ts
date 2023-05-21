import React, {FC} from 'react';
import {NavLink} from "react-router-dom";

import {IGenre} from "../interfaces";

interface IProps{
    genre:IGenre
}

const Genre:FC<IProps> = ({genre}) => {
    const {id, name} = genre
    return (
        <div className={'genre_links'}>
            <NavLink to={id.toString()} state={{...genre}} style={{textDecoration: 'none', color: 'black'}}>
                <h1>{name}</h1>
            </NavLink>
        </div>
    );
};

export default Genre;