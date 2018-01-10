// Create the cards:

function Card(value, name, suit) {
    this.value = value;
    this.name = name;
    this.suit = suit;
}

function Deck() {
    this.deck = [];

    this.create_deck = function() {
        var names = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
        var suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];

        for (var s = 0; s < suits.length; s++) {
            for (var n = 0; n < names.length; n++) {
                this.deck.push(new Card(n + 1, names[n], suits[s]));
            }
        }
        return this;
    }


    this.shuffle = function() {
        for (var i = 0; i < this.deck.length; i++) {
            var randIdx = Math.floor(Math.random() * 52);
            var temp = this.deck[i];
            this.deck[i] = this.deck[randIdx];
            this.deck[randIdx] = temp;
        }
        for (var i = 0; i < this.deck.length; i++) {
            console.log(this.deck[i])
        }
        return this;
    }

    this.deal = function() {

        if (this.deck.length = 0) {
            return ("You have no more cards left in your deck!")
        } else {
            let card1 = this.deck.pop();
            return card1;

        }
    }

}


deck = new Deck();
deck1 = deck.create_deck();
deck1 = deck1.shuffle();
// console.log(deck1);
card1 = deck1.shuffle().deal();
console.log(card1);



// function Players(name) {
// this.name = name;
// this.pl_hand = [];
// this.pl_deal = function() {
//     var card = deal();
//         (this.pl_hand).push(card);
//         return card;
//     }
// }

// var p1 = new Players("Mike");
// deal();
// console.log(p1.pl_hand[0]);