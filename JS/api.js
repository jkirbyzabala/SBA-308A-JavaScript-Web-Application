// api.js

const API_KEY = 'live_ScVa6TSDTTaW3q6KBfplDptavAgFejACgvcjjE3WXHbXtJZzC5fMDAvtBIeAv9w1';

const fetchRandomCatImage = async () => {
    try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search', {
            headers: {
                'x-api-key': API_KEY,
            },
        });

        const data = await response.json();

        return data[0].url;
    } catch (error) {
        console.error('Error fetching cat image:', error);
        throw error;
    }
};

export { fetchRandomCatImage };