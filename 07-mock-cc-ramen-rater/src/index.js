// Global variables
const baseURL = "http://localhost:3000"

// DOM selectors
const menu = document.querySelector('#ramen-menu')
const detail = document.querySelector('#ramen-detail')
const rating = document.querySelector('#rating-display')
const comment = document.querySelector('#comment-display')


// Listeners

// Fetchers
function getAllRamens(){
    return fetch(baseURL + '/ramens')
    .then(r => r.json())
}

// Render functions
function renderAllRamens(ramensArr){
    ramensArr.forEach(ramenObj => renderOneMenu(ramenObj))
}

function renderOneMenu(ramenObj){
    // console.log('ramenObj: ', ramenObj);
    const img = document.createElement('img')

    img.src = ramenObj.image

    img.addEventListener('click', () => renderDetail(ramenObj))

    menu.appendChild(img)
}

function renderDetail(ramObj){
    console.log('ramObj: ', ramObj);
    detail.innerHTML = `
        <img class="detail-image" src="${ramObj.image}" alt="${ramObj.name}" />
        <h2 class="name">${ramObj.name}</h2>
        <h3 class="restaurant">${ramObj.restaurant}</h3>
    `
    rating.textContent = ramObj.rating
    comment.textContent = ramObj.comment
}
// Event handlers

// Initializers
getAllRamens().then(ramenArr => renderAllRamens(ramenArr))