const express = require("express");
const app = express();

app.get("/myName/", (rq, res) => {
  res.json({
    name: "Andrii"
  })
})

app.listen(4000, () => {
  console.log('SERVER IS STARTED');
})