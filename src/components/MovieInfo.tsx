import React, {FC} from 'react';

import {IMovie} from "../interfaces";
import StarsRaiting from "./StarsRaiting";

interface IProps{
    movie: IMovie;
}

const MovieInfo:FC<IProps> = ({movie}) => {

    const {title, overview, poster_path, vote_average} = movie

    const img = poster_path? `https://image.tmdb.org/t/p/w500/${poster_path}` : 'https://kartinki.pibig.info/uploads/posts/2023-04/1681549765_kartinki-pibig-info-p-zaglushka-kartinka-arti-krasivo-1.jpg'

    return (

        <div className={'film'}>
            <div>
                <img className={'film_image'} src={img} alt={title}/>
            </div>
            <div className={'film_info'}>
                <div><h1>{title}</h1></div>
                <div className={'raiting'}><StarsRaiting value={vote_average}/>Rate: {vote_average}</div>
                <div className={'genres'}>{movie.genres &&
                    movie.genres.map(genre => <div className={'genre'} key={genre.id}>{genre.name}</div>)
                }</div>
                <h2>Overview:</h2>
                <div>{overview}</div>
            </div>
        </div>
    );
};

export default MovieInfo;
