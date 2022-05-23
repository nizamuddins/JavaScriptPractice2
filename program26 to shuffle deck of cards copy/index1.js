// program to shuffle the deck of cards declare card elements
const suits = ["Spades", "Diamonds", "Club", "Heart"];
const values = [
    "Ace",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "Jack",
    "Queen",
    "King"
];

// Creating  empty array for storing cards

let deck = [];

for (let i = 0; i < suits.length; i++) {

    for (let j = 0; j < values.length; j++) {
        let card = {
            Value: values[j],
            Suit: suits[i]
        }
        deck.push(card)
    }

}


// Shuffling the Cards

for(let i=0;i<deck.length;i++){

let j= Math.floor(Math.random()*deck.length)

let temp = deck[i];
deck[i] = deck[j];
deck[j] = temp;



}


for(let i=0;i<5;i++){

console.log(`${deck[i].Value} of ${deck[i].Suit}`);


}
