const Joi = require("joi");
const express = require("express");
const app = express(); // JS function designed to be passed back to Node's HTTP servers (which can then specify http/https)
const PORT = process.env.PORT || 3000; //Port determined by hosting env, so need to check, otherwise default to 3000

//MIDDLEWARE
//By default, Express can't parse JSON in req.body so you need middleware to enable this
app.use(express.json());

const courses = [
  { id: 1, name: "course1" },
  { id: 2, name: "course2" },
  { id: 3, name: "course3" },
];

//Route handler
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/courses", (req, res) => {
  res.send(courses);
});

app.get("/api/courses/:id", (req, res) => {
  //using parseInt to make sure the id from the params is correct type (num)
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course)
    return res
      .status(404)
      .send(`The course with id ${parseInt(req.params.id)} was not found`);
  res.send(course);
});

//params can be sent via get requests, req.params is used to access those variables
//if a query string is included then that can be accessed via req.query; for example, the browser url would look like .../api/posts/2019/1?sortBy=name
app.get("/api/posts/:year/:month", (req, res) => {
  res.send(req.query);
});

app.post("/api/courses", (req, res) => {
  const { error } = validateCourse(req.body);
  if (error) {
    //400 Bad Request
    return res.status(400).send(error.details[0].message);
  }

  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(courses);
  //By convention, post req send back the new data point they've created so that the client knows the id/content of the new data point
  res.send(course);
});

app.put("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course)
    return res
      .status(404)
      .send(`The course with id ${parseInt(req.params.id)} was not found`);

  const { error } = validateCourse(req.body);
  if (error) {
    //400 Bad Request
    return res.status(400).send(error.details[0].message);
  }
  //Update course
  course.name = req.body.name;
  //Return updated course
  res.send(course);
});

app.delete("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course)
    return res
      .status(404)
      .send(`The course with id ${parseInt(req.params.id)} was not found`);

  //Delete
  const index = courses.indexOf(course);
  courses.splice(index, 1);

  res.send(course);
  //REturn same course
});

//binds & listens to specified host & port, identical to Node's http.Server.listen()
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

function validateCourse(course) {
  //Schema defines what our data should look like
  const schema = Joi.object({
    name: Joi.string().min(3).required(), //checks for a string that is min 3 char & is a required field
  });

  return schema.validate(course);
}
