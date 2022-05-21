const fs = require("fs");
const chalk = require("chalk");
const validator = require("validator")

fs.writeFileSync('note.txt', 'This file is the beginning of node file system.');
fs.appendFileSync('note.txt', ' This text is appended with the appendFileSync method.')

console.log(validator.isEmail('amadu@gmail.com'));
console.log(validator.isURL('https://amkam.dev'));
console.log(chalk.green("Success!"));

