const add = require("express");

const app = add();

app.get("/", (request, response) => {
  response.send("Hello World");
});

app.listen(3000);

app.get("/date", (req, res) => {
  let date = new Date();
  res.send(`Today date is ${date}`);
});

app.get("/page", (req, res) => {
  res.sendFile("./page.html", { root: __dirname });
});
