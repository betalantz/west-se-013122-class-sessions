import './style.css'

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`

// Ex 1

// console.log("Hello")

// fetch('https://randomuser.me/api/')
//   .then( res => res.json() )
//   .then( data => {
//     console.log("Hi") 
//   })

// console.log("Sup?")


// Ex 2a

// function fetchData(){
//   let data = fetch('https://randomuser.me/api/')
//     .then( res => res.json() )
//     .then( res => res )
//   console.log(data)
// }

// fetchData()

// Ex 2b
// function fetchData(){
//   let data = fetch('https://randomuser.me/api/')
//     .then( res => res.json() )
//     .then( json => console.log(json) )
// }

// fetchData()

// Ex 2c
async function fetchData (){
  let data = await fetch('https://randomuser.me/api/')
  let res = await data.json()
  console.log(res)
}

// function fetchData(){
//   let data = fetch('https://randomuser.me/api/')
//     .then( res => res.json() )
//     .then( console.log )
// }
fetchData()

