// Global variables
const baseURL = "http://localhost:3000"
// const ramensMemo = []

// DOM selectors
const menu = document.querySelector('#ramen-menu')
const detail = document.querySelector('#ramen-detail')
const rating = document.querySelector('#rating-display')
const comment = document.querySelector('#comment-display')
const form = document.querySelector('#new-ramen')
const edit = document.querySelector('#edit-ramen')

// Listeners
form.addEventListener('submit', e => handleAddRamen(e))
edit.addEventListener('submit', e => handleEditRating(e))

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
    const div = document.createElement('div')
    const img = document.createElement('img')
    const btn = document.createElement('button')

    img.src = ramenObj.image
    btn.textContent = 'X'
    btn.style.backgroundColor = 'red'
    btn.style.color = 'white'

    div.append(img, btn)

    img.addEventListener('click', () => renderDetail(ramenObj))
    btn.addEventListener('click', () => div.remove())

    menu.appendChild(div)
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
    edit.dataset.id = ramObj.id
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

function handleEditRating(e){
    e.preventDefault()
    rating.textContent = e.target.rating.value
    comment.textContent = e.target["new-comment"].value
    e.target.reset()
}

// Initializers
getAllRamens().then(ramenArr => {
    renderAllRamens(ramenArr)
    renderDetail(ramenArr[0])
    // ramensMemo = ramenArr
})


// getOneRamen(1).then(ramenObj => renderDetail(ramenObj))