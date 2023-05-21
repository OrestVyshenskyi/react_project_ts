import {IRes} from "../types";
import {IGenre, IMovie, IResults} from "../interfaces";
import {axiosService} from "./axios.service";
import {urls} from "../constants";

const movieService = {
    getAll:(page= 1):IRes<IResults> => axiosService.get(urls.movies, {params:{page:page}}),
    search:(movie:string):IRes<IResults> => axiosService.get(`${urls.search}${movie}`),
    genres:():IRes<IGenre> => axiosService.get(urls.genres),
    movieById:(id:number):IRes<IMovie> => axiosService.get(`${urls.movieById}/${id}`),
    movieByGenresId:(page=1, id:number):IRes<IResults> => axiosService.get(urls.genresById,{params:{page:page, with_genres:id}})
}

export {
    movieService
}