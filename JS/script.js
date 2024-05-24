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

// STEP 2 // 
    // Function to search for artworks by title or artist
const searchArtworks = async (query) => {
    try {
        // Construct the API endpoint URL with the search query
        const searchUrl = `${apiUrl}?q=${encodeURIComponent(query)}`;
        
        // Send a GET request to the API endpoint with the search query
        const response = await fetch(searchUrl);
        
        // Parse the JSON response
        const data = await response.json();
        
        // Return the search results
        return data;
    } catch (error) {
        // Handle any errors
        console.error('Error searching for artworks:', error);
        throw error; // Rethrow the error to be caught by the caller
    }
};

// Example usage: Search for artworks with title or artist containing "Vermeer"
searchArtworks('Vermeer')
    .then(searchResults => {
        console.log('Search Results:', searchResults);
    })
    .catch(error => {
        console.error('Error:', error);
    });