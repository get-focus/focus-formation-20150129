import fetch from 'focus-core/network/fetch';
import {loadMovieURL} from '../config/server/movies';

export function loadMovie(id) {
        console.log(`[MOVIE] call loadDemo(${id}) method`);
        return fetch(loadMovieURL({urlData: {id}}), {isCORS: true});
}
