//imports logger from logger.js
// const logger = require("./logger");
// logger("message");

//PATH
// const path = require("path");
// const pathObj = path.parse(__filename);
// console.log(pathObj);

//OS
// const os = require("os");
// const totalMem = os.totalmem();
// const freeMem = os.freemem();

// console.log(`Total Memory: ${totalMem}`);
// console.log(`Free Memory: ${freeMem}`);

//FileSystem
// const fs = require("fs");
// const files = fs.readdirSync("./");
// console.log(files);
// const asyncFiles = fs.readdir("./", function (err, files) {
//   if (err) console.log("Error", err);
//   else console.log("Result", files);
// });

//Event Emitter
// const EventEmitter = require("events");
// // const emitter = new EventEmitter();

// const Logger = require("./logger");
// const logger = new Logger();

// //Register listener on Logger instance
// logger.on("messageLogged", (e) => {
//   console.log("Listener called", e);
// });

// logger.log("message");

//HTTP
const http = require("http");

//htttp.Server inhitis from net.Server, an EventEmitter
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello World");
    res.end();
  }

  if (req.url === "/api/courses") {
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }
});
// server.on("connection", (socket) => {
//   console.log("New connection!");
// });
server.listen(3000);
console.log("Listening on port 3000!");
