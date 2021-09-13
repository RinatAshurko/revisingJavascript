'use strict';

// promise
console.log('Запрос данных');

const req = new Promise((resolve, reject) => {
    
    setTimeout(() => {

        console.log('Подготовка данных...');
        const product = {
            name: 'Alex',
            phone: 1
        };
        resolve(product);
    }, 2000);
});
req.then((data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.number = 375;
            console.log('Данные полученны');
            console.log(data);
      
            resolve(data);
        }, 2000);
    });
}).then(data => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.number = 455;
            console.log(data);
            console.log('Данные измененны');
            resolve(data);
        }, 2000);
    });
}).finally(() => {
    setTimeout(() => {
        console.log('Операция прошла успешно');
    }, 2000);
});




















