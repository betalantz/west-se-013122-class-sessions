// Global vars
const URL = "http://localhost:3000/movies"

// DOM Selectors
const nav = document.querySelector('#movie-list')


// Event listeners
const watchedBtn = document.querySelector("#watched")
const drops = document.querySelector("#amount")
console.log('drops: ', drops);

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
    nav.appendChild(navImage)
}
 
function renderDetail(movObj){
    console.log('movObj: ', movObj);

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

// Initializers
getAllMovies().then(movArr => {
    iterateMovies(movArr)
    renderDetail(movArr[0])
})