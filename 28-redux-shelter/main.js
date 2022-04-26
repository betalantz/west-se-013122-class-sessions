import './style.css'
import { createStore } from 'redux'

// single source of truth
const initialState = {
  budget: 500,
  pets: [
    {id: 1, name: "Daisy", species: "dog"},
    {id: 2, name: "Felix", species: "cat"}
  ]
}

// pure reducer function
function reducer(state = initialState, action){
  switch (action.type){
    case "addTenDollars":
      return {
        ...state,
        budget: state.budget += 10
      }
      case "addMoney":
        return {
          ...state,
          budget: state.budget += action.payload
        }
      default:
        return state
      }
}


// console.log('state: ', state);
// const nextState = reducer(state, {type: "addTenDollars"})
// console.log('nextState: ', nextState);
// const thirdState = reducer(nextState, {type: "addDollars"})
// console.log('thirdState: ', thirdState);

// create a store
const store = createStore(reducer)
console.log('store: ', store);

// read the store: getState()
const state = store.getState();
console.log('state: ', state);
const petsUl = document.querySelector('#pets')
state.pets.forEach((p) => {
  const li = document.createElement('li')
  li.textContent = `Name: ${p.name} | Species: ${p.species}`
  petsUl.appendChild(li)
})

// update the store: dispatch()
// dispatch(action) -> reducer(state, action) -> newState
store.dispatch({type: "addTenDollars"})
store.dispatch({type: "addMoney", payload: 20})
console.log(store.getState())

// respond to store changes: subscribe()
store.subscribe(() => {
  const currState = store.getState()
  const budgetH3 = document.querySelector('#budget')
  budgetH3.textContent = `Budget: $${currState.budget}`
})

// trigger dispatch with DOM event
const add10 = document.querySelector('#add10')
add10.addEventListener('click', () => store.dispatch({type: "addTenDollars"}))