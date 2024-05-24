import { fetchRandomCatImage, fetchCatImageAttributes, updateImageAttributes } from './api.js';

const displayCatImage = async () => {
    try {
        const imageUrl = await fetchRandomCatImage();
        const imageContainer = document.getElementById('catImageContainer');
        const imageElement = document.createElement('img');
        imageElement.src = imageUrl;
        imageElement.alt = 'Random Cat Image';
        imageContainer.innerHTML = '';
        imageContainer.appendChild(imageElement);

        // Fetch and display attributes of the image
        const attributes = await fetchCatImageAttributes(imageUrl);
        displayImageAttributes(attributes);
    } catch (error) {
        console.error('Error displaying cat image:', error);
    }
};

const displayImageAttributes = (attributes) => {
    const attributesContainer = document.getElementById('imageAttributes');
    attributesContainer.innerHTML = '';
    for (const key in attributes) {
        const attributeElement = document.createElement('div');
        attributeElement.textContent = `${key}: ${attributes[key]}`;
        attributesContainer.appendChild(attributeElement);
    }
};

document.getElementById('randomImageButton').addEventListener('click', displayCatImage);

document.getElementById('saveFavoriteButton').addEventListener('click', async () => {
    const imageUrl = document.getElementById('catImageContainer').querySelector('img').src;
    const attributes = {
        isFavorite: true
    };
    await updateImageAttributes(imageUrl, attributes);
});

displayCatImage();