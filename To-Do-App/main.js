// Formulario con un campo para agregar nuevas tareas
// Cada tarea tendra un boton para marcar la tarea como completado y otro para eliminarla

const button = document.getElementById("addtask")
button.onclick = () => addTask()

const tasklist = document.getElementById("tasklist")

function addTask() {

    // Collect input value (task)
    let task = document.getElementById("newtask").value

    // Create div for each task
    let newTaskDiv = document.createElement("DIV")

    // Create child items
    let newTaskDelete = document.createElement("button")
    let newTaskText = document.createElement("H1")
    let taskImg = document.createElement("img")

    // Damos un ID identificativo al DIV
    newTaskDiv.setAttribute("id", task)

    // Creamos un nodo de texto y se lo agregamos al h1
    newTaskText.innerHTML = task
    newTaskDelete.innerText = "Delete Task"

    // Delete task button
    newTaskDelete.onclick = function () { newTaskDelete.parentElement.remove() };

    taskImg.setAttribute("src", "./To-Do-App/unchecked.png") // Default img is unchecked.png
    newTaskDiv.setAttribute("style", "box-shadow: 6px 6px red") // Default Container color is red
    // Toggle checked and unchecked img and style
    taskImg.onclick = function () {
        let imgAtrib = taskImg.getAttribute("src")
        let newAtrib = imgAtrib == "./To-Do-App/checked.png" ? "./To-Do-App/unchecked.png" : "./To-Do-App/checked.png"
        let divStyle = imgAtrib == "./To-Do-App/checked.png" ? "box-shadow: 6px 6px red" : "box-shadow: 6px 6px lightgreen"
        taskImg.setAttribute("src", newAtrib)
        newTaskDiv.setAttribute("style", divStyle)
    }

    // Append elements to task DIV
    newTaskDiv.append(taskImg, newTaskText, newTaskDelete)

    // Agregamos el elemento item al elemento contenedor
    tasklist.appendChild(newTaskDiv)

}
