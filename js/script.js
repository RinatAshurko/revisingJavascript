'use strict';

// Date 

// const now = new Date();

// console.log(now.getFullYear());

// console.log(now.getTimezoneOffset());
// console.log(now.getTime());
// console.log(now.setHours(18, 40));


let start = new Date();

for (let i =0; i <10000; i++) {
    let some =i **3;
}

let end = new Date();

alert(`Цикл произведен за ${end -start}`);