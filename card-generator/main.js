let typeColors = {
    Normal: "C3BDBC",
    Dragon: "1C10AB",
    Fire: "FD5514",
    Water: "47A6D7",
    Grass: "32AB10",
    Electric: "EED232",
    Ice: "96DFF1",
    Fighting: "B2290D",
    Poison: "C58CFF",
    Flying: "8F50FF",
    Psychic: "FF64A1",
    Bug: "9BBA15",
    Rock: "9B8327",
    Ghost: "5F5878",
    Dark: "4C4A2A",
    Steel: "898877",
    Fairy: "DFC5E1",
    Ground: "C8A01E"
}

let pokeButton = document.getElementById("pokesubmit")

pokeButton.onclick = async function () {
    let pokemonInput = document.getElementById("pokename")
    let pokeName = pokemonInput.value.toLowerCase()
    getPokemon(pokeName) // change
    pokemonInput.value = "" // Reset input field

}

getPokemon(`${Math.floor(Math.random() * 1000)}`)

let pokeImg = ""
async function getPokemon(pokeName) {

    let API_URL = `https://pokeapi.co/api/v2/pokemon/${pokeName}`
    let res = await fetch(API_URL)
    let pokemon = await res.json()



    pokeImg = pokemon.sprites.other.home.front_default
    let pokeTypes = pokemon.types
    let pokeMoves = pokemon.abilities
    let pokeStats = pokemon.stats
    pokeName = pokemon.name
    updateCard(pokeName, pokeImg, pokeTypes, pokeMoves)
    updateStats(pokeStats)
}

let spanCollection = ""
let moveList = ""
function updateCard(pokeName, pokeImg, pokeTypes, pokeMoves) {
    let pName = document.getElementById("poketextname")
    let image = document.getElementById("image")
    let types = document.getElementById("types")
    let moves = document.getElementById("moves")

    resetPokemon(pName, image, types, moves) // Clear current values 

    pokeName = toCapital(pokeName) // Convert 1st to Capital letter
    pName.innerHTML = pokeName
    image.setAttribute("src", pokeImg) // Update image

    // collect spans



    // Iterate through the types array
    for (let i of pokeTypes) {
        let type = toCapital(i.type.name) // Define type with 1st Capital
        let newtype = document.createElement("SPAN")
        newtype.className = "typespan"
        newtype.style.background = "#" + typeColors[type]
        if (type === "Dragon" || type === "Dark") {
            newtype.style.color = "white"
        } else {
            newtype.style.color = "black"
        }


        newtype.innerHTML = type
        types.appendChild(newtype) // Append element with type to the cards

        spanCollection = newtype.parentNode.innerHTML

    }

    // Iterate through the moves array
    for (let i of pokeMoves) {
        let move = toCapital(i.ability.name) // Define type with 1st Capital
        let newmove = document.createElement("SPAN")

        newmove.innerHTML = move
        moves.appendChild(newmove)

        moveList = newmove.parentNode.innerHTML
    }
}

htmlcode.onclick = () => {
    copyHTML(spanCollection)


}

function copyHTML(spanList) {


    copiedtext.setAttribute("style", "display: inline; opacity: 1; transition: all .2s ease-in-out")
    setTimeout(clearText, 2000)
    function clearText() {
        copiedtext.setAttribute("style", "opacity: 0; transition: all .2s ease-in-out")
    }

    let pokeN = document.getElementById("poketextname").innerHTML

    let bars = document.getElementsByClassName("statbar")
    let barElements = []
    for (let i = 0; i < bars.length; i++) {

        barElements.push(bars[i].getAttribute("style"))
    }


    let codeHTML = `
    <div id="cardbg">
    <div id="card">

        <div id="imagediv">
            <img id="image" src="${pokeImg}">
        </div>

        <h2 id="poketextname">${pokeN}</h2>

        <div id="info">

            <div id="types">
            ${spanList}
            </div>

            <div id="moves">
            ${moveList}
            </div>

        </div>
        <div id="stats">
            <div class="statcontent">
                <span class="statext">HP</span>
                <div class="stat">
                    <div id="HP" class="statbar" style="${barElements[0]}"></div>
                </div>
            </div>

            <div class="statcontent">
                <span class="statext">ATT</span>
                <div class="stat">
                    <div id="ATT" class="statbar" style="${barElements[1]}"></div>
                </div>
            </div>
            <div class="statcontent">
                <span class="statext">DEF</span>
                <div class="stat">
                    <div id="DEF" class="statbar" style="${barElements[2]}"></div>
                </div>
            </div>

            <div class="statcontent">
                <span class="statext">S.ATT</span>
                <div class="stat">
                    <div id="S.ATT" class="statbar" style="${barElements[3]}"></div>
                </div>
            </div>

            <div class="statcontent">
                <span class="statext">S.DEF</span>
                <div class="stat">
                    <div id="S.DEF" class="statbar" style="${barElements[4]}"></div>
                </div>
            </div>

            <div class="statcontent">
                <span class="statext">SPD</span>
                <div class="stat">
                    <div id="SPD" class="statbar" style="${barElements[5]}"></div>
                </div>
            </div>
        </div>

    </div>

</div>
    
    `
    navigator.clipboard.writeText(codeHTML)
    console.log(codeHTML)
}




function updateStats(pokeStats) { // Max 255
    pokeStats[0].stat.name = "HP"
    pokeStats[1].stat.name = "ATT"
    pokeStats[2].stat.name = "DEF"
    pokeStats[3].stat.name = "S.ATT"
    pokeStats[4].stat.name = "S.DEF"
    pokeStats[5].stat.name = "SPD"

    for (let i of pokeStats) {
        let statbar = document.getElementById(i.stat.name)
        let size = (i.base_stat / 255) * 100
        statbar.setAttribute("style", `width: ${size}%; background-color: #5f0873;`)

    }

}

function resetPokemon(pName, image, types, moves) {
    pName.innerHTML = ""
    image.innerHTML = ""
    types.innerHTML = ""
    moves.innerHTML = ""
}



// Function to make 1st word capital
function toCapital(word) {
    word = word.charAt().toUpperCase() + word.slice(1)
    return word
}