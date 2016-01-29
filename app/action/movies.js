import {loadMovie} from '../services/movies'
export function loadMovieAction(criteria){
    return loadMovie(criteria).then(d => console.log(d));
}
