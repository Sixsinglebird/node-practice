////////////////////////////////////////////////
// imports
const fs = require("fs");
// fs -- provides utilities to interact with the
//      local file system.

////////////////////////////////////////////////
// when you run NODE fs -- it will make a file
//    called hello.txt

// this command simply creates a file and writes
// a spooky french hello in that file.
fs.writeFile("hello.txt", "bonjour monsieur", (err) => {
  if (err) {
    console.log(err);
  }
});

// this command reads that spooky french hello
// from the file
fs.readFile("hello.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log(data);
  }
});
