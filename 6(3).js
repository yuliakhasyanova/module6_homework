/*Задание 3.
Написать функцию, которая принимает число как аргумент и возвращает функцию, которая также принимает число как аргумент и возвращает
сумму этих двух чисел. Выведите в консоль результат.
 */
let a = +prompt('Введите первое число');
let b = +prompt('Введите второе число');

function returnFunc() {
	const sumNumb = function () {
		return a + b;
	}
	return sumNumb;
}

console.log(returnFunc()());

// или


const getNum = (a) => {
  const countSum = (b) => {
    return a + b;
  };
  return countSum(3);
};
let resultFunction = getNum(2);
console.log(resultFunction);

// или

function callbackFunc(a) {
    function sum(b) {
    return a + b;
  }
    return sum(67);
  }
  let resultFunc = callbackFunc(10);
  console.log(resultFunc);