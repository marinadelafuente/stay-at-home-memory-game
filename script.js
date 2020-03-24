'use strict';

let cards = document.querySelectorAll('.js-memory-card');

const flipCard = () => {
    console.log('hago', this); // si pinchas en los diferentes id (luke y leia) te dirán cosas diferentes
};

for (const card of cards) {
    card.addEventListener('click', flipCard);
}

// cards.forEach(card => card.addEventListener('click', flipCard));