import {IGenre} from "./genre.interface";

export interface IMovie{

    genre_ids?: [];
    searchKey?:string | null;

    genres?: IGenre[];
    id: number;
    overview: string;
    poster_path: string;
    title: string;
    vote_average: number;

}

export interface IResults{
    page: number;
    results: IMovie[];
    total_pages?: number;
}

export interface ISearch{
    searchKey:string;
}

