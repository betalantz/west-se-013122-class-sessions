const url = "http://localhost:3000/quotes"

// DOM selector && created elements


// Register event listeners


// Fetches
function fetchAllQuotes(){
    return fetch(url)
    .then(res => res.json())
}

// Rendering

// Event handler


// Intializer(s)
fetchAllQuotes().then(console.log)