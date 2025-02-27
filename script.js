//Create array to store tasks
let tasks = []

//Add event listener to add tasks
document.getElementById('addTaskButton').addEventListener('click', function () {
    //Saving text value from input box as a variable "taskInput"
    let taskInput = document.getElementById('taskInput').value
    //If statement checking the truthy falsy of the variable
    if (taskInput) {
        //If truthy  pushes the value to the last issue of the array
        tasks.push(taskInput)
        //Value for Task Input is wiped after the button is clicked
        document.getElementById('taskInput').value = ""
        //Updates the array
        displayTasks()

    }
}
)

//Function to display tasks inputted
function displayTasks() {
    //Grabbing the ul in the HTML
    let taskList = document.getElementById('taskList')
    //Clear all tasks when 1 is added
    taskList.innerHTML = ''
    //Loop through each task in the array and create a list item
    tasks.forEach((task, index) => {
        //Create a new <li> for each task
        let li = document.createElement('li')
        //Give that li element some Bootstrap
        li.classList.add(
            'list-group-item',
            'd-flex',
            'justify-content-between',
            'align-items-center'
        )

        //Set inner HTML of <li> tasktext with button and 
        li.innerHTML = `${task} <button class='btn btn-success btn-sm' onclick='removeTask(${index})'>√</button>`
        //Append new task to taskList
        taskList.appendChild(li)
    })
}

//Function that removes a task when checkmark is clicked
function removeTask(index) {
    //Remove task from array
    tasks.splice(index, 1)
    //Call the function to update the task list display
    displayTasks()
}

//Event listener for Clear All button
document.getElementById('clearTaskButton').addEventListener('click', function () {
    //Empty array
    tasks = []
    //Updates array
    displayTasks()
})


taskInput.addEventListener('keydown', function(event) {
    //if Enter button is pressed
    if (event.key === 'Enter') {
        let taskInput = document.getElementById('taskInput').value
        //If statement checking the truthy falsy of the variable
        if (taskInput) {
            //If truthy  pushes the value to the last issue of the array
            tasks.push(taskInput)
            //Value for Task Input is wiped after the button is clicked
            document.getElementById('taskInput').value = ""
            //Updates the array
            displayTasks()
    }}
});