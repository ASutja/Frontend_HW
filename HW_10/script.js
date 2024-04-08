// За допомогою prompt() запитати від користувача валюту. 
// Обрахувати валюту де один долар коштує 39 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів

alert('You can exchange the currency in UAH. \n Choose the option.');
const option = prompt('Enter 1 - USD, 2 - EUR, 3 - CNY');

switch(option){
    case '1': 
        for(let i = 10; i < 100; i += 10){
            document.write(`${i} USD - ${i * 39} UAH<br>`);
        }
        break;

    case '2': 
        for(let i = 10; i < 100; i += 10){
            document.write(`${i} EUR - ${i * 42} UAH<br>`);
        }
        break;

    case '3': 
        for(let i = 10; i < 100; i += 10){
            document.write(`${i} CNY - ${i * 5} UAH<br>`);
        }
        break;

    default:
        alert('Invalid option!');
        break;
}
