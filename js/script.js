'use strict'

const numberOfFilm = +prompt('Сколько фильмов вы уже посомтрели?', '');

const personalMovieDB = {
    count: numberOfFilm,
    movies: {},
    actors: {},
    genres:[],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?'),
      b = prompt('На сколько оцените его?'),
      c = prompt('Один из последних просмотренных фильмов?'),
      d = prompt('На сколько оцените его?');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?'),
          b = prompt('На сколько оцените его?');
    
    if (a.length < 10 && b.length < 10 && a != null && b != null && a != '' && b != '' ) {
        personalMovieDB.movies[a] = b;
    } else {
        console.log('error');
        i--;
    }
    if (personalMovieDB.count < 10) {
        console.log('Просмотренно слишком мало фильмов');
    }

}





console.log(personalMovieDB);