const express = require("express");
const app = express();
const PORT=3000;

app.use(express.static(__dirname + "/public"));

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/Home.html");
});
app.get("/about", (request, response) => {
  response.sendFile(__dirname + "/views/About.html");
});
app.get("/works", (request, response) => {
  response.sendFile(__dirname + "/views/Works.html");
});

app.listen(PORT, () => {
  console.log("Listen from PORT"+PORT);
});