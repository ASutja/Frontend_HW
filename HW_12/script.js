// Створити програму за таким алгоритмом:

// Спитати у користувача число N, за допомогою prompt()
// З'ясувати, чи просте воно (простим називається число, понад 1, що не має інших дільників, крім 1 і себе).
// Вивести в alert() повідомлення про те чи просте число чи ні
// Спитати у користувача чи хоче він ще обрахувати якесь число
// Якщо так, то перейти на перший крок програми, якщо ні завершити програму
// Завершати програму кожен раз коли користувач тисне закрити.


let answer = true;

while(answer){
const option = parseInt(prompt('do you want to check the number? 1 - yes, 2 - no'));


    if(option === 1){

        const N = parseInt(prompt('Enter the number'));

        let isPrime = true;
        for (let i = 2; i < N; i++) {
            if (N % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime && N > 1) {
            alert(N + ' is prime number');
        } 
        else {
            alert(N + ' is not prime number or less than 2');
        }
    }
    else if (option === 2){
        answer = false;
        alert('OK! See you later!');
    } 
    else {
        alert('Invalid option! Please enter 1 for yes or 2 for no');
    }
}


