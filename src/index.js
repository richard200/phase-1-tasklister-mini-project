document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let listen = document.querySelector('form')
  listen.addEventListener('submit', (e) => {
    e.preventDefault()
    handleTasks(e.target.task.value);
    

  })

   
})

function handleTasks(task){
  let p = document.createElement('p')
  p.textContent = task;
  document.querySelector('#list').appendChild(p)

}