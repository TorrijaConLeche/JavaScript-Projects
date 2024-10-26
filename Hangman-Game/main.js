import { wordsEnglish, wordsSpanish, wordsSpecial, textSpanish, textEnglish } from "/Hangman-Game/words.js"
let words = wordsEnglish

let text = textEnglish // Load english messages asdefault

let userRestart = document.getElementById("userrestart") // Restart game button
let userSubmit = document.getElementById("usersubmit") // Submit word / letetr button

let wordText = document.getElementById("word")
let randomWord = words[Math.floor(Math.random() * words.length)] // Pick random word
let userWord = []

let usermessage = document.getElementById("usermessage")
let validmessage = document.getElementById("validmessage")

let userShow = ""
let fails = 0
let image = document.getElementById("hangimage")

// Words and letters already used by the player
let bannedWords = []
let bannedLetters = []
let bannedWordsText = document.getElementById("bannedwords")
let bannedLettersText = document.getElementById("bannedletters")

let lang = document.getElementById("lang")
let langmessage = document.getElementById("langmessage")
lang.setAttribute("src", "/Hangman-Game/content/uk.png")
langmessage.innerHTML = "Language: English"

let titletext = document.getElementById("titletext")
let cont = 0
titletext.onclick = () => {
    if (cont === 5) {
        cont = 0

        words = wordsSpecial
        restartGame()
        generateWord()
        document.querySelector("body").style.backgroundImage = "url('/Hangman-Game/content/monicalex.jpeg')"
        word.style.backgroundColor = "black"
    }
    else {
        cont += 1
    }
}
loadLang()


lang.onclick = () => {
    if (lang.getAttribute("src") === "/Hangman-Game/content/uk.png") {
        words = wordsSpanish
        text = textSpanish // Change language
        lang.setAttribute("src", "/Hangman-Game/content/spain.png")
        langmessage.innerHTML = "Idioma: Español"

    } else {
        words = wordsEnglish
        text = textEnglish
        lang.setAttribute("src", "/Hangman-Game/content/uk.png")
        langmessage.innerHTML = "Language: English"
    }
    generateWord()
    loadLang()
}


generateWord() // Initialize game

userSubmit.onclick = () => { // Check if the letter / word is correct

    let userInput = document.getElementById("userinput").value // Collect user input

    document.getElementById("userinput").value = "" // Reset <textarea> value
    validmessage.innerHTML = ""
    let wordArray = Array.from(randomWord) // Create array from the new word

    console.log(wordArray.toString())

    // Check if user introduced word of letter  
    if (userInput.length === randomWord.length) {
        checkWord(userInput, wordArray) // Function to check the word
    }

    else if (userInput.length === 1) {
        // Check letter: 
        checkLetter(wordArray, userInput)
    }
    else { // If the word is not valid because of length
        validmessage.innerHTML = text.validmsg
    }




}


function loadLang() {
    // LOAD LANGUAGE 
    let placeHder = document.getElementById("userinput")
    let texttried = document.querySelectorAll("h3")

    texttried[0].innerHTML = text.letters
    texttried[1].innerHTML = text.words

    placeHder.setAttribute("placeholder", text.placeholder)
    userRestart.innerHTML = text.restartbutton
    userSubmit.innerHTML = text.submitbutton

}


// Si la letra introducida por el usuario coincide con la posicion x del 
// array con la palabra, entonces la posicion x del array vacio (que muestra al jugador el progreso) toma el valor
// introducido por el usuario

function checkLetter(wordArray, userInput) {

    if (bannedLetters.includes(userInput)) { // Check if the letter had already been entered
        validmessage.innerHTML = text.repeatmsg
    }

    else {
        if (wordArray.includes(userInput)) { // Check if the word includes the user input letter 
            for (let i in wordArray, userWord) {
                if (userInput === wordArray[i]) {
                    userWord[i] = userInput
                }
            }


            if (userWord.toString() == wordArray.toString()) { // Check if the user won the game
                usermessage.innerHTML = text.winmsg
                document.body.style.backgroundColor = "red";

            }

            userShow = userWord.join(" ") // Update value showed to the user
            wordText.textContent = userShow // Show value to the user
           
        }
        else {
            userFails()
        }
        // Show letters already tried by the player
        bannedLetters.push(userInput)
        bannedLettersText.innerHTML = bannedLetters.join(" ")
    }
}

function checkWord(userInput, wordArray) {
    if (bannedWords.includes(userInput)) {

    } else {

    }
    if (userInput == randomWord) { // Check if input word matches the target word
        wordText.innerHTML = wordArray.join(" ") // Show the whole word //////////////////////////////////
        usermessage.innerHTML = "You won the game" // If it matches
        userSubmit.disabled = true
    }

    else {
        bannedWords.push(userInput)
        bannedWordsText.innerHTML = bannedWords.join(" ")
        userFails()
    }
}

function userFails() { // Execute when user fails
    fails += 1
    image.setAttribute("src", `/Hangman-Game/content/hang${fails}.gif`)

    if (fails == 6) {
        usermessage.innerHTML = text.losemsg + randomWord // User lost game
        wordText.textContent = randomWord
        userSubmit.disabled = true
    } else {
        usermessage.innerHTML = `${text.fails} ${fails}`
    }

}

userRestart.onclick = () => {
    generateWord()

}

function generateWord() { // Function to pick a random word and show length to the user
    // Restart game:
    restartGame()

    // Generate new word:
    randomWord = words[Math.floor(Math.random() * words.length)] // Pick new word


    // Create string to show the user new word length i.e (_ _ _ _)
    for (let i = 0; i < randomWord.length; i++) {
        if (randomWord[i] === " ") {
            userShow = userShow + " "

            userWord.push(" ")
        } else {
            userShow = userShow + "_ "
            userWord.push("_")
        }
        
        // Modify array with the new word length
    }

    wordText.innerHTML = userShow.toString() // Show _ to the user
}

function restartGame() {
    userShow = ""
    userWord = []
    fails = 0
    image.setAttribute("src", `/Hangman-Game/content/hang0.gif`) // Show 1st step image
    usermessage.innerHTML = `${text.fails} ${fails}`
    document.getElementById("userinput").value = ""
    bannedWords = []
    bannedLetters = []
    userSubmit.disabled = false
    bannedLettersText.innerHTML = ""
    bannedWordsText.innerHTML = ""
}