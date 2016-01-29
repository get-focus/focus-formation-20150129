import {loadMovie, saveMovie} from '../services/movies';
import dispatcher from 'focus-core/dispatcher';
import actionBuilder from 'focus-core/application/action-builder';

export const loadMovieAction = actionBuilder({
    node: 'movieInfo',
    service: loadMovie,
    status: 'loaded'
});

export const saveMovieAction = actionBuilder({
    node: 'movieInfo',
    service: saveMovie,
    status: 'saved'
});
