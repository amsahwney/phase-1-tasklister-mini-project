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
  // this element is a parent to hold both the text and the delete button
  const newTaskElement = document.createElement('li')
  // you have to create a separate child element just for the text so that when we edit the text it does not also affect the button
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
    // this tells the keyup listener event what key to listen for
      if (event.key === 'Enter') {
    // grab the new text
      const userEdit = newTaskEdit.value
    // then make the text element visible again
      newTaskElement.style.display = ''
    // then add the new text into the now visible text element JUST THE TEXT PART!  this will still preserve the old exit button 
      newTaskElement.firstChild.textContent = userEdit
    // FINALLY REMOVE THE ENTIRE DIV CREATED to contain the INPUT BOX (remove input box) so we can see our edits
      taskEditp.remove()
     }}


    newTaskEdit.addEventListener("keyup", enterEdit)

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
