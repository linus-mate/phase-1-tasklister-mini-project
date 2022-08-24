document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    toDoList(e.target.querySelector('#new-task-description').value);
    form.reset()
  })
});


function toDoList(lists){
  let li = document.createElement ("li")
  li.textContent = `{lists}`
  document.querySelector('#tasks').appendChild(li)

  let btn = document.createElement('button')
  btn.textContent = 'x'
  li.appendChild(btn)

  btn.addEventListener('click', handleDelete)
  
}

function handleDelete(e){
  e.target.parentNode.remove()
}