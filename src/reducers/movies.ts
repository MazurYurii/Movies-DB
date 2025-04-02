import { Action, Reducer } from "redux";

 export interface Movie {
    id: number;
    title: string;
    popularity: number;
    overview: string;
}

interface MovieState {
    top: Movie[]
} 

const initialSatate: MovieState = {
    top: [
        {id: 1, title: 'Inception', popularity: 98, overview: 'Dreams...'},
        {id: 2, title: 'The Goodfather', popularity: 97, overview: 'Goodfather...'},
        {id: 3, title: 'The Dark Knight', popularity: 96.5, overview: 'Batman...'},
        {id: 4, title: 'The Goodfather Part II', popularity: 96, overview: 'Part II...'},
    ]
}


const moviesReducer: Reducer<MovieState, Action> = (state, action) => {
    return initialSatate;
}

export default moviesReducer;