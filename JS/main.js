import { fetchRandomCatImage } from './api.js';

const displayCatImage = async () => {
    try {
        const imageUrl = await fetchRandomCatImage();
        const imageContainer = document.getElementById('catImageContainer');
        
        // Create an image element
        const imageElement = document.createElement('img');
        imageElement.src = imageUrl;
        imageElement.alt = 'Random Cat Image';
        
        // Clear previous content and append the image to the container
        imageContainer.innerHTML = '';
        imageContainer.appendChild(imageElement);
    } catch (error) {
        console.error('Error displaying cat image:', error);
    }
};

document.getElementById('randomImageButton').addEventListener('click', displayCatImage);

// Initial call to display a random cat image when the page loads
displayCatImage();

document.getElementById('saveFavoriteButton').addEventListener('click', async () => {
    const imageUrl = document.getElementById('catImageContainer').querySelector('img').src;
    const attributes = {
        isFavorite: true
    };
    await updateImageAttributes(imageUrl, attributes);
});

displayCatImage();