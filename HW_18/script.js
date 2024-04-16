// Цикл на кожній ітерації пропонує через prompt ввести число більше 100 (але максимум 10 ітерацій циклу) . 
// Якщо відвідувач ввів число менше ста – попросити ввести ще раз, і таке інше. 
// Якщо користувач вводить більше ста, текст або цикл закінчує всі ітерації, 
// то функція виводить в консоль останній введення користувача і завершує функцію.

function printChoice() {
    for (let i = 0; i < 10; i++) {
        const number = parseInt(prompt('Enter a number greater than 100:'));
        
        if (number > 100 || isNaN(number)) {
            console.log('Last input:', number);
            return; 
        } 
        else {
            console.log('Please enter a number greater than 100.');
        }
    }
}

printChoice();
