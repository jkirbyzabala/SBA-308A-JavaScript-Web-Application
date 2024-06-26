# SBA-308A-JavaScript-Web-Application

I created this small single-page web application to showcase my ability to implement advanced JavaScript tools and features in a practical manner.

<h1>Requirements: </h1>

<ul>
<li>Use the fetch API or Axios to communicate with an external web API. Use the data provided by this API to populate your application’s content and features.</li>
    <ul> <li> fetchRandomCatImage </ul>
<li>Create user interaction with the API through a search feature, paginated gallery, or similar. This feature should use GET requests to retrieve associated data.</li>
    <ul> <li> #randomImageButton </ul>
<li>Enable user manipulation of data within the API through the use of POST, PUT, or PATCH requests. Ensure your chosen API supports this feature before beginning.</li>
    <ul> <li> #saveFavoriteButton </ul>
<li>Make use of Promises and async/await syntax as appropriate.</li>
    <ul> <li> fetchRandomCatImage </ul>
    <ul> <li> displayCatImage </ul>
    <ul> <li> displayImageAttributes </ul>
    <ul> <li> updateImageAttributes </ul>
<li>Organize your JavaScript code into at least three (3) different module files, and import functions and data across files as necessary.</li>
    <ul> <li> main.js </ul>
    <ul> <li> api.js </ul>
    <ul> <li> eventListeners.js </ul>
<li>Ensure the program runs as expected, without any undesired behavior caused by misunderstanding of the JavaScript event loop (such as race conditions, API calls being handled out of order, etc.).</li>
    <ul> <li> DONE </ul>
<li>Create an engaging user experience through the use of HTML and CSS.</li>
    <ul> <li> DONE </ul>
<li>Ensure that the program runs without errors (comment out things that do not work, and explain your blockers - you can still receive partial credit).</li>
    <ul> <li> DONE </ul>
<li>Commit frequently to the git repository.</li>
    <ul> <li> DONE </ul>
<li>Include a README file that contains a description of your application.</li>
    <ul> <li> DONE </ul>
<li>Level of effort displayed in creativity, presentation, and user experience.</li>
    <ul> <li> DONE </ul>
  
</ul>

Note to Self: Here is how you can See Favorites:

const fetchFavorites = async () => {
try {
// Make a request to fetch saved favorites
const response = await fetch('URL_TO_FETCH_SAVED_FAVORITES');
const favorites = await response.json();

        // Display the saved favorites on the webpage
        displayFavorites(favorites);
    } catch (error) {
        console.error('Error fetching saved favorites:', error);
    }

};

const displayFavorites = (favorites) => {
// Assuming you have a container element to display the favorites
const favoritesContainer = document.getElementById('favoritesContainer');
favoritesContainer.innerHTML = ''; // Clear previous content

    // Loop through the favorites and create HTML elements to display them
    favorites.forEach((favorite) => {
        const favoriteElement = document.createElement('div');
        favoriteElement.textContent = favorite.name; // Assuming each favorite has a name
        favoritesContainer.appendChild(favoriteElement);
    });

};

// Call the fetchFavorites function when the page loads or when needed
fetchFavorites();
