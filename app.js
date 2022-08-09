import { getDogs } from './fetch-utils.js';
import { renderDogCard } from './render-utils.js';
import { getDog } from './fetch-utils.js';

const dogListContainer = document.getElementById('dog-list-container');

// on load
// fetch all dogs

loadData();
// render and append all dog cards to the container

async function loadData() {
    const dogs = await getDogs();
    for (let dog of dogs) {
        console.log(dog.name);
        const dogDiv = renderDogCard(dog);
        dogListContainer.append(dogDiv);
    }
}

