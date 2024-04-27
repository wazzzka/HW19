'use strict';

const image = document.getElementById('randomImage');
const updateButton = document.getElementById('updateButton');
const imagePath = 'img/';
const imageFiles = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg'];

function updateImage() {
    const randomIndex = Math.floor(Math.random() * imageFiles.length);
    const randomImagePath = imagePath + imageFiles[randomIndex];
    image.src = randomImagePath;
}

updateImage();

updateButton.addEventListener('click', updateImage);