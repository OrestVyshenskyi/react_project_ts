import React, {FC} from 'react';
import {NavLink} from "react-router-dom";

import {IMovie} from "../interfaces";
import StarsRaiting from "./StarsRaiting";

interface IProps {
    movie: IMovie;
}
const MovieListCard: FC<IProps> = ({movie}) => {
    const {id, title, poster_path, vote_average} = movie

    const img = poster_path? `https://image.tmdb.org/t/p/w500/${poster_path}` : 'https://kartinki.pibig.info/uploads/posts/2023-04/1681549765_kartinki-pibig-info-p-zaglushka-kartinka-arti-krasivo-1.jpg'

    return (
        <NavLink to={id.toString()} state={{...movie}} style={{textDecoration: 'none', color: 'black'}}>
            <div className={'movie'}>
                <img className={'image'} src={img} alt={title}/>
                <StarsRaiting value={vote_average}/>
                <div>
                    <div><h2>{title}</h2></div>
                </div>
            </div>
        </NavLink>

    );
};

export default MovieListCard;