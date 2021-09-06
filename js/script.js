'use strict';

const hearts = document.querySelectorAll('.heart'),
      wrapper = document.querySelector('.wrapper'),
      circles = document.querySelectorAll('.circle');

hearts.forEach(item => {
    console.log(item);
});

const div = document.createElement('div');
div.classList.add('black');
// wrapper.append(div);

hearts[1].before(div);

// hearts[2].remove();

circles[1].replaceWith(hearts[0]);

div.innerHTML = '<h1> Hello! </h1>';

div.insertAdjacentHTML('beforebegin', '<h2> Hello </h2>');
