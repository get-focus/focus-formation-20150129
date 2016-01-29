import {loadMovie, saveMovie} from '../services/movies';
import dispatcher from 'focus-core/dispatcher';

export function loadMovieAction(criteria) {
    return loadMovie(criteria).then(movie => {
        dispatcher.handleServerAction({
            data: {
                movieInfo: movie
            },
            type: 'update'
        });
    });
}

export function saveMovieAction(movie) {
    return saveMovie(movie).then(movie => {
        dispatcher.handleServerAction({
            data: {
                movieInfo: movie
            },
            status: 'saved',
            type: 'update'
        });
    });
}
