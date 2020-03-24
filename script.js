'use strict';

const cards = document.querySelectorAll('.js-memory-card');
const resetButton = document.querySelector('.js-reset')

let hasFlippedCard = false;
let lockBoard = false;
let firstCard;
let secondCard;

function shuffle() {
    cards.forEach(card => {
        let randomNumber = Math.floor(Math.random() * 16);
        card.style.order = randomNumber;
        console.log(randomNumber);
    })
};

shuffle();

// Function to flip the cards:
function flipCard() {
    if (lockBoard === true) return;
    if (this === firstCard) return;
    this.classList.toggle('flip'); // the clicked card will add/remove the class

    if (!hasFlippedCard) {
        // first click
        hasFlippedCard = true;
        firstCard = this;
    }
    else {
        // second click
        secondCard = this;
        checkForMatch();
    }
}

// Function to check if the two cards are a match:
const checkForMatch = () => {
    let cardsMatch = firstCard.dataset.card === secondCard.dataset.card;
    cardsMatch ? deactivateCards() : unflipCards();
}

const deactivateCards = () => {
    // it's a match: cards cannot be flipped anymore
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    closeCards();
}

const unflipCards = () => {
    // it's not a match: cards flip again after 1s
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        closeCards();
    }, 1000);
}

const closeCards = () => {
    [hasFlippedCard, lockBoard] = [false, false]
    [firstCard, secondCard] = [null, null];
}

cards.forEach(card => card.addEventListener('click', flipCard));


