'use strict';

const cards = document.querySelectorAll('.js-memory-card');

let hasFlippedCard = false;
let firstCard;
let secondCard;

// Function to flip the cards:
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
        checkForMatch();
    }
}

// Function to check if the two cards are a match:
const checkForMatch = () => {
    if (firstCard.dataset.card === secondCard.dataset.card) {
        deactivateCards();
    }
    else {
        unflipCards();
    }
}

const deactivateCards = () => {
    // it's a match: cards cannot be flipped anymore
    firstCard.removeEventListener('click', flipCard)
    secondCard.removeEventListener('click', flipCard)
}

const unflipCards = () => {
    // it's not a match: cards flip again after 1s
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
    }, 1000);
}

cards.forEach(card => card.addEventListener('click', flipCard));

