import './style.css'

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
// Example 1
// var telephone = {
//   origin: "home phone",
//   answer: function() {
//     console.log(`Hello, ${this.origin} called the function`);
//   }
// };

// telephone.answer();

// Example 2
// var telephone = {
//   origin: "home phone",
//   answer: function() {
//     console.log(`Hello, ${this.origin} called the function`);
//   }
// };

// answer = telephone.answer;
// answer();

// Example 3
// var telephone = {
//   answer: function() {
//     console.log(`Hello, ${this.origin} called the function`);
//   }
// };

// var cellphone = {
//   origin: "cell phone"
// };

// cellphone.answer = telephone.answer;
// cellphone.answer();

// Example 4
let telecomms = {
  origin: "telecomms",
  telephone: {
    origin: "home phone",
    answer: () => {
      console.log(`Hello, ${this} called the function`);
    }
  }

}

telecomms.telephone.answer();