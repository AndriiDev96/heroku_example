const express = require("express");
/* Port for heroku */
const { PORT = 3000 } = process.env;
const app = express();

app.get("/myName/", (rq, res) => {
  res.json({
    name: "Andrii"
  })
})

app.listen(PORT, () => {
  console.log('SERVER IS STARTED');
})