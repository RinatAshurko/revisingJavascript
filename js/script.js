'use strict';

//filter

const names = ['Ann', 'Ivan', 'ALexander', 'Voldemart'];

const shortName = names.filter((name) => {
    return name.length <5;
});

console.log(shortName);

//map 

const answers = ['IvAN', 'Ann', 'Heloo'];

const results = answers.map(item => item.toLowerCase());
console.log(results);

// every/some

const some = [4, 'Ivan', 'ahah'];

console.log(some.some(item => typeof(item) === 'number')); // Если хотя бы одно значения является числом вернет true

console.log(some.every(item => typeof(item) === 'number')); //Если каждый элемент типа:число, то вернет true 


//reduce 

const arr = [4, 2, 5, 6, 7];
                        // 0/3     4
                        // 4     2
                        // 6     5
                        // 11    6
                        // 17    7
                        
const res = arr.reduce((sum, current) => sum + current, 3);
console.log(res);


const arr1 = ['plum', 'apple', 'banana'];

const ress = arr1.reduce((sum, current) => (`${sum}, ${current}`));
console.log(ress);


//example with text content
const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal'
};

const newArr = Object.entries(obj)
.filter(item => item[1] === 'persone')
.map(item => item[0]);
console.log(newArr);















