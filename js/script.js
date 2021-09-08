'use strict';

// scroll working

const box = document.querySelector('.box'),
      btn = document.querySelector('button');

const  width = box.clientWidth,
       height = box.clientHeight,
       scrollwidth = box.scrollWidth,
       scrollheight = box.scrollheight;

btn.addEventListener('click', () => {
    box.style.height = box.scrollHeight + 'px';
});

console.log(box.getBoundingClientRect().top);

const style = window.getComputedStyle(box);

console.log(style.display);


window.scrollBy(0, 400); //-x, y
window.scrollTo(0, 400);


