const quote = document.querySelector('.quote');
const quoteBtn = document.querySelector('.new_quoteBtn');
const author = document.querySelector('.author .authur_name');
const speechBtn = document.querySelector('.speech_btn');
const copyBtn = document.querySelector('.copy_btn');
// const twitterBtn = document.querySelector('.twitter_btn');

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
  // speechResult.voice = speechSynthesis.getVoices()[2]
  speechSynthesis.speak(speechResult)
}

const copyQuote = function () {
  navigator.clipboard.writeText(quote.textContent);
}

// const postQuote = function () {
//   const tweeterUrl = `https://twitter.com/intent/tweet?url=${quote.textContent}`;
//   window.open(tweeterUrl, '_blank');
// };

quoteBtn.addEventListener('click', getQuote);
speechBtn.addEventListener('click', speech);
copyBtn.addEventListener('click', copyQuote);
// twitterBtn.addEventListener('click', postQuote);