import builder from 'focus-core/util/url/builder';

export const loadMovieURL = builder('movies/${id}', 'GET');

/*
Ce que ça fait
loadMovieURL =  function({data, urlData})
example appel
loadMovieURL({urlData: {id: 1}})
*/
