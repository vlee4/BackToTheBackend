//HTTP MODULE

const http = require("http");
const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to the homepage");
  } else if (req.url === "/about") {
    res.end("Here is our short history");
  } else {
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you're looking for.</p>
    <a href="/"> Back </a>
    `);
  }
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
