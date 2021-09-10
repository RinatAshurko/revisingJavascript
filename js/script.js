'use strict';
//1) обычная функция : this = window, но если стоит use strict то  будет - undefined
function showThis () {
    console.log(this);
}
showThis();

//2) Конетекст у методов - сам обьект
const data = {
    a: 5,
    b: 4,
    sum: function () {
        console.log(this);
    }
};
data.sum();

//3) КОнтекст вызова в методе будет undefined 
const dota = {
    a: 5,
    b: 4,
    sum: function () {
      function shout () {
        console.log(this);
      }
      shout();
    }
};
dota.sum();

//4) this в конструкторах и классах  - это новый экземпляр обьекта
function User (name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
    this.hello = function () {
        console.log(`Hello ${this.name}`);
    }
}

const ivan = new User('Ivan', 23);

//5) Ручная привязки this с функции (bind)

function count (num) {
    return this*num;
}

const double = count.bind(2);
console.log(double(3));
console.log(double(12));


// call, apply
function dbl (num) {
    console.log(this.n + num);
}

const trh = {
   n: 3
};

dbl.call(trh, 2);
dbl.apply(trh, [12]);


//Practice 
const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    console.log(this) //выведется сам обьект btn (при событии клик)
    this.style.background = 'red'; //кнопка при событии клик, будет перекрашиваться в красный цвет
});

const obj = {
    num: 5,
    sayNumber: function () {
        const say = () => {
            console.log(this);  // в ситуации когда классическое написание функции выводило бы undefined, стрелочная ссылается на сам обьект
        nam();
        }
        say();
    }
}
obj.sayNumber();

// возможность сокращение когда за счет стрелочной функции 
const example = a => a*2;
console.log(example(10));















