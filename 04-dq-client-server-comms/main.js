import './style.css'

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`


// Ex 1

// const url = "https://data.cityofnewyork.us/api/views/p94q-8hxh" // CityBike Data from data.gov
// const data = fetch(url)

// console.log(data) // Promise {<pending>}

// Ex 2
// const url = "https://data.cityofnewyork.us/api/views/p94q-8hxh" // CityBike Data from data.gov
// fetch(url).then(data => console.log(data))
// // Response {type: "cors", url: "https://data.cityofnewyork.us/api/views/p94q-8hxh", redirected: false, status: 200, ok: true, …}

// Ex 3
// const url = "https://data.cityofnewyork.us/api/views/p94q-8hxh" // CityBike Data from data.gov
// fetch(url)
//   .then(function(response){
//     return response.json()
//   }).then(console.log)
// {id: "p94q-8hxh", name: "Citi Bike Live Station Feed (JSON)", attribution: "CitiBike", attributionLink: "http://citibikenyc.com/stations/json", averageRating: 0, …}```

// Ex 4

const url = "https://data.cityofnewyork.us/api/views/p94q-8hxh" // CityBike Data from data.gov

function getJSON(url){
  return fetch(url)
  .then(response => response.json())
}

getJSON(url).then(console.log)

// {id: "p94q-8hxh", name: "Citi Bike Live Station Feed (JSON)", attribution: "CitiBike", attributionLink: "http://citibikenyc.com/stations/json", averageRating: 0, …}``