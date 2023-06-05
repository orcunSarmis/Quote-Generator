let apiQuotes = [];

// Show new quote
function newQuote() {
	// Pick a random quote
	const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
	console.log(quote);
}

// Get quotes from API
async function getQuotes() {
	const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
	try {
		const response = await fetch(apiUrl);
		apiQuotes = await response.json();
		newQuote();
	} catch (error) {
		// Catch err here
	}
}
// On load
getQuotes();