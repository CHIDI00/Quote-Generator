const quote = document.querySelector('.quote');
const quoteBtn = document.querySelector('.new_quoteBtn');
const author = document.querySelector('.author .authur_name');
const speechBtn = document.querySelector('.speech_btn');
const copyBtn = document.querySelector('.copy_btn');

window.addEventListener('load', () => {
  fetch(`https://api.quotable.io/random`)
    .then(response => response.json())
    .then(result => {
      quote.textContent = result.content;
      author.textContent = result.author;
    });
});

const getQuote = function () {
  quoteBtn.textContent = 'Loading...';
  fetch(`https://api.quotable.io/random`)
    .then(response => response.json())
    .then(result => {
      quote.textContent = result.content;
      author.textContent = result.author;
      quoteBtn.textContent = 'New Quote';
    });
};

const speech = function() {
  let speechResult = new SpeechSynthesisUtterance(`${quote.textContent} by ${author.textContent}`);
  speechSynthesis.speak(speechResult)
}

const copyQuote = function () {
  navigator.clipboard.writeText(quote.textContent);
}


quoteBtn.addEventListener('click', getQuote);
speechBtn.addEventListener('click', speech);
copyBtn.addEventListener('click', copyQuote);