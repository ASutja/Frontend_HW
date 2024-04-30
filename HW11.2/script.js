 function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomIndex = getRandomInt(1, 9);

const imagePath = 'images/' + randomIndex + '.jpg';

const randomImage = document.getElementById('randomImage');
randomImage.src = imagePath;