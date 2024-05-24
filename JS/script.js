// Define the API endpoint
const apiUrl = 'https://api.artic.edu/api/v1/artworks';

// Function to fetch artwork data from the API
const fetchArtworks = async () => {
    try {
        // Send a GET request to the API endpoint
        const response = await fetch(apiUrl);
        
        // Parse the JSON response
        const data = await response.json();
        
        // Return the artwork data
        return data;
    } catch (error) {
        // Handle any errors
        console.error('Error fetching artwork data:', error);
        throw error; // Rethrow the error to be caught by the caller
    }
};

// Example usage: Fetch artwork data and log it to the console
fetchArtworks()
    .then(artworkData => {
        console.log('Artwork Data:', artworkData);
    })
    .catch(error => {
        console.error('Error:', error);
    });