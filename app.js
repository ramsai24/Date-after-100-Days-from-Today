const express = require("express");
const addDays = require("date-fns/addDays");

const app = express();

const hunderedDays = addDays(new Date(), 100);
console.log(hunderedDays);

app.get("/", (request, response) => {
  const requiredFormat = `${hunderedDays.getDate()}/${
    hunderedDays.getMonth() + 1
  }/${hunderedDays.getFullYear()}`;

  console.log(requiredFormat);
  response.send(requiredFormat);
});

module.exports = app;

app.listen(3000, () => {
  console.log("Server is running at localhost:3000");
});
