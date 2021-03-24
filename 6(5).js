/*Задание 5.
Напишите функцию, которая принимает два натуральных числа x и n и возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.
Используйте Arrow Function синтаксис.
Протестируйте функцию на любых значениях и выведите результат в консоль.
*/

let a = +prompt('Введите число');
let b = +prompt('Введите степень');

const getNum = () => Math.pow(a, b);
console.log(getNum());


// или



let degree = (x, n) => Math.pow(x,n)

console.log(degree(7, 2))


// вариант с использованием цикла

const getSqure = (x, n) => {
    let result = x;
    for (let i = 1; i < n; ++i){
        result *= x;
    }
    return result;
};

console.log(getSqure(7,5))






