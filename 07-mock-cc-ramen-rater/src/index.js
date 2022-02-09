// Global variables
const baseURL = "http://localhost:3000"

// DOM selectors
const menu = document.querySelector('#ramen-menu')
const detail = document.querySelector('#ramen-detail')

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
    console.log('ramenObj: ', ramenObj);
    const img = document.createElement('img')
    img.src = ramenObj.image
    menu.appendChild(img)
}

// Event handlers

// Initializers
getAllRamens().then(ramenArr => renderAllRamens(ramenArr))