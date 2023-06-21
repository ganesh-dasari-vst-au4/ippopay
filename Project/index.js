const http = require("http");
const app = require("./app");
const db = require("./database");

let server = http.createServer(app);

server
  .listen(function () {
    console.log("Server has started at port number");
  })
  .on("error", (error) => {
    console.log("Unable to start app , Error>>>>>>", error);
  });