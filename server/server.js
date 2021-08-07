const fs = require("fs");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.listen(PORT, startedServer);

function startedServer() {
  console.log(`listening on ${PORT}`);
}

app.get("/get/:id", handleGetReq);
app.post("/post/:address", handlePostReq);

function handleGetReq(req, res) {
  const { id } = req.params;
  console.log(`request for ${id}`);
  res.send(`get request from ${id}`);
}

function handlePostReq(req, res) {
  const { address } = req.params;
  const files = req.body;
  console.log(`post request from ${address} content: ${files}`);
  res.send(`post from ${address}`);
}
