const express = require("express");
const app = express(); // JS function designed to be passed back to Node's HTTP servers (which can then specify http/https)
const PORT = process.env.PORT || 3000; //Port determined by hosting env, so need to check

//Route handler
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/courses", (req, res) => {
  res.send([1, 2, 3, 5]);
});

//binds & listens to specified host & port, identical to Node's http.Server.listen()
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
