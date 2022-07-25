// install express
// import library
// create express server
// define your routes and requests that are allowed
// listen on a port

// import express library
import express from "express";

//initialize express server
const app = express();

// list requests that we want express to respond to
app.get("/hello", (request, response) => {
  // do something ..
  console.log("xxx Hello World! xxx");
  response.send("Hello World!");
});

const students = [
  { firstName: "Jonathon", lastName: "Vagas" },
  { firstName: "Alicia", lastName: "Myrie" },
  { firstName: "Bridgette", lastName: "Lemus" },
  { firstName: "Mason", lastName: "Madaras" },
];

app.get("/students", (request, response) => {
  response.send(students); // sends response back to Chrome
});

app.get("/students/:firstName", (request, response) => {
  const student = students.find(
    (stud) => stud.firstName === request.params.firstName
  );
  if (!student) {
    response.status(404).send({ message: "Student not found", success: false });
    return;
  }
  response.send(student);
});

// start listening on a port
app.listen(3001, () => {
  console.log("Now listening on port 3001");
});
