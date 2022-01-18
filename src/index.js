document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {e
  e.preventDefault()
  handleToDo(e.target['new-task-description'].value)
  console.log(e.target['new-task-description'].value)
    form.reset()
  })
});

function handleToDo(todo){
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'X'
  p.textContent =  `${todo} `
  p.appendChild(btn)
  document.querySelector('#list').appendChild(p)
}

function handleDelete(e) {
  e.target.parentNode.remove()
}

// As a user, I should be able to type a task into the input field.
// As a user, I should be able to click some form of a submit button.
// As a user, I expect to see the task string that I provided appear in the DOM after the submit button has been activated.


