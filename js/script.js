'use strict';

const persone = {
    name: 'Alex',
    age: 25,
    get UserAge() {
        return this.age;
    },
    set UserAge(num) {
        this.age = num
    }
};

console.log(persone.UserAge);
console.log(persone.UserAge = 30);
console.log(persone.UserAge);























