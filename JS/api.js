export async function fetchShoes(query) {
    const response = await fetch(`https://api.api-ninjas.com/v1/sneakers?query=${query}`, {
        headers: { 'X-Api-Key': 'YOUR_API_KEY' }
    });
    const data = await response.json();
    return data;
}

export async function addShoe(shoeData) {
    const response = await fetch('https://api.api-ninjas.com/v1/sneakers', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Api-Key': 'YOUR_API_KEY'
        },
        body: JSON.stringify(shoeData)
    });
    const data = await response.json();
    return data;
}