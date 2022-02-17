
const readline = require("readline-sync");
const suits = ["\u2663", "\u2666", "\u2665", "\u2660"];
const SUIT_LOCATION_IN_ARRAY = 0;
const CARD_VALUE_IN_ARRAY = 1;
const JACK_QUEEN_KING_VALUE = 10;
const ACE_VALUE = 11;
const cardArt = {
  stringTop: "",
  stringBorder1: "",
  stringBorder2: "",
  stringBorderMid: "",
  stringBorderBottom:  "",
  stringBorderBottom2:  "",
  stringBottom: "",
};

function initializeDeck() {
  const cards = {};
  const values = ["A",2,3,4,5,6,7,8,9,10,"Jack","Queen","King"];

  suits.forEach(suit => {
    cards[suit] = values;
  });
  return cards;
}

function initializeHand (cardDeck, dealer) {
  const hand = {};

  suits.forEach(suit => {
    hand[suit] = [];
  });

  let card1 = drawCard(cardDeck);
  //console.log(card1);

  addToHand(hand, card1[0], card1[1]);

  let card2 = drawCard(cardDeck);
  //console.log(card2);

  addToHand(hand, card2[0], card2[1]);


  if (dealer === "dealer") {
    return [hand, card1];
  }

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


function addToHand (hand, suit, value) {
 // console.log(`suit is ${suit}`);
 // console.log(`value is ${value}`);
 // console.log(hand);

  let suitValues = hand[suit];
 // console.log(`suit value is ${suitValues}`);
  suitValues.push(value);
  hand[suit] = suitValues;
  return hand;
}

function welcomeMessage () {
  console.log("*-----------------------------------------------------*");
  console.log("|                                                     |");
  console.log("|            Wecome to Twenty-One!                    |");
  console.log("| First player closest to 21 without going over wins! |");
  console.log("|                                                     |");
  console.log("*-----------------------------------------------------*");
  addVerticalSpace();
  prompt("Ready to play?");
  addVerticalSpace();
  prompt("Press any key to continue.");
  readline.question();
}

function bust (playerTotal, dealerTotal) {
  if (playerTotal > 21 && dealerTotal <= 21) {
    addVerticalSpace();
    prompt (`You went over 21! The Dealer wins`);
    addVerticalSpace();
  } else if (playerTotal <= 21 && dealerTotal < playerTotal) {
    addVerticalSpace();
    prompt (`You won. The Dealer lost`);
    addVerticalSpace();
  } else  if ((playerTotal <= 21) && (dealerTotal > playerTotal )
  && dealerTotal <= 21) {
    addVerticalSpace();
    prompt (`You lost. The Dealer wins`);
    addVerticalSpace();
  } else  if ((playerTotal <= 21) && (dealerTotal > playerTotal )
  && dealerTotal > 21) {
    addVerticalSpace();
    prompt (`You won. The Dealer lost`);
    addVerticalSpace();
  } else {
    addVerticalSpace();
    prompt("It's a Tie!");
    addVerticalSpace();
  }
}

function calculateHand (playerHand) {
  let total = 0;
  let values = convertQueenJackKingAce (playerHand);
  let aces = checkForAces(values);

  //console.log(values);
  values.forEach(array => {
    total += array.reduce((sum, cardValue) => {
      //console.log(cardValue);
      if (typeof cardValue === "number") {
        sum += cardValue;
      }
      return sum;
    }, 0);
  });

  if (aces > 0 && total > 21) {
    total -= (aces * 10);
  }

  //console.log(`total is ${total}`);

  return total;
}

function checkForAces (values) {
  let value = [];
  let aceCount = 0;
  values.forEach(array => {
    array.forEach(element => value.push(element));
  });
  if (value.some(element => element === 11)) {
    aceCount = value.filter(number => number === 11).length;
  }
  return aceCount;
}

function convertQueenJackKingAce (playerHand) {
  return Object.values(playerHand)
    .filter(array => array.length > 0)
    .map(array => {
     // console.log(`Array is ${array}`);
      return array.map(value => {
        if (typeof value === "number") {
          return value;
        } else if ("JQK".includes(value[0])) {
          return JACK_QUEEN_KING_VALUE;
        } else {
          return ACE_VALUE;
        }
      });
    });
}


function drawCard (cardDeck, player) {
  let cardSuit = pickSuit(cardDeck);
  //console.log(cardSuit);
  let cardValue = pickValue (cardSuit, cardDeck);
  //console.log(cardValue);
  if (player === "human") {
    console.clear();
    prompt("You drew ");
    displayCard([cardSuit, cardValue]);
    addVerticalSpace();
    prompt("Hit any key to see your new hand");
    readline.question();

  } else if (player === "dealer") {
    console.clear();
    prompt("Dealer hits and draws: ");
    displayCard([cardSuit, cardValue]);
    prompt("Press enter to continue: ");
    readline.question();
  }
  return [cardSuit, cardValue];
}

function pickSuit (cardDeck) {
  let cardSuit;
  const suit = Object.keys(cardDeck);
  let randomSuitIndex = Math.floor(Math.random() * suit.length);
  cardSuit = suit[randomSuitIndex];
  //console.log(cardSuit);
  return cardSuit;
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

// eslint-disable-next-line max-statements
// eslint-disable-next-line max-lines-per-function
function displayCard (dealtCard) {
  clearCardArt(cardArt);
  let card = cardArt;
  let maxSpace = 10;
  let cardValue = String(dealtCard[CARD_VALUE_IN_ARRAY]).padStart((String(dealtCard[CARD_VALUE_IN_ARRAY]).length + maxSpace) / 2, " ").padEnd(maxSpace," ");
  let suit = dealtCard[0];
  card.stringTop += "*----------*";
  card.stringBorder1 += `| ${suit}     ${suit}  |`;
  card.stringBorder2 += "|          |";
  card.stringBorderMid += `|${cardValue}|`;
  card.stringBorderBottom += "|          |";
  card.stringBorderBottom2 += `| ${suit}     ${suit}  |`;
  card.stringBottom += `*----------*`;
  console.log(cardArt.stringTop);
  console.log(cardArt.stringBorder1);
  console.log(cardArt.stringBorder2);
  console.log(cardArt.stringBorderMid);
  console.log(cardArt.stringBorderBottom);
  console.log(cardArt.stringBorderBottom2);
  console.log(cardArt.stringBottom);
}

function displayHand (playerHand, player = "YOUR") {

  let deckArt = populateCardArt(playerHand);
  let total = `${player} HAND TOTAL = ${calculateHand(playerHand)}`;

  console.log(deckArt.stringTop);
  console.log(deckArt.stringBorder1);
  console.log(deckArt.stringBorder2);
  console.log(deckArt.stringBorderMid);
  console.log(deckArt.stringBorderBottom);
  console.log(deckArt.stringBorderBottom2);
  console.log(deckArt.stringBottom);
  console.log(total.padStart((total.length + deckArt.stringTop.length) / 2, " ").padEnd(deckArt.stringTop.length," "));
}

function clearCardArt (cardArt) {
  cardArt.stringTop = "";
  cardArt.stringBorder1 = "";
  cardArt.stringBorder2 = "";
  cardArt.stringBorderMid = "";
  cardArt.stringBorderBottom =  "";
  cardArt.stringBorderBottom2 =  "";
  cardArt.stringBottom = "";
}

function drawDealerCards (visibleCard) {
  let cardValue = visibleCard[CARD_VALUE_IN_ARRAY];
  let maxSpace = 10;
  cardValue = String(cardValue).padStart((String(cardValue).length + maxSpace) / 2, " ").padEnd(maxSpace," ");
  let suit = visibleCard[0];
  console.log("*----------**----------*");
  console.log(`| ${suit}     ${suit}  || ?     ?  |`);
  console.log("|          ||          |");
  console.log(`|${cardValue}||    ?     |`);
  console.log("|          ||          |");
  console.log(`| ${suit}     ${suit}  || ?     ?  |`);
  console.log(`*----------**----------*`);
  console.log("      DEALER CARDS   ");
  addVerticalSpace();

}

// eslint-disable-next-line max-lines-per-function
function populateCardArt (playerCards) {
  let card = cardArt;
  clearCardArt(card);
  let cards = Object.entries(playerCards);
  let maxSpace = 10;
  let suit;
  cards.forEach(array => {
    if (array[1].length > 0) {
      array[1].forEach(cardValue => {
        cardValue = String(cardValue).padStart((String(cardValue).length + maxSpace) / 2, " ").padEnd(maxSpace," ");
        suit = array[0];
        card.stringTop += "*----------*";
        card.stringBorder1 += `| ${suit}     ${suit}  |`;
        card.stringBorder2 += "|          |";
        card.stringBorderMid += `|${cardValue}|`;
        card.stringBorderBottom += "|          |";
        card.stringBorderBottom2 += `| ${suit}     ${suit}  |`;
        card.stringBottom += `*----------*`;
      });
    }
  });
  return cardArt;
}



function removeCardFromDeck (index, suit, suitValues, cardDeck) {
  //console.log(`remove card index = ${index}`);
  let newSuitValues = suitValues;
  newSuitValues.splice(index,1);
  cardDeck[suit] = newSuitValues;
}

function stayOrHit() {
  let answer;
  while (true) {
    addVerticalSpace();
    prompt("Do you want to hit (H) or Stay (S)");
    answer = readline.question().trim().toLowerCase();
    if (answer[0] === "s" || answer[0] === 'h' ) break;
  }
  return answer;
}

function playAgain() {
  let answer;
  while (true) {
    addVerticalSpace();
    prompt("Do you want to play again? Yes (Y) or No (N)");
    answer = readline.question().trim().toLowerCase();
    if (answer[0] === "y" || answer[0] === 'n' ) break;
  }
  return answer;
}



//console.log(dealerHand);
while (true) {
  console.clear();
  welcomeMessage();
  let playerTotal = 0;
  let dealerTotal = 0;
  const cardDeck = initializeDeck();
  let playerHand = initializeHand(cardDeck);
  let dealerHandandFirstCard = initializeHand(cardDeck, "dealer");
  let dealerHand = dealerHandandFirstCard[0];
  let dealerFirstCard = dealerHandandFirstCard[1];
  
  while (true) {
    console.clear();
    drawDealerCards(dealerFirstCard);
    displayHand(playerHand);

    playerTotal = calculateHand(playerHand);
    dealerTotal = calculateHand(dealerHand);


    if (stayOrHit() === "h") {

      let playerCard = drawCard(cardDeck, "human");
      addToHand(playerHand, playerCard[SUIT_LOCATION_IN_ARRAY],
        playerCard[CARD_VALUE_IN_ARRAY]);
      playerTotal = calculateHand(playerHand);

      if (playerTotal > 21) {
        console.clear();
        bust (playerTotal, dealerTotal);
        displayHand(playerHand);
        addVerticalSpace();
        displayHand(dealerHand, "DEALER");
        break;
      }

    } else {
      while (dealerTotal < 17) {
        let dealerCard = drawCard(cardDeck, "dealer");
        addToHand(dealerHand, dealerCard[SUIT_LOCATION_IN_ARRAY],
          dealerCard[CARD_VALUE_IN_ARRAY]);
        dealerTotal = calculateHand(dealerHand);
      }

      bust (playerTotal, dealerTotal);
      displayHand(dealerHand, "DEALER");
      displayHand(playerHand);
      break;
    }
  }
  if (playAgain() === "n") break;
}
