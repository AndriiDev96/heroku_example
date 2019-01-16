const express = require("express");
/* Port for heroku */
const { PORT = 3000 } = process.env;
const app = express();

app.get("/myName/", (rq, res) => {
  res.json({
    name: "Andrii"
  })
})

//Connect front-end
app.use("/", express.static(__dirname + "/build"));

app.listen(PORT, () => {
  console.log('SERVER IS STARTED');
})