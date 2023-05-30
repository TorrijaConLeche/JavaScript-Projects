const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];



const checkDates = setInterval(updateClock, 2000);

let test = new Date()
let country = "Europe/Dublin"

let initialDate = convertTZ(test, country)
updateClock()

function updateClock() {
    console.log("updating")
    test = new Date()
    initialDate = convertTZ(test, country)

    changeTime(initialDate)
    changeDay(initialDate)
    changeDate(initialDate)

}

function changeDay(currentDate) {

    let day = weekday[currentDate.getDay()];
    day = day.toUpperCase()
    dayName.innerHTML = day
}

function changeDate(currentDate) {
    let day = currentDate.getUTCDate()
    let year = currentDate.getUTCFullYear()
    let month = currentDate.getUTCMonth() + 1

    let fDate = day + "-" + month + "-" + year
    fullDate.innerHTML = fDate
}

function changeTime(currentDate) {
    let minutes = currentDate.getMinutes()
    let hour = currentDate.getHours()

    if (minutes.toString().length === 1) {
        minutes = "0" + minutes
    }

    let currentTime = hour + ":" + minutes
    timeText.innerHTML = currentTime
}


function convertTZ(date, tzString) {
    return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", { timeZone: tzString }));
}

let cont = 0
timeZoneImg.onclick = () => {
    if (cont === 2) {
        cont = 0
    } else {
        cont += 1
    }

    if (cont === 0) {
        country = "Europe/Dublin"
        timeZoneImg.src = "/digital-clock/static/ireland.png"
    }
    if (cont === 1) {
        country = "Europe/Madrid"
        timeZoneImg.src = "/digital-clock/static/spain.png"

    }
    if (cont === 2) {
        country = "America/Mexico_City"
        timeZoneImg.src = "/digital-clock/static/mexico.png"

    }

    updateClock()

    console.log(cont)

}
