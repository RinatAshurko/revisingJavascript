
const numbers = {
    a: 1,
    b: 4, 
    y: {
        x:7,
        z:11
    }
};


function copy (mainObj) {
    let copyObj = {};

    let key;

    for (key in mainObj) {
        copyObj[key] = mainObj[key];
    }  
    return copyObj;
}

const newObj = copy(numbers);

newObj.a = 10;
newObj.y.x = 11;

console.log(numbers);
console.log(newObj);

//Method to copying the massive 

const passwords = [1, 2, 3];

const copyOfPasswords = passwords.slice();

console.log(copyOfPasswords);

//Method to combining the massives

const code =[1, 2, 3];

const coderData =[4, 5, 6];

const combinating = [...code, ...coderData, 'moreInformation'];

console.log(combinating);

// the same method can help are you to sorting information

function helperSorting (a, b ,c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const someInformationFromSomewhere = ['Rinat', '123456', 'Minsk'];

helperSorting(...someInformationFromSomewhere);

// the same way to copying objects

const obj = {
    one: 1,
    two: 2,
    three: 3,
};

const copyOne = {...obj};

console.log(copyOne);


