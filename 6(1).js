/* 
Задание1. Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. 
Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
При выполнении задания необходимо учесть, что массив может содержать не только числа, 
но и, например, знаки, null и так далее.
На этот раз оформите решение в виде функции, постарайтесь дать этой функции корректное название,
вызовите функцию, проанализируйте синтаксис. */


function getTypeOfElements() {
let arr = [11, 6, 25, 0, 1, 2, 'привет', false, 20, 0, 1.236];
let zero = 0;
let odd = 0;
let even = 0;
let other = 0;

for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === 'number') {
    if (arr[i] === 0) {
      zero++;
    } else if (arr[i] % 2 === 0) {
      even++;
    } else {
      odd++;
    }
  } else {
    other++;
  }
}
console.log(`Массив содержит ${even} четных чисел, ${odd} нечетных чисел, ${zero} нолей и ${other} других элементов`);
}
getTypeOfElements();