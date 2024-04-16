// Створити функцію для розрахунку добутку двох чисел, що викликається так: product(5)(2). 
// Функція повинна повертати результат (у середині функції не має бути консоль лога!)

function product(number) {
    return function(number2){
        return number*number2;
    }
}

const result = product(5)(2);

console.log(result)