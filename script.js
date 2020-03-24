'use strict';

const cards = document.querySelectorAll('.js-memory-card');

let hasFlippedCard = false;
let firstCard;
let secondCard;

function flipCard() {
    this.classList.toggle('flip'); // the clicked card will add/remove the class

    if (!hasFlippedCard) {
        // first click
        hasFlippedCard = true;
        firstCard = this;
    }
    else {
        // second click
        hasFlippedCard = false;
        secondCard = this;

        // do cards match?
        if (firstCard.dataset.card === secondCard.dataset.card) {
            // it's a match:
            firstCard.removeEventListener('click', flipCard)
            secondCard.removeEventListener('click', flipCard)
        }
        else {
            // it's not a match:
            setTimeout(() => {
                firstCard.classList.remove('flip');
                secondCard.classList.remove('flip');
            }, 1300);
        }

    }
}

for (const card of cards) {
    card.addEventListener('click', flipCard)
};
// cards.forEach(card => card.addEventListener('click', flipCard));

