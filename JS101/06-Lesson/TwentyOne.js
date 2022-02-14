const readline = require("readline-sync");
const suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
const SUIT = 0;
const CARD_VALUE = 1;
const JACK_QUEEN_KING_VALUE = 11;

function initializeDeck() {
  const cards = {};
  const values = ["A",2,3,4,5,6,7,8,9,10,"Jack","Queen","King"];

  suits.forEach(suit => {
    cards[suit] = values;
  });
  return cards;
}

function initializeHand (cardDeck) {
  const hand = {};

  suits.forEach(suit => {
    hand[suit] = [];
  });

  let card1 = drawCard(cardDeck);


  addToHand(hand, card1[0], card1[1]);

  let card2 = drawCard(cardDeck);
  addToHand(hand, card2[0], card2[1]);

  console.log(hand);
  return hand;

}

function prompt (message) {
  return console.log(`==> ${message}`);
}
function addVerticalSpace(num = 1) {
  for (let count = 1; count <= num; count++) {
    console.log('');
  }
}

function hitOrStay () {
  let answer; 
  while (true) {
    prompt("Do you want to Hit or Stay?");
    prompt("Please enter 'H' for hit or 'S' for Stay");
    answer = readline.question();
    if (answer.toLowerCase() === "s" || answer.toLowerCase() === "h" ) break;
    prompt("Please enter a valid answer");
  }
  return answer;
}

function addToHand (playerHand, suit, value) {
  console.log(playerHand);
  console.log(`suit = ${suit}`);
  console.log(`suit = ${value}`);
  let suitValues = playerHand[suit];
  console.log(suitValues);
  suitValues.push(value);
  playerHand[suit] = suitValues;
  return playerHand;
}

function welcomeMessage () {
  console.log("Wecome to Twenty One! \n First player closest to 21 without going over wins!");
  addVerticalSpace();
  prompt("Ready to play?");
  addVerticalSpace();
  prompt("Press any key to continue.");
  readline.question();
}

function calculateHand (playerHand) {
  let total = 0;
  let values = convertQueenJackKing (playerHand);

  console.log(values);
  values.forEach(array => {
    total += array.reduce((sum, cardValue) => {
      console.log(cardValue);
      if (typeof cardValue === "number") {
        sum += cardValue;
      }
      return sum;
    }, 0);
    console.log(`total is ${total}`);
  });
}

function convertQueenJackKing (playerHand) {
  return Object.values(playerHand)
    .filter(array => array.length > 0)
    .map(array => {
      console.log(`Array is ${array}`);
      return array.map(value => {
        if (typeof value === "number") {
          return value;
        } else if ("JQK".includes(value[0])) {
          return JACK_QUEEN_KING_VALUE;
        } else {
          return value;
        }
      });
    });
}


function drawCard (cardDeck) {
  let cardSuit = pickSuit(cardDeck);
  //console.log(cardSuit);
  let cardValue = pickValue (cardSuit, cardDeck);
  //console.log(cardValue);
  return [cardSuit, cardValue];
}

function pickValue (cardSuit, cardDeck) {
  let suitValues = cardDeck[cardSuit];
  //console.log(`Suit values = ${suitValues}`);
  let randomValueIndex = Math.floor(Math.random() * suitValues.length);
  //console.log(`index = ${randomValueIndex}`);
  let cardValue = suitValues[randomValueIndex];

  removeCardFromDeck(randomValueIndex, cardSuit, suitValues, cardDeck);

  return cardValue;

}

function pickSuit (cardDeck) {
  let cardSuit;
  const suit = Object.keys(cardDeck);
  let randomSuitIndex = Math.floor(Math.random() * suit.length);
  cardSuit = suit[randomSuitIndex];
  return cardSuit;
}

function removeCardFromDeck (index, suit, suitValues, cardDeck) {
  console.log(`remove card index = ${index}`);
  let newSuitValues = suitValues;
  newSuitValues.splice(index,1);
  console.log(`new suit values = ${newSuitValues}`);
  cardDeck[suit] = newSuitValues;
}

welcomeMessage();
let cardDeck = initializeDeck();


let playerHand = initializeHand(cardDeck);
let playerCard = drawCard(cardDeck);
//console.log(playerCard[SUIT]);
//console.log(playerCard[CARD_VALUE]);


playerHand = addToHand(playerHand, playerCard[SUIT], playerCard[CARD_VALUE]);
//console.log(playerHand);
calculateHand(playerHand);

