const http = require("http");

const server = http.createServer((req, res) => {
  console.log("request event");
  res.end("Hello World");
});

//Once started, is set up to stay on event loop & as requests come in, will have the server respond accordingly to them
server.listen(5000, () => {
  console.log("Server listening on port : 5000....");
});
