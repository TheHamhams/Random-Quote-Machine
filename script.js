
const colors = ["#F94144", "#F3722C", "#F8961E", "#F9C74F", "#90BE6D", "#43AA8B", "#577590"]

const quotes = [['The face of a child can say it all, especially the mouth part.', 'Jack Handey'], ["Whenever you read a good book it's like the author is right there, in the room talking to you which is why I don't like to read good books", 'Jack Handey'], ["One thing a computer can do that most humans can't is be saealed up in a carboard box and sit in a warehouse.", 'Jack Handey'], ["My fake plants died because I did not pretend to water them.", "Mitch Hedberg"], ["I love blackjack, but I'm not addicted to gambling, I'm addicted to sitting in a semi circle", "Mitch Hedberg"], ["I wanted to buy a candle holder, but the store didn't have one. So I bought a cake.", "Mitch Hedberg"], ["Before you marry someone, you should first make them use a computer with slow Internet to see who they really are", "Will Ferrell"], ["Clothes make the man. Naked people have little or no influence in society", "Mark Twain"], ["I want my children to have all the things I couldn't afford. Then I want to move in with them.", "Phyllis Diller"], ["There is no sunrise so beautiful that it is worth waking me up to see it.", "Mindy Kaling"], ["My ability to turn good news into anxiety is rivaled only by my ability to turn anxiety into chin acne.", "Tina Fey"]];

let quote = document.getElementById("quote");
let author = document.getElementById("author")
const next = document.getElementById("new-quote")

const changeQuote = () => {
  let ranNum = Math.floor(Math.random()   * quotes.length)
  let ranCol = Math.floor(Math.random() * colors.length)
  let arr = quotes[ranNum]
  quote.innerHTML = arr[0]
  author.innerHTML = `- ${arr[1]}`
  document.body.style.backgroundColor = colors[ranCol]
  
};

next.onclick = changeQuote

let num = Math.floor(Math.random()   * quotes.length)
let color = Math.floor(Math.random() * colors.length)

quote.innerHTML = quotes[num][0];
author.innerHTML = `- ${quotes[num][1]}`
document.body.style.backgroundColor = colors[color]


