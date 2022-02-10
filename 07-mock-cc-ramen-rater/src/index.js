// Global variables
const baseURL = "http://localhost:3000"

// DOM selectors
const menu = document.querySelector('#ramen-menu')
const detail = document.querySelector('#ramen-detail')
const rating = document.querySelector('#rating-display')
const comment = document.querySelector('#comment-display')
const form = document.querySelector('#new-ramen')

// Listeners
form.addEventListener('submit', e => handleAddRamen(e))

// Fetchers
function getAllRamens(){
    return fetch(baseURL + '/ramens')
    .then(r => r.json())
}

function getOneRamen(id){
    return fetch(baseURL + `/ramens/${id}`)
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
function handleAddRamen(e){
    e.preventDefault()
    console.log('e: ', e.target);
    console.dir(e.target)
    const name = e.target.name.value
    const restaurant = e.target.restaurant.value
    const image = e.target.image.value
    const rating = e.target.rating.value
    const comment = e.target["new-comment"].value
    const newRamObj = {
        name,
        image,
        restaurant,
        rating,
        comment
    }
    renderOneMenu(newRamObj)
    // form.reset()
    e.target.reset()
}

// Initializers
getAllRamens().then(ramenArr => {
    renderAllRamens(ramenArr)
    renderDetail(ramenArr[0])
})


// getOneRamen(1).then(ramenObj => renderDetail(ramenObj))