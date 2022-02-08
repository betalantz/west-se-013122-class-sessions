document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('#create-task-form')
  const descriptionInput = document.querySelector("#insert")
  console.log(descriptionInput)
  const dateInput = document.createElement('input')
  console.log(dateInput)
  dateInput.type = "text"
  dateInput.name = "dueDate"
  dateInput.placeholder = "Enter Due Date"
  // debugger
  descriptionInput.appendChild(dateInput)

  form.addEventListener('submit', submitNewTask)
});

const submitNewTask = function(event){
  event.preventDefault()
  // const descriptionInput = document.querySelector('#new-task-description')
  let input = event.target.description.value
  let color = event.target.selectPriority.value
  let date = event.target.dueDate.value
  appendTask(input, color, date)
  event.target.description.value = ''
  event.target.dueDate.value = ''
  // event.target.reset()
}

const appendTask = function(input, color, date){

  // variable declaration, selectors, element creators
  const ul = document.querySelector('#list')
  const li = document.createElement('li')
  const deleteBtn = document.createElement('button')
  const editBtn = document.createElement('button')

  // assign value and attributes
  li.innerText = `${input} Due: ${date} `
  li.style.color = color
  deleteBtn.innerText = 'X'
  editBtn.innerText = "EDIT"

  //appending
  li.append(deleteBtn, editBtn)
  ul.appendChild(li)

  // event listeners
  deleteBtn.addEventListener('click', () => li.remove())
  editBtn.addEventListener('click', () => editForm(li, input))
}

const editForm = function(li, input){
  const form = document.createElement('form')
  const inputField = document.createElement('input')
  const submitBtn = document.createElement('button')

  inputField.type = 'text'
  inputField.name = 'editTask'
  inputField.placeholder = input

  submitBtn.type = 'submit'
  submitBtn.innerText = 'Change'

  form.append(inputField, submitBtn)
  li.append(form)

  form.addEventListener('submit', (e) => editTask(e, li))
}

const editTask = function(event, li){
  event.preventDefault()
  const deleteBtn = li.querySelector(':nth-child(1)')
  const editBtn = li.querySelector(':nth-child(2)')
  // debugger
  li.innerText = event.target.editTask.value
  li.append(deleteBtn, editBtn)
}



