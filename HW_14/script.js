// Дано масив з елементами різних типів. 
// Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

const array = [{}, 1, 2, 3, 4, 5, 6, 'string', null];

function foo(array) {
   let summ = 0;
   let average = 0;
   let countOfNumbers = 0;
   
    for(let i = 0; i < array.length; i++){
        if (typeof array[i] === 'number' && !isNaN(array[i])) {
        summ += array[i];
        countOfNumbers ++;
        }
    }
    average = summ / countOfNumbers;
    
    return average;
}

const result = foo(array);

console.log(result);