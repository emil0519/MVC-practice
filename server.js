const path = require("path");
// require path need to be string
const express = require("express");
express.json();
const server = express();
const app = express();
const jsonServer = require("json-server");

app.use(express.json());

server.use("/messages", jsonServer.router(path.join(__dirname, "db.json")));

app.get("/messages", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/messages.html"));
});

app.get("/messages", express.json(), (req, res) => {
  fetch("http://localhost:3004/messages", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      console.log(res);
    })
    .then((data) => {
      console.log(data);
    })
    .catch((e) => {
      console.log(e);
    });

  res.send(req.body);
});

app.post("/messages", express.json(), (req, res) => {
  fetch("http://localhost:3004/messages", {
    method: "POST",
    body: JSON.stringify({
      message: req.body.message,
      timestamp: req.body.timestamp,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      console.log(res);
    })
    .catch((e) => {
      console.log(e);
    });

  res.send(200);
});

app.listen(3000);
