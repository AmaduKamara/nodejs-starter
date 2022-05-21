const firstName = require("./utils");
const add = require("./utils");
const getNotes = require("./notes")

const sum = add(2, 6);
const notes = getNotes()
console.log(sum);
console.log(notes);
// console.log(firstName);
