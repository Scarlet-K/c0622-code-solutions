console.log('Lodash is loaded:', typeof _ !== 'undefined');

var players = [
  {
    name: 'Tom',
    hand: []
  },
  {
    name: 'Lee',
    hand: []
  },
  {
    name: 'Jane',
    hand: []
  },
  {
    name: 'Mee',
    hand: []
  }
];

// function createPlayers() {

// }

var deck = [
  { rank: 'Ace', suit: 'clubs' }, { rank: 2, suit: 'clubs' }, { rank: 3, suit: 'clubs' },
  { rank: 4, suit: 'clubs' }, { rank: 5, suit: 'clubs' },
  { rank: 6, suit: 'clubs' }, { rank: 7, suit: 'clubs' },
  { rank: 8, suit: 'clubs' }, { rank: 9, suit: 'clubs' },
  { rank: 10, suit: 'clubs' }, { rank: 'Jack', suit: 'clubs' },
  { rank: 'Queen', suit: 'clubs' }, { rank: 'King', suit: 'clubs' },
  { rank: 'Ace', suit: 'diamonds' }, { rank: 2, suit: 'diamonds' }, { rank: 3, suit: 'diamonds' },
  { rank: 4, suit: 'diamonds' }, { rank: 5, suit: 'diamonds' },
  { rank: 6, suit: 'diamonds' }, { rank: 7, suit: 'diamonds' },
  { rank: 8, suit: 'diamonds' }, { rank: 9, suit: 'diamonds' },
  { rank: 10, suit: 'diamonds' }, { rank: 'Jack', suit: 'diamonds' },
  { rank: 'Queen', suit: 'diamonds' }, { rank: 'King', suit: 'diamonds' },
  { rank: 'Ace', suit: 'hearts' }, { rank: 2, suit: 'hearts' }, { rank: 3, suit: 'hearts' },
  { rank: 4, suit: 'hearts' }, { rank: 5, suit: 'hearts' },
  { rank: 6, suit: 'hearts' }, { rank: 7, suit: 'hearts' },
  { rank: 8, suit: 'hearts' }, { rank: 9, suit: 'hearts' },
  { rank: 10, suit: 'hearts' }, { rank: 'Jack', suit: 'hearts' },
  { rank: 'Queen', suit: 'hearts' }, { rank: 'King', suit: 'hearts' },
  { rank: 'Ace', suit: 'spades' }, { rank: 2, suit: 'spades' }, { rank: 3, suit: 'spades' },
  { rank: 4, suit: 'spades' }, { rank: 5, suit: 'spades' },
  { rank: 6, suit: 'spades' }, { rank: 7, suit: 'spades' },
  { rank: 8, suit: 'spades' }, { rank: 9, suit: 'spades' },
  { rank: 10, suit: 'spades' }, { rank: 'Jack', suit: 'spades' }
];

// var rank = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 'Jack', 'Queen', 'King'];
// var suit = ['clubs', 'diamonds', 'hearts', 'spades'];

// function createDeck() {

// }

var shuffledDeck = _.shuffle(deck);
console.log(shuffledDeck);

// Each player receives 2 cards that are unique
function dealCards() {
  var card = 0;
  for (var i = 0; i < players.length; i++) {
    players[i].hand.push(shuffledDeck[card]);
    card++;
    players[i].hand.push(shuffledDeck[card]);
    card++;
    // findWinner();
  }
}

// function findWinner() {
//   if (players[i].hand[i] === )
// }

dealCards();

console.log(players);
