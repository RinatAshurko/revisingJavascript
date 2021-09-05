
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