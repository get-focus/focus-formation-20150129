import builder from 'focus-core/util/url/builder';

export const loadMovieURL = builder('movies/${id}', 'GET');
export const saveMovieURL = builder('movies/${id}', 'POST');

/*
Ce que ça fait
loadMovieURL =  function({data, urlData})
example appel
loadMovieURL({urlData: {id: 1}})
*/
