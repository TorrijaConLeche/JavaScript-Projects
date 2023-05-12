const projects = {
    1: {
        name: "To Do App",
        image: "/main-page/content/to-do-app.png",
        url: "/To-Do-App"
    },
    2: {
        name: "Vowel Counter",
        image: "/main-page/content/vowel-counter.png",
        url: "/Vowel-Counter"
    },
    3: {
        name: "Memory Game",
        image: "/main-page/content/memory-game.png",
        url: "/Memory-Game"
    },
    4: {
        name: "Coming Soon",
        image: "/main-page/content/soon.jpg",
        url: "/soon"
    },
    5: {
        name: "Coming Soon",
        image: "/main-page/content/soon.jpg",
        url: "/soon"
    },
    6: {
        name: "Coming Soon",
        image: "/main-page/content/soon.jpg",
        url: "/soon"
    },
}

let maindiv = document.getElementById("container") // Select main div which contains the projects

console.log(maindiv)



for (let i in projects) {

    let eachdiv = document.createElement("DIV") // Create div for each project
    eachdiv.setAttribute("id", "eachdiv")
    eachdiv.setAttribute("onclick", `window.location='${projects[i].url}'`) // Add link to the project

    let eachtext = document.createElement("SPAN") // Create text for each project
    eachtext.innerHTML = projects[i].name

    let eachimage = document.createElement("IMG") // Create image for each project
    eachimage.setAttribute("src", projects[i].image)

    eachdiv.append(eachimage, eachtext) // Append elements
    maindiv.appendChild(eachdiv)
}