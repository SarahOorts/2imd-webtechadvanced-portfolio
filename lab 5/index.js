const express = require('express');
const app = express();
const port = 3000;
const routerMessages = require("./routes/index.js");

app.set('view engine', "pug");

app.get('/', (req, res) => {
//   res.send('Hello World!')
  //homepage pug
  res.render('index', { title: 'Lab 5', message: 'Hello there!'});
});

app.use("/api/v1/messages", routerMessages);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});