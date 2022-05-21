const firstName = require("./utils");
const add = require("./utils");
const getNotes = require("./notes")

const sum = add(2, 6);
const msg = getNotes()

console.log(firstName);
console.log(sum);
console.log(msg);
