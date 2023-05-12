
let mainDiv = document.getElementById("game")
let elements = mainDiv.querySelectorAll("div")

let imageList = []     // Array para almacenar la url de las imagenes y compararlas
let imageIds = []       // Array de ids que identifican cada img

let tries = 0 // Times user click on card
let fails = 0 // Times user select cards that dont match
let wins = 0

let failstext = document.getElementById("failstext")
let winstext = document.getElementById("winstext")


function createConfetti() {
    confetti.start() // 5000 is time that after 5 second stop the confetti ( 5000 = 5 sec)
    setTimeout(function () { confetti.stop() }, 1000); // 5000 is time that after 5 second stop the confetti ( 5000 = 5 sec)
}

for (let i = 0, len = elements.length; i < len; i++) {

    elements[i].onclick = checkImages

    function checkImages() {

        let image = elements[i].querySelector("img") // IMG ELEMENTS

        let imageAttr = image.getAttribute("src") // Store img attributes to compare
        let imgId = image.getAttribute("id")

        imageList.push(imageAttr)

        imageIds.push(imgId)

        console.log("A", imageList)

        image.setAttribute("style", "opacity: 1;")

        tries += 1
        console.log("Tries: ", tries)

        if (tries === 2) {

            if (imageList[0] === imageList[1]) {
                setWins()
            }
            else {
                setTimeout(setFails, 100)
                fails += 1
                failstext.innerHTML = `Fails: ${fails}`
            }
        }
    }
}

function setFails() {
    // Hide cards again and reset the game
    document.getElementById(imageIds[0]).setAttribute("style", "transition: all 1.2s ease-in-out; opacity: 0;")
    document.getElementById(imageIds[1]).setAttribute("style", "transition: all 1.2s ease-in-out; opacity: 0;")
    reset()
}

function setWins() {
    wins += 1
    if (wins === 3) { // 3 Number of card pairs // Must change if you add new cards
        createConfetti()
        winstext.innerHTML = `You Won!`
    }
    else {
        winstext.innerHTML = `Hits: ${wins}`
    }
    reset()
}

// RESET GAME VALUES
function reset() {
    imageList = []     // Array para almacenar la url de las imagenes y compararlas
    imageIds = []       // Array de ids que identifican cada img
    tries = 0 // Times user click on card

}


// RESTART GAME FUNCTIONS TO RANDOMIZE CARDS

let randomize = document.getElementById("randomize")

randomize.onclick = () => randomizeCards()

function randomizeCards() {

    let numArray = createArray() // Define Array of numbers

    for (let i = 0, len = elements.length; i < len; i++) {
        let image = elements[i].querySelector("img")
        image.setAttribute('src', `/Memory-Game/content/${numArray[i]}.png`)
        image.setAttribute('style', "opacity: 0;")
        console.log(image)
    }

    reset()
    winstext.innerHTML = "Hits: 0"
    failstext.innerHTML = "Fails: 0"
    fails = 0 // Times user select cards that dont match
    wins = 0

}


// Create array with 3 pairs of numbers i.e [1, 0, 2, 0, 2, 1]
function createArray() {
    let numArray = []
    while (numArray.length < 6) {
        let random = Math.floor(Math.random() * 3)
        let contador = countInArray(numArray, random)

        if (contador != 2) {
            numArray.push(random)
        }
    }
    return numArray
}


// Function to count concurrencies on the Array
function countInArray(array, what) {
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] === what) {
            count++;
        }
    }
    return count;
}

