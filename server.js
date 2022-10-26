const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("index");
});

app.get("/messages", (req, res) => {
  res.send("messages");
});

app.listen(3000);
