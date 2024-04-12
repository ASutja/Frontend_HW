// Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.


const array = [1, 3, 4, 6, 2, 5, 7];
const number = parseInt(prompt('Enter the number'));

function removeElement(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            array.splice(i, 1);
            i--;
        }
    }
}

removeElement(array, number);

console.log(array);
