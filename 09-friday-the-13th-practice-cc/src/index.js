// Global vars
const URL = "http://localhost:3000/movies"
let selectedMovie;

// DOM Selectors
const nav = document.querySelector('#movie-list')
const watchedBtn = document.querySelector("#watched")
const drops = document.querySelector("#amount")
const form = document.querySelector("#blood-form")
const bloodInput = document.querySelector("#blood-amount")
bloodInput.type = "number"

// Event listeners
watchedBtn.addEventListener('click', toggleWatched)
form.addEventListener('submit', addBlood)

// Fetchers
function getAllMovies(){
    return fetch(URL).then(res => res.json())
}

// Render Functions
function iterateMovies(movArr){
    // console.log('movArr: ', movArr);
    movArr.forEach(movObj => renderInNav(movObj))
}

function renderInNav(movObj){
    // console.log('movObj: ', movObj);
    const navImage = document.createElement('img')
    navImage.src = movObj.image
    // console.log('navImage: ', navImage);
    navImage.addEventListener('click', () => renderDetail(movObj))
    nav.appendChild(navImage)
}
 
function renderDetail(movObj){
    console.log('movObj: ', movObj);
    selectedMovie = movObj
    const detailImg = document.querySelector("#detail-image")
    const title = document.querySelector("#title")
    const year = document.querySelector("#year-released")
    const description = document.querySelector("#description")
    detailImg.src = movObj.image
    title.textContent = movObj.title
    year.textContent = movObj.release_year
    description.textContent = movObj.description
    let watchVal;
    movObj.watched ? watchVal = "Watched" : watchVal = "Unwatched"
    watchedBtn.textContent = watchVal
    drops.textContent = movObj.blood_amount
}


// Event Handlers

function toggleWatched(){
    selectedMovie.watched = !selectedMovie.watched
    // console.log('selectedMovie: ', selectedMovie.watched);
    let watchVal;
    selectedMovie.watched ? watchVal = "Watched" : watchVal = "Unwatched"
    watchedBtn.textContent = watchVal
}

function addBlood(ev){
    ev.preventDefault()
    // console.log('ev: ', ev);
    
    // console.log('bloodInput: ', bloodInput.value, typeof bloodInput.value);
    // const amount = parseInt(bloodInput.value)
    const amount = Number(bloodInput.value)
    selectedMovie.blood_amount += amount
    console.log('selectedMovie.blood_amount: ', selectedMovie.blood_amount);
    // drops.textContent = selectedMovie.blood_amount
    renderDetail(selectedMovie)
    form.reset()
}

// Initializers
getAllMovies().then(movArr => {
    iterateMovies(movArr)
    renderDetail(movArr[0])
})