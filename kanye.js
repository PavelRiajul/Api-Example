const loadQuotes = () => {
    fetch('https://api.kanye.rest')
    .then(res => res.json())
    .then(data => displayquote(data))
}
const displayquote = quote => {
    console.log(quote.quote)
    const quoteElement = document.getElementById('quote');
    quoteElement.innerText = quote.quote;

}