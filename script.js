//Create array to store tasks
let tasks = []

//Add event listener to add tasks
document.getElementById('addTaskButton').addEventListener('click', function(){
//Saving text value from input box as a variable "taskInput"
    let taskInput = document.getElementById('taskInput').value
//If statement checking the truthy falsy of the variable
    if (taskInput){
//If its truthy it pushes the value to the last issue of the array
    tasks.push(taskInput)
//Makes it so the value for Task Input is nothing after the button is clicked
    document.getElementById('taskInput').value = ""
//function that isn't set up yet
    displayTasks()
    }
})

