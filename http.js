////////////////////////////////////////////////
// imports
const http = require("http");
// http is the module which we will use to host our webservers

////////////////////////////////////////////////

const server = http.createServer(async (req, res) => {
  // req and res are essential to the "createServer method"
  // req contains all information regarding what the user
  // has requested.
  // whereas response contains all the information regarding
  // what the server sends back.
  if (req.url === "/") {
    res.write("good request... BETTER RESPONSE!!");
    res.end();
  } else {
    // only triggers when the url path is not found
    // which is anything that isnt root "/" rn
    res.write("bad request... no no.. 404... not found");
    res.end();
  }
});

////////////////////////////////////////////////
// with just these two functions (below) the
// server runs.
// however nothing is shown in your browser.
// -- with only these two statements the browser
//  is not told to display any information,
//  and so it states "the website is unreachable"
server.on("connection", (socket) => {
  // "connection" - states this code will run
  // everytime a connection is made to the server
  console.log("new connection made");
  // connection is very low level and wont be used
  // very often to respond to events...
  // however it helped my understanding
});

server.listen(3000, () => {
  // a event watcher is placed onto port 3000.
  console.log(`listening on port 3000...`);
});
////////////////////////////////////////////////
