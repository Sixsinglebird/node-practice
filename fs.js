////////////////////////////////////////////////
// imports
const fs = require("fs");
// fs -- provides utilities to interact with the
//      local file system.

////////////////////////////////////////////////

// this will only activate when there is a file
// in the current directory called "hello.txt"
if (fs.access("hello.txt", () => {}) == null) {
  // this command simply specifies a file to
  // remove
  fs.rm("hello.txt", () => {});
}

// this command simply creates a file and writes
// a spooky french hello in that file.
fs.writeFile("hello.txt", "bonjour monsieur", () => {});
