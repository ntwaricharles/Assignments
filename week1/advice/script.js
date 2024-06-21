document.addEventListener('DOMContentLoaded', populateQuote);

const quoteNumber = document.getElementById('quote-number');
const quote = document.getElementById('quote');
const quoteBtn = document.getElementById('generate-quote-btn');

async function populateQuote() {
    try {
        const response = await fetch('https://api.adviceslip.com/advice');
        if (!response.ok) {
            throw new Error('Network Error');
        }
        const data = await response.json();
        console.log(data);
        const slip = data.slip;
        quoteNumber.innerHTML = slip.id;
        quote.innerHTML = slip.advice;
    } catch (error) {
        console.error('Fetching Error:', error);
    }
}

quoteBtn.addEventListener('click', populateQuote);