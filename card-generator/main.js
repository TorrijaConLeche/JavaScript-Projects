let pokeButton = document.getElementById("pokesubmit")

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

pokeButton.onclick = async function () {
    let pokeName = document.getElementById("pokename").value
    getPokemon(pokeName) // change

}
getPokemon(`${Math.floor(Math.random() * 1000)}`)
async function getPokemon(pokeName) {

    let API_URL = `https://pokeapi.co/api/v2/pokemon/${pokeName}`
    let res = await fetch(API_URL)
    let pokemon = await res.json()
    console.log(pokemon)

    let pokeImg = pokemon.sprites.other.home.front_default
    let pokeTypes = pokemon.types
    let pokeMoves = pokemon.abilities
    let pokeStats = pokemon.stats
    pokeName = pokemon.name
    updateCard(pokeName, pokeImg, pokeTypes, pokeMoves)
    updateStats(pokeStats)
}

function updateCard(pokeName, pokeImg, pokeTypes, pokeMoves) {
    let pName = document.getElementById("name")
    let image = document.getElementById("image")
    let types = document.getElementById("types")
    let moves = document.getElementById("moves")

    resetPokemon(pName, image, types, moves) // Clear current values 

    pokeName = toCapital(pokeName) // Convert 1st to Capital letter
    pName.innerHTML = pokeName
    image.setAttribute("src", pokeImg) // Update image

    // Iterate through the types array
    for (let i of pokeTypes) {
        let type = toCapital(i.type.name) // Define type with 1st Capital
        let newtype = document.createElement("SPAN")
        newtype.style.background = "#" + typeColors[type]
        if (type === "Dragon" || type === "Dark") {
            newtype.style.color = "white"
        } else {
            newtype.style.color = "black"
        }

        newtype.innerHTML = type
        types.appendChild(newtype)
    }

    // Iterate through the moves array
    for (let i of pokeMoves) {
        let move = toCapital(i.ability.name) // Define type with 1st Capital
        let newmove = document.createElement("SPAN")

        newmove.innerHTML = move
        moves.appendChild(newmove)
    }
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
        statbar.setAttribute("style", `width: ${size}%;`)
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