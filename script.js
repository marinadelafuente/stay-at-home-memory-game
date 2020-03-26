'use strict';

const cards = document.querySelectorAll('.js-memory-card');
const resetButton = document.querySelector('.js-reset');
const youWon = document.querySelector('.js-win');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard;
let secondCard;
let matchCounter = 0;

// Function to shuffle the cards at the start of the game
function shuffle() {
    cards.forEach(card => {
        let randomNumber = Math.floor(Math.random() * 16);
        card.style.order = randomNumber;
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
        hasFlippedCard = false;
        secondCard = this;
        checkForMatch();
    }
}

// function win() {
//     for (const card of cards) {
//         if (card.classList.contains('flip').length === cards.length) {
//             console.log('won')
//             return youWon.innerHTML = `You Won!!!`;
//         }
//     }
// }

// Function to check if the two cards are a match:
const checkForMatch = () => {
    let cardsMatch = firstCard.dataset.card === secondCard.dataset.card;
    if (cardsMatch) {
        deactivateCards();
        matchCounter += 1;
        if (matchCounter == (cards.length / 2)) {
            return youWon.innerHTML = `You Won!!!`;
        }
    }
    else {
        unflipCards()
    };
}

const closeCards = () => {
    [hasFlippedCard, lockBoard] = [false, false]
    [firstCard, secondCard] = [null, null];
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
    }, 700);
}

const reset = () => {
    location.reload();
}

resetButton.addEventListener('click', reset);

cards.forEach(card => card.addEventListener('click', flipCard));


