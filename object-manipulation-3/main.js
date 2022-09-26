console.log('Lodash is loaded:', typeof _ !== 'undefined');

var names = ['Tom', 'Lee', 'Jane', 'Mee'];
var players = [];
var rank = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
var suit = ['clubs', 'diamonds', 'hearts', 'spades'];
var deck = [];
var shuffledDeck = null;

function createPlayers(names) {
  for (var i = 0; i < names.length; i++) {
    var player = {
      name: names[i],
      hand: [],
      score: 0
    };
    players.push(player);
  }
}

function createDeck() {
  for (var i = 0; i < suit.length; i++) {
    for (var k = 0; k < rank.length; k++) {
      var card = {
        suit: suit[i],
        rank: rank[k]
      };
      deck.push(card);
    }
  }
}

function shuffleDeck() {
  shuffledDeck = _.shuffle(deck);
  return shuffledDeck;
}

function dealCards(players) {
  var card = 0;
  for (var i = 0; i < players.length; i++) {
    players[i].hand.push(shuffledDeck[card]);
    card++;
    players[i].hand.push(shuffledDeck[card]);
    card++;
  }
}

function calculateScore(players) {
  for (var i = 0; i < players.length; i++) {
    for (var k = 0; k < players[i].hand.length; k++) {
      players[i].hand[k].rank === 'Ace'
        ? players[i].score += 11
        : (players[i].hand[k].rank === 'Jack' ||
        players[i].hand[k].rank === 'Queen' ||
        players[i].hand[k].rank === 'King')
            ? players[i].score += 10
            : players[i].score += players[i].hand[k].rank;
    }
  }
}

function findWinner() {
  var winner = players[0];
  for (var i = 0; i < players.length; i++) {
    if (players[i].score > winner.score) {
      winner = players[i];
    }
  }
  console.log(`The winner is ${winner.name} with the highest score of ${winner.score}!`);
  return winner.name;
}

createPlayers(names);
createDeck();
shuffleDeck();
dealCards(players);
calculateScore(players);
findWinner();
