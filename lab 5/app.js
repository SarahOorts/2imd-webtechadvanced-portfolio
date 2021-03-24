const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const routerMessages = require("./routes/api/v1/index");
const cors = require("cors");

app.use(cors()); // request nr server zoals cors anywhere mr ingesteld op u server ipv and server

app.get("/", (req, res) => {
    app.set('view engine', "pug");
//   res.send('Hello World!')
  //homepage pug
  res.render('index', { title: 'Lab 5', message: 'Hello there!'});
});

app.use("/api/v1/messages", routerMessages);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});