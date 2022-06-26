function add7(n) {
    return n + 7;
}

let multiply = (x, y) => x * y;

function capitalize(str) {
    let firstLetter = str.slice(0, 1).toUpperCase();
    let theRest = str.slice(1).toLowerCase();
    return firstLetter + theRest;
}

let lastletter = (str) => str.slice(-1);

console.log(lastletter("word"));