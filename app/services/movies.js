import fetch from 'focus-core/network/fetch';
import {loadMovieURL, saveMovieURL} from '../config/server/movies';

export function loadMovie(id) {
    console.log(`[MOVIE] call loadMovie(${id}) method`);
    return fetch(loadMovieURL({urlData: {id}}), {isCORS: true});
}

export function saveMovie(movie) {
    console.log(`[MOVIE] call saveMovie(${movie.id}) method`);
    return fetch(saveMovieURL({urlData: {id: movie.id}, data: {movie}}), {isCORS: true});
}
