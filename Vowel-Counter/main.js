
const button = document.getElementById("usersubmit")

button.onclick = () => vowelCounter()

function vowelCounter() {

    // Remove last Summary
    clearSummary()

    // Create dictionary to store the number of times each vowel is repeated
    let vowels = {
        a: 0,
        e: 0,
        i: 0,
        o: 0,
        u: 0
    }

    let text = document.getElementById("usertext").value
    // Remove empty spaces
    text = text.trim().toLowerCase()
    // Check user input is not empty


    let errormsg = document.getElementById("errormsg")
    // Show / Hide error message
    if (text === "") {
        errormsg.setAttribute("style", "display: block")
        return
    } else {
        errormsg.setAttribute("style", "display: none;")
    }







    // Create array with each char from user input
    let textarray = Array.from(text)
    // Iterate array of letters and +1 the value on the dict
    for (let i of textarray) {
        if (i === "a") {
            vowels.a += 1
        }
        else if (i === "e") {
            vowels.e += 1
        }
        else if (i === "i") {
            vowels.i += 1
        }
        else if (i === "o") {
            vowels.o += 1
        }
        else if (i === "u") {
            vowels.u += 1
        }
    }

    // Select div element which contains the summary
    const content = document.getElementById("content")

    // Table
    const resultsTable = document.createElement("TABLE")
    const rowTR = document.createElement("TR")
    const rowVowel = document.createElement("TH")
    const rowNumber = document.createElement("TH")

    rowVowel.innerHTML = "Vowel"
    rowNumber.innerHTML = "Repeats"

    rowTR.appendChild(rowVowel)
    rowTR.appendChild(rowNumber)

    resultsTable.appendChild(rowTR)

    let total = 0
    for (let v in vowels) {

        const resultsTR = document.createElement("TR")

        const resultsVowel = document.createElement("TD")
        const resultsNumber = document.createElement("TD")

        resultsVowel.innerHTML = v
        resultsNumber.innerHTML = vowels[v]

        resultsTR.append(resultsVowel, resultsNumber)
        resultsTable.appendChild(resultsTR)
        total = vowels[v] + total
    }

    // Total Vowels
    const totalTR = document.createElement("TR")

    const totalTD = document.createElement("TD")
    const totalNumer = document.createElement("TD")

    totalTD.innerHTML = "Total"
    totalNumer.innerHTML = total
    totalTR.setAttribute("style", "font-weight: 700; background-color: rgb(217, 128, 98);")
    totalTR.append(totalTD, totalNumer)

    resultsTable.appendChild(totalTR)

    content.appendChild(resultsTable)




    // Remove user input from textarea
    document.getElementById("usertext").value = ""

}

function clearSummary() {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
}