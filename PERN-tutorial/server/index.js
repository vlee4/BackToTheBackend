require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const path = require("path");
const PORT = process.env.PORT || 5000;

//Middleware
app.use(cors()); //Allows frontend & backend to communicate despite being on diff ports
app.use(express.json()); //Allows server to get data from client-side via req body
// app.use(express.static(path.resolve(__dirname, "../client/build"))); //Sends build of React App

//ROUTES
//GET ALL
app.get("/todos", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todo");
    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//GET ONE
app.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [
      id,
    ]);
    res.json(todo.rows[0]);
  } catch (err) {
    console.err(err.message);
  }
});

//POST
app.post("/todos", async (req, res) => {
  try {
    const { description } = req.body;

    //$1 indicates where the variable will be inserted *
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES ($1) RETURNING *",
      [description]
    );

    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//PUT
app.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updatedTodo = await pool.query(
      "UPDATE todo SET description = $1 WHERE todo_id = $2",
      [description, id]
    );
    res.status(200).json(`todo ${id} updated with "${description}"`);
  } catch (err) {
    console.error(err.messge);
  }
});

//DELETE
app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [
      id,
    ]);
    res.json(`Todo with id = ${id} was deleted`);
  } catch (err) {
    console.error(err.messge);
  }
});
//Any GET requests not handled by other routes returns React App
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
// });

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

//*Ref: Pool.query config object : https://node-postgres.com/features/queries
