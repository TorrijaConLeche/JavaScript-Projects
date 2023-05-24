export let projects = {
    1: {
        name: "To Do App",
        image: "/main-page/content/to-do-app.png",
        url: "/To-Do-App",
        diff: 20
    },
    2: {
        name: "Vowel Counter",
        image: "/main-page/content/vowel-counter.png",
        url: "/Vowel-Counter",
        diff: 15
    },
    3: {
        name: "Memory Game",
        image: "/main-page/content/memory-game.png",
        url: "/Memory-Game",
        diff: 40
    },
    4: {
        name: "Hangman Game",
        image: "/main-page/content/hangman-game.png",
        url: "/Hangman-Game",
        diff: 32
    },
    5: {
        name: "Coming Soon",
        image: "/main-page/content/soon.jpg",
        url: "/card-generator",
        diff: 0
    },
    6: {
        name: "Coming Soon",
        image: "/main-page/content/soon.jpg",
        url: "/soon",
        diff: 0
    },
}


export function sort_projects(arg) {

    // Create items array
    var items = Object.keys(projects).map(function (key) {
        return [key, projects[key]];
    });

    // Sort the array based on the second element
    items.sort(function (first, second) {
        if (arg === "less") {
            return first[1].diff - second[1].diff // order from least difficult to most difficult
        }
        else {
            return second[1].diff - first[1].diff // order from most difficult to least difficult
        }

    });
    //  Items now are sorted

    let sorted_projects = {} // Sorted_projects will store projects from less to more 

    items.forEach(function (k, v) { // Iterate the array to create the new dict with sorted values
        let use_key = v // key
        let use_value = k[1] // value
        sorted_projects[use_key] = use_value
    })

    return sorted_projects
}


let alter = false
export function toggleSort() {
    {
        if (alter === false) {
            alter = true
            return sort_projects("more")

        }
        else {
            alter = false
            return sort_projects("less")

        }
    }
}
