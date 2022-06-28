// 1
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

//2
function isEmpty(obj) {
    for(let k in obj)
        return false;
    return true;
}
// console.log(isEmpty(user));
// let emptyObj = {};
// console.log(isEmpty(emptyObj));

// 3
function sumValues(obj) {
    let sum = 0;
    for(k in obj)
        sum += obj[k];
    return sum;
}

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

// 4
function multiplyNumeric(obj) {
    for(let k in obj)
        if(typeof obj[k] === "number")
            obj[k] *= 2;
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};