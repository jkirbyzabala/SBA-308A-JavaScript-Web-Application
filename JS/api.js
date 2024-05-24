const API_KEY = 'live_ScVa6TSDTTaW3q6KBfplDptavAgFejACgvcjjE3WXHbXtJZzC5fMDAvtBIeAv9w1';

export { API_KEY };

//Requirement #1//
// Function to fetch random cat image
const fetchRandomCatImage = async () => {
    try {
        // Send a GET request to the API endpoint
        const response = await fetch('https://api.thecatapi.com/v1/images/search', {
            headers: {
                'x-api-key': API_KEY,
            },
        });

        // Parse the JSON response
        const data = await response.json();

        // Return the image URL
        return data[0].url;
    } catch (error) {
        // Handle any errors
        console.error('Error fetching cat image:', error);
        throw error; // Rethrow the error to be caught by the caller
    }
};

//Requirement #2// Requirement #4
// Function to display cat image on the page
const displayCatImage = async () => {
    try {
        // Fetch a random cat image
        const imageUrl = await fetchRandomCatImage();

        // Get the container element where the image will be displayed
        const imageContainer = document.getElementById('catImageContainer');

        // Create an image element
        const imageElement = document.createElement('img');
        imageElement.src = imageUrl;
        imageElement.alt = 'Random Cat Image';

        // Append the image to the container
        imageContainer.innerHTML = '';
        imageContainer.appendChild(imageElement);
    } catch (error) {
        // Handle any errors
        console.error('Error displaying cat image:', error);
        // Optionally display an error message to the user
    }
};

//Requirement #3
// Add event listener to the button to fetch and display a random cat image
document.getElementById('randomImageButton').addEventListener('click', displayCatImage);

// Initial call to display a random cat image when the page loads
displayCatImage();