// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 
// 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". 
// Вихідний рядок та символи для видалення задає користувач.

const message = prompt('Enter your string');
const chars = prompt('Enter some chars for removing');

function foo(string, chars) {
    const messageArray = string.split('');

    const charsToDelete = chars.split('');

    for (let i = 0; i < charsToDelete.length; i++) {
        const charToDelete = charsToDelete[i];
        
        messageArray.forEach((char, index) => {
            if (char === charToDelete) {
                messageArray.splice(index, 1);
            }
        });
    }

    const newMessage = messageArray.join('');

    return newMessage;
}

const result = foo(message, chars);

alert(result);
