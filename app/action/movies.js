import {loadMovie} from '../services/movies';
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
