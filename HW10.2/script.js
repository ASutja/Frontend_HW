const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function getEnevNumbers(arr) {
    const evenNumbers = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0) {
            evenNumbers.push(arr[i]);
        }
    }
    return evenNumbers;
}


const even = getEnevNumbers(arr);
console.log(even); // [2, 4, 6, 8]