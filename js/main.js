 const quotes = ["Two things are infinite: the universe and human stupidity; and I'm not sure about the universe." ,"A room without books is like a body without a soul." ,"You know you're in love when you can't fall asleep because reality is finally better than your dreams." ,"Be the change that you wish to see in the world." ,"If you tell the truth, you don't have to remember anything." ,"Always forgive your enemies; nothing annoys them so much." ,"Live as if you were to die tomorrow. Learn as if you were to live forever." ,"We accept the love we think we deserve" ,"Without music, life would be a mistake."]

// function generateQuote ()
// {
// const randomIndex = Math.floor(Math.random() * quotes.length);
// document.getElementById("quote").innerText = quotes[randomIndex];
// }
  
  
  let length = 0;
  while (quotes[length] !== undefined) {
    length++;
  }
  
  function generateRandomNumber(rodomNumber) {
    let random = new Date().getTime() % rodomNumber;
    return random;
  }
  
  function generateQuote() {
    const randomIndex = generateRandomNumber(length);
    const quoteDiv = document.getElementById("quote");
    quoteDiv.innerText = quotes[randomIndex];
  }