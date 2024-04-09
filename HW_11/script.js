// Дано ціле число N (ввести через prompt()). 
// Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N

const N = parseInt(prompt('Enter the number N'));

for (let i = 1; i <= 100; i++) {
    if (i * i <= N) {
        console.log(i);
    }
    else{
        console.log('It is not a prime number');
    }
}