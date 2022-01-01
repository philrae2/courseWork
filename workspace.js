const readline = require('readline-sync');

const CHOICES = {
  rock: {
    abbrev: 'r',
    beats: ['scissors', 'lizard']
  },
  paper: {
    abbrev: 'p',
    beats: ['rock', 'spock']
  },
  scissors: {
    abbrev: 'sc',
    beats: ['paper', 'lizard']
  },
  lizard: {
    abbrev: 'l',
    beats: ['paper', 'spock']
  },
  spock: {
    abbrev: 'sp',
    beats: ['rock', 'scissors']
  }
};

const choicesFull = Object.keys(CHOICES);
const choicesAbbrev = Object.values(CHOICES).map(choice => choice.abbrev);
const choicesArr = Object.entries(CHOICES).map(([choice, value]) => {
  return [choice, value.abbrev];
});
console.log(choicesArr);

