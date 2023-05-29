
// SELECT ALL INPUTS IN THE DOCUMENT
let allInputs = document.querySelectorAll("input")

for (let i = 0; i < allInputs.length; i++) {
    allInputs[i].addEventListener("input", updateStyles, false)
}


updateStyles()
// Create var to store current styles and show them to the user


// Code copy to clipboard
csscode.onclick = () => {
    copyCSS()
}

function copyCSS() {
    let codeCSS = `
body {
    background: radial-gradient(50% 0%, rgba(1, 3, 76, 0.982) 1%, rgb(21, 23, 42) 50%);
    color: rgb(221, 221, 221);
    display: flex;
    flex-direction: column;
    place-items: center;
    font-family: system-ui;
}

#card {
    background-color: ${bgcolor.value};
    box-shadow: ${boxshadowx.value}px ${boxshadowy.value}px ${boxshadowblur.value}px ${boxshadowsize.value}px ${boxshadowcolor.value};
    width: 95%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    place-self: center;
    padding: 1%;
    padding-bottom: 20px;
    padding-top: 3%;
}

#cardbg {
    width: ${widthrange.value / 2}%;
    border: ${bordersize.value}px solid ${bordercolor.value};
    border-radius: ${borderadius.value}px;
    padding: 6px 1px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
}

#imagediv img {
    width: 280px;
    height: 280px;
}

#info {
    display: flex;
    width: 100%;
}

#types {
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;
    width: 50%;
    gap: 13px;
    height: auto;
    padding: 5px;
}
#types span {
    background-color: aaaaaaaaaaaa;
    color: aa;
    padding: 4px 18px;
    text-align: center;
    place-self: center;
    font-size: 16px;
    font-weight: 700;
    border-radius: 6px;
    box-shadow: 3px 3px 0px rgb(255, 255, 255);
}

#moves {
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;
    gap: 13px;
    width: 50%;
    height: auto;
    padding: 5px;
}

#moves span {
    background-color: rgb(21, 26, 22);
    padding: 4px 18px;
    text-align: center;
    place-self: center;
    font-size: 16px;
    font-weight: 700;
    border-radius: 6px;
    box-shadow: 3px 3px 0px rgb(255, 255, 255);
    margin: 0;
}

#moves h3 {
    margin: 8px;
}

#stats {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
    gap: 20px 10px;
    margin-top: 20px;
    margin-bottom: 10px;
}

#poketextname {
    color: ${pokenamecolor.value};
    font-size: ${pokenamesize.value}px;
}

.statcontent {
    display: flex;
    justify-content: center;
    gap: 3%;
}

.statcontent span {
    width: 45px;
    font-weight: 500;
}

.stat {
    background-color: ${statbgcolor.value};
    width: 100px;
    place-self: center;
    display: flex;
}

.statext {
    color: ${statextcolor.value};
    font-size: ${statnamesize.value}px;
}

.statbar {
    background-color: ${statbarcolor.value};
    place-content: center;
    width: 110px;
    height: 10px;
}
`
    navigator.clipboard.writeText(codeCSS)
    copiedtext.setAttribute("style", "display: inline; opacity: 1; transition: all .2s ease-in-out")
    setTimeout(clearText, 2000)
    function clearText() {
        copiedtext.setAttribute("style", "opacity: 0; transition: all .2s ease-in-out")
    }
}


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
        if (wide != null) {
            statbars[i].setAttribute("style", `${wide.split(";")[0]}; background-color: ${statbarcolor.value};
            `)
        }


        let wideBG = statbarsBG[i].getAttribute("style")
        statbarsBG[i].removeAttribute("style")
        statbarsBG[i].setAttribute("style", `
        ${wideBG}
        background-color: ${statbgcolor.value};
        `)

        statext[i].removeAttribute("style")
        statext[i].setAttribute("style", `
        color: ${statextcolor.value};
        font-size: ${statnamesize.value}px;
        `)

    }



}


