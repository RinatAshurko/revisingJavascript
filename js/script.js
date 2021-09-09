'use strict';

function User (name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
    this.hello = function () {
        console.log(`Hello ${this.name}`);
    }
}
User.prototype.exit = function () {                     //prototype (important)
    console.log(`Пользователь ${this.name} вышел`);
};

const ivan = new User('Ivan', 28),
      alex = new User('Alex', 20);

alex.exit();
    
alex.hello();
ivan.hello();

console.log(ivan);
console.log(alex);





