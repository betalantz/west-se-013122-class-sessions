const url = "http://localhost:3000/quotes"

// DOM selector && created elements
const list = document.querySelector('#quote-list')

// Register event listeners


// Fetches
function fetchAllQuotes(){
    return fetch(url)
    .then(res => res.json())
}

// Rendering

function renderAllQuotes(quotesArr){
    quotesArr.forEach(renderOneQuote)
}

function renderOneQuote(quoteObj){
    console.log('quoteObj: ', quoteObj);
    const li = document.createElement('li')
    li.innerHTML = `
        <blockquote class="blockquote">
            <p class="mb-0">${quoteObj.quote}</p>
            <footer class="blockquote-footer">${quoteObj.author}</footer>
            <br>
            <button class='btn-success'>Likes: <span>${quoteObj.likes}</span></button>
            <button class='btn-danger'>Delete</button>
         </blockquote>
    `
    li.classList.add("quote-card")
    list.appendChild(li)
}

// Event handler


// Intializer(s)
// fetchAllQuotes().then(arr => renderAllQuotes(arr))
fetchAllQuotes().then(renderAllQuotes)