// eventListeners.js

import { fetchRandomCatImage } from './api.js';

const displayCatImage = async () => {
    try {
        const imageUrl = await fetchRandomCatImage();
        const imageContainer = document.getElementById('catImageContainer');

        const imageElement = document.createElement('img');
        imageElement.src = imageUrl;
        imageElement.alt = 'Random Cat Image';

        imageContainer.innerHTML = '';
        imageContainer.appendChild(imageElement);
    } catch (error) {
        console.error('Error displaying cat image:', error);
    }
};

const handleRandomImageButtonClick = () => {
    document.getElementById('randomImageButton').addEventListener('click', displayCatImage);
};

const handleSaveFavoriteButtonClick = () => {
    document.getElementById('saveFavoriteButton').addEventListener('click', async () => {
        const imageUrl = document.getElementById('catImageContainer').querySelector('img').src;
        const attributes = {
            isFavorite: true
        };
        await updateImageAttributes(imageUrl, attributes);
    });
};

export { handleRandomImageButtonClick, handleSaveFavoriteButtonClick };