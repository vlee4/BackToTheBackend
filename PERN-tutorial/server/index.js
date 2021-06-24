const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const pool = require("./db");

//Middleware
app.use(cors()); //Allows frontend & backend to communicate despite being on diff ports
app.use(express.json()); //Allows server to get data from client-side via req body

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
