'use strict';

// touchstart
// touchend
// touchmove
// touchenter
// touchleave
// touchcancel

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();

        console.log('start');
        console.log(e.touches);
        console.log(e.targetTouches);
    });
    box.addEventListener('touchend', (e) => {
        e.preventDefault();

        console.log('end');
    });
    box.addEventListener('touchmove', (e) => {
        e.preventDefault();

        console.log(e.targetTouches[0].pageX);
    });
   
});

//touches 
//targetTouches
//changedTouches

// swipe install Hammer.js programm
