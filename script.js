'use strict';

const cards = document.querySelectorAll('.js-memory-card');

let hasFlippedCard = false;
let firstCard;
let secondCard;

function flipCard() {
    this.classList.toggle('flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        console.log({ hasFlippedCard, firstCard });
    }
    else {
        hasFlippedCard = false;
        secondCard = this;
        console.log({ hasFlippedCard, secondCard });
    }
}

for (const card of cards) {
    card.addEventListener('click', flipCard)
};
// cards.forEach(card => card.addEventListener('click', flipCard));

