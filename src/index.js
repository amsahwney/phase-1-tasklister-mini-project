// GLOBAL CONSTANTS //
 const taskBox = document.querySelector('#create-task-form') // was messageForm
 const taskInput = taskBox.querySelector('input') // was messageInput
 const todoList = document.querySelector('#list') // was messageBox

 // CALLBACK FUNCTIONS //
 //form submit callback function

 function handleNewTask(event) {
  //stop the page from refreshing
  event.preventDefault() 
  // get what the user types
  const userTask = taskInput.value

  //put the user input into the list
  const newTaskElement = document.createElement('li')
  const taskText = document.createElement('span');
  const newExitButton = document.createElement('button')
  taskText.textContent = userTask
  newExitButton.textContent = "x"
  todoList.append(newTaskElement)
  newTaskElement.append(taskText);
  newTaskElement.append(newExitButton)

  //clear out the input box
  taskBox.reset()

  //nest creating edit function
  function handleTaskEdit() {
  newTaskElement.style.display = 'none'
  const taskEditp = document.createElement('li')
  const newTaskEdit = document.createElement('input')
  newTaskEdit.value = userTask
  todoList.append(taskEditp)
  taskEditp.append(newTaskEdit)
    // nest a function within the nested function
     function enterEdit(event) {
      if (event.key === 'Enter') {
      const userEdit = newTaskEdit.value
    // first make the text visible again
      newTaskElement.style.display = ''
    // then add in the updated text while still preserving the exit button 
      newTaskElement.firstChild.textContent = userEdit
    // FINALLY REMOVE THE ENTIRE DIV CREATED to contain the INPUT BOX (remove input box)
      taskEditp.remove()
     }}


    newTaskEdit.addEventListener("keyup", enterEdit)
      // remove input 
      // newTaskElement.style.display = ''
      // add enter key event listener

  }

  taskText.addEventListener("click", handleTaskEdit)

 //nest button function inside task creation function 
  function handleExitButton() {
    //newExitButton.style.display = "none"
    //newTaskElement.style.display = "none"
    newExitButton.remove()
    newTaskElement.remove()
   }

  newExitButton.addEventListener("click", handleExitButton)
}





// EVENT HANDLERS //
//form submit
taskBox.addEventListener("submit", handleNewTask)
