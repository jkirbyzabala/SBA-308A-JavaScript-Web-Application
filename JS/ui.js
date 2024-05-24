export function renderShoes(shoes) {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';

    shoes.forEach(shoe => {
        const shoeCard = document.createElement('div');
        shoeCard.classList.add('shoe-card');

        const shoeImg = document.createElement('img');
        shoeImg.src = shoe.imageUrl;
        shoeImg.alt = shoe.name;

        const shoeName = document.createElement('h3');
        shoeName.textContent = shoe.name;

        const shoeBrand = document.createElement('p');
        shoeBrand.textContent = `Brand: ${shoe.brand}`;

        shoeCard.appendChild(shoeImg);
        shoeCard.appendChild(shoeName);
        shoeCard.appendChild(shoeBrand);
        gallery.appendChild(shoeCard);
    });
}