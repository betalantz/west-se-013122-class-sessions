const url = "http://localhost:3000/quotes"

// DOM selector && created elements
const list = document.querySelector('#quote-list')
const newForm = document.querySelector('#new-quote-form')
const hr = document.querySelector('hr')
const sorter = document.createElement('button')

sorter.innerText = "Sort by Author"
sorter.classList.add("btn", "btn-primary")
hr.prepend(sorter)

// Register event listeners
newForm.addEventListener('submit', handleNewQuote)
sorter.addEventListener('click', toggleSort)

// Fetches
function fetchAllQuotes(){
    return fetch(url)
    .then(res => res.json())
}

// Rendering

function renderAllQuotes(quotesArr, sort = false){
    list.innerHTML = ''
    if (sort) {
        const sorted = quotesArr.sort((quoteA, quoteB) => {
            if (quoteA.author < quoteB.author) return -1;
            if (quoteA.author > quoteB.author) return 1;
            if (quoteA.author = quoteB.author) return 0;
        })
        sorted.forEach(quote => renderOneQuote(quote))
    } else {
        quotesArr.forEach(quote => renderOneQuote(quote))
    }
}

function renderOneQuote(quoteObj, existingLi = null){ 
    // const li = document.createElement('li')
    const li = existingLi ? existingLi : document.createElement('li')
    li.innerHTML = `
        <blockquote class="blockquote">
            <p class="mb-0">${quoteObj.quote}</p>
            <footer class="blockquote-footer">${quoteObj.author}</footer>
            <br>
            <button class='btn-success'>Likes: <span>${quoteObj.likes}</span></button>
            <button class='btn-danger'>Delete</button>
            <button class='btn-outline-info'>Edit</button>
         </blockquote>
    `
    // debugger
    li.classList.add("quote-card")

    const deleteBtn = li.querySelector('.btn-danger')
    const likeBtn = li.querySelector('.btn-success')
    const editBtn = li.querySelector('.btn-outline-info')

    deleteBtn.addEventListener('click', () => li.remove())
    likeBtn.addEventListener('click', () => handleAddLike(li))
    editBtn.addEventListener('click', () => showEditForm(li, quoteObj))

    if (!existingLi) {list.appendChild(li)}
}

// Event handler

function handleNewQuote(e){
    e.preventDefault()
    const quote = e.target.quote.value
    const author = e.target.author.value
    console.log('quote: ', quote);
    // const newQuote = {
    //     quote: quote,
    //     author: author,
    //     likes: 0
    // }
    const newQuote = {
        quote,
        author,
        likes: 0
    }
    renderOneQuote(newQuote)
    e.target.reset()
}

function handleAddLike(li){
    const likeSpan = li.querySelector('span')
    const likes = parseInt(likeSpan.textContent)
    likeSpan.textContent = likes + 1
}

function showEditForm(li, quoteObj){
    console.log('quoteObj: ', quoteObj);
    const form = document.createElement('form')
    const input = document.createElement('textarea')
    const submitBtn = document.createElement('button')

    input.name = 'updatedQuote'
    input.type = 'text'
    input.value = quoteObj.quote
    submitBtn.type = 'submit'
    submitBtn.innerText = 'Update Quote'

    form.append(input, submitBtn)
    li.appendChild(form)

    form.addEventListener('submit', (e) => handleUpdate(e, li, quoteObj))

}

function handleUpdate(e, li, quoteObj){
    e.preventDefault()
    const quote = e.target.updatedQuote.value
    // console.log('quote: ', quote);
    const updatedQuote = {
        quote,
        author: quoteObj.author,
        likes: quoteObj.likes
    }
    renderOneQuote(updatedQuote, li)
    // const para = li.querySelector('p')
    // para.innerText = quote
    // e.target.remove()
}

function toggleSort(){
    if (sorter.innerText.includes("Author")) {
        sorter.innerText = "Unsort"
        fetchAllQuotes().then(quotesArr => renderAllQuotes(quotesArr, true))
    } else {
        sorter.innerText = "Sort By Author"
        fetchAllQuotes().then(renderAllQuotes)
    }
}


// Intializer(s)
// fetchAllQuotes().then(arr => renderAllQuotes(arr))
fetchAllQuotes().then(renderAllQuotes)