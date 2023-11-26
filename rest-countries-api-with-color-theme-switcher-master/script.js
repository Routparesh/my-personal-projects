

fetch('data.json')
      .then(response => response.json())
      .then(data => {
        // Process the JSON data and create cards
        const cardsContainer = document.getElementById('cardsContainer');

        for (let i = 0; i < Math.min(data.length, 99); i++) {
          const cardData = data[i];

          // Create card elements
          const card = document.createElement('div');
          card.classList.add('card');

          const img = document.createElement('img');
          img.src = cardData.flags.svg;
          img.alt = 'Card Image';

          const name = document.createElement('h1');
          name.textContent = cardData.name;

          const population = document.createElement('p');
          population.textContent = `Population: ${cardData.population}`;

          const region = document.createElement('p');
          region.textContent = `Region: ${cardData.region}`;

          const capital = document.createElement('p');
          capital.textContent = `Capital: ${cardData.capital}`;

          // Append elements to the card
          card.appendChild(img);
          card.appendChild(name);
          card.appendChild(population);
          card.appendChild(region);
          card.appendChild(capital);

          // Append the card to the container
          cardsContainer.appendChild(card);
        }
      })
      .catch(error => console.error('Error loading JSON:', error));

var brightness = document.querySelector('.brightness');
var h1 = document.querySelectorAll('h1');

brightness.addEventListener('click', () =>{
    document.body.style.backgroundColor = 'hsl(207, 26%, 17%)'
    h1.style.color = 'hsl(255, 255, 255)';
})