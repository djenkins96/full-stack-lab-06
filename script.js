var friends = ["Ross", "Chandler", "Monica", "Phoebe", "Joey"]
//20 weapon names
var weapons = ["mallet", "nun-chucks", "thumb-tack", "mac book pro", "plumbus", "trap door", "iron maiden", "ice bucket challenge", "twist tie", "Dharma and Greg season 1 & 2 on blue ray", "2 day old sushi", "switchblade", "water boarding", "sleeper hold", "horriibly boring story about that one time they 'rescued' that cat from the shelter", "hot yoga", "kambucha", "hamurabi's code", "manhole cover", "axe body spray"];
//10 locations
var locations = ['international space station', 'museum of towing', 'massage parlor', 'van down by the river', 'upside down', 'museum of modern art', 'movie theater', 'shower', 'disco', 'gas station in that sketchy part of town']


function modusOperandi(cycle) {
    var a = cycle;
    var b = cycle;
    var c = cycle;
    return function () {
        alert("I accuse " + friends[(a - 1) % 5] + " with the " + weapons[(b - 1) % 20] + "  in the " + locations[(c - 1) % 10] + "!");
        // console.log(a);
        // console.log(b);
        // console.log(c);
    }
}

for (var i = 1; i < 101; i++) {


    var friend = document.createTextNode("Accusation " + i)
    var header = document.createElement('h3');
    document.body.appendChild(header);
    header.appendChild(friend);
    // modusOperandi(i);
    header.addEventListener('click', modusOperandi(i));
};








