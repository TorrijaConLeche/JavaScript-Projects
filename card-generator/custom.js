
// SELECT ALL INPUTS IN THE DOCUMENT
let allInputs = document.querySelectorAll("input")
console.log(allInputs)

for (let i = 0; i < allInputs.length; i++) {
    allInputs[i].addEventListener("input", updateStyles, false)
}


updateStyles()

function updateStyles() {

    // CARD 
    card.setAttribute("style", `
    background-color: ${bgcolor.value};
    box-shadow: ${boxshadowx.value}px ${boxshadowy.value}px
    ${boxshadowblur.value}px ${boxshadowsize.value}px ${boxshadowcolor.value};
    `)
    // CARD BG CONTAINER
    cardbg.setAttribute("style", `
    width: ${widthrange.value}%;
    border: ${bordersize.value}px solid ${bordercolor.value};
    border-radius: ${borderadius.value}px;
    `)
    // POKEMON NAME
    poketextname.setAttribute("style", `
    color: ${pokenamecolor.value};
    font-size: ${pokenamesize.value}px;
    `)

    // STAT BARS
    let statbars = document.getElementsByClassName("statbar")
    let statbarsBG = document.getElementsByClassName("stat")
    let statext = document.getElementsByClassName("statext")

    for (let i = 0; i < statbars.length; i++) {
        let wide = statbars[i].getAttribute("style")
        statbars[i].setAttribute("style", `
        ${wide}
        background-color: ${statbarcolor.value};
        `)

        let wideBG = statbarsBG[i].getAttribute("style")
        statbarsBG[i].setAttribute("style", `
        ${wideBG}
        background-color: ${statbgcolor.value};
        `)

        statext[i].setAttribute("style", `
        color: ${statextcolor.value};
        font-size: ${statnamesize.value}px;
        `)

    }



}


