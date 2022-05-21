const fs = require("fs");

fs.writeFileSync('note.txt', 'This file is the beginning of node file system.');
fs.appendFileSync('note.txt', ' This text is appended with the appendFileSync method.')