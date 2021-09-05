'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres:[],
    privat: true,
    start: function () {
        personalMovieDB.count = prompt('Сколько фильмов вы уже посомтрели?', '');

    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
        personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', '');
   }
 },    
    remember: function () {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');

        if (a != null && b != null && a != '' && b != '' ) {
            personalMovieDB.movies[a] = b;
        } else {
            console.log('error');
            i--;
        }
    }
},
    checkMyAnswers: function () {
    if (personalMovieDB.count < 10) {
        console.log('Просомотренно мало фильмов');
    }   else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
    }  else if (personalMovieDB.count > 30) {
        console.log('Вы киноман');
    }
},
    showMyDB: function () {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
},

    writeYourgenres: function () {
    for (let i =1; i <2; i++) {
//     let genre = prompt(`Ваш любимый жанр под номером ${i}`);
//     if (genre === '' || genre === null) {
//         i--;
//     } else {
//         personalMovieDB.genres[i-1] = genre;
//     }
        let genre = prompt(`Введите свои любимые жанры черзе запятую`).toLowerCase();
        
        if (genre === '' || genre === null) {
        i--;
        } else {
        personalMovieDB.genres = genre.split(', ');
        personalMovieDB.genres.sort();
        }
    }
   personalMovieDB.genres.forEach((item, i) => {
       console.log(`Любимый жанр ${i +1} - это ${item}`);
   });
},
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat){
            personalMovieDB.privat = false;
        }else {
            personalMovieDB.privat = true;
        }
    }
};
console.log(personalMovieDB);

