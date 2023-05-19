import { projects, toggleSort } from '/main-page/projects.js'
let maindiv = document.getElementById("container") // Select main div which contains the projects

let used_projects = projects

let filter = document.getElementById("filter") // Input type range
filter.value = 0

showProjects(filter.value) // Initialize

let sortButton = document.getElementById("sort")

sortButton.onclick = () => { // Button to sort projects

    used_projects = toggleSort() // Toggle dict with projects
    maindiv.innerHTML = "" // Clear projects from the main page
    showProjects(filter.value) // Show projects in new order
}

let rangevalue = document.getElementById("rangevalue") // Text to show the value

filter.oninput = (event) => { // Trigger when range changes
    rangevalue.innerHTML = filter.value
    maindiv.innerHTML = ""
    showProjects(filter.value)
}



// Main function to show projects
function showProjects(diffvalue) {

    for (let i in used_projects) {
        if (used_projects[i].diff >= diffvalue) {
            let eachdiv = document.createElement("DIV") // Create div for each project
            eachdiv.setAttribute("id", "eachdiv")
            eachdiv.setAttribute("onclick", `window.location='${used_projects[i].url}'`) // Add link to the project

            let eachtext = document.createElement("SPAN") // Create text for each project
            eachtext.innerHTML = used_projects[i].name

            let eachimage = document.createElement("IMG") // Create image for each project
            eachimage.setAttribute("src", used_projects[i].image)

            // Background depending on the project difficulty

            let bg = ""

            let difficulty = document.createElement("DIV")
            let eachdiff = document.createElement("DIV")

            if (used_projects[i].diff < 33) {
                bg = `linear-gradient(90deg, rgba(110,255,61,${used_projects[i].diff * 0.03}) 0%, rgba(241,255,0,${used_projects[i].diff * 0.01}) 33%, rgba(255,255,255,1) 100%)`
            }
            else if (used_projects[i].diff < 66 && used_projects[i].diff > 32) {
                bg = `linear-gradient(90deg,rgba(110,255,61,1) 0%, rgba(241,255,0,${used_projects[i].diff * 0.0152}) 50%, rgba(255,0,0,${used_projects[i].diff * 0.002}) 66%, rgba(255,255,255,1) 100%)`
            }
            else if (used_projects[i].diff > 66) {
                bg = `linear-gradient(90deg, rgba(110,255,61,1) 0%, rgba(241,255,0,1) 50%, rgba(255,0,0,${used_projects[i].diff * 0.006}) 100%)`
            }

            eachdiff.setAttribute("style", `background: ${bg};`)

            difficulty.append(eachdiff)
            difficulty.setAttribute("class", "difficulty")

            eachdiv.append(eachimage, difficulty, eachtext) // Append elements
            maindiv.appendChild(eachdiv)
        }

    }
}
