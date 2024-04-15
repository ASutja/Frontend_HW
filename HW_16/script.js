// Написати функцію, яка приймає 1 параметр. Та скадае значення з тим, 
// що передали перший раз і т. д. Все це із замиканнями, наприклад:

// console.log(sum(4)); // 4

// console.log(sum(6)); // 10

// console.log(sum(10)); // 20

// console.log(sum(7)); // 27

function createSum(){

    let sum = 0;
    return function(value){
        sum += value;
        return sum;
    }
}
const sum = createSum();

console.log(sum(4));
console.log(sum(6));
console.log(sum(10));
console.log(sum(7));