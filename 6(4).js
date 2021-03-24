/* Задание 4. Напишите функцию, которая принимает два числа. 
Каждую секунду необходимо выводить в консоль, 
начиная от первого и заканчивая вторым. Используйте setInterval.
Например, пользователь ввёл числа 5 и 15. 
Каждую секунду в консоль должно печататься число, 
начиная с 5 и заканчивая 15 (всего 11 чисел: 5 6 7 8 9 10 11 12 13 14 15). */

let num1 = prompt('Введите первое число:');
num1 = +num1;
let num2 = prompt('Введите второе число:');
num2 = +num2;

function getList() {
  if (num1 <= num2) {
    console.log(num1);
    num1 += 1;
  } else {
    return 0;
  }
}

setInterval(getList, 1000);


// или


function numbersBetween(from, to) {
    let i = from;

    let timerId = setInterval(function() {
        console.log(i);
        if (i === to) {
            clearInterval(timerId);
        }
        i++;
    }, 1000);
}

numbersBetween(50, 67);














