const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
  //homepage pug
});

app.get("/api/v1/messages", (req, res) => {
    res.send("Hello World!")
    //mongoDB return messages
    // zonder mongoDB res { message : "GETTING messages"}
});

app.get("/api/v1/messages/:id", (req, res) => {
    res.send("Hello World!")
    //mongoDB message met id
    // zonder mongoDB res { message : `GETTING messages with ID ${id}`}
});

app.post("/api/v1/messages", (req, res) => {
    res.send("Hello World!")
    //mongoDB JSON-object ontv, local storage
    // body { message: { “user”: “Pikachu”, “text”: “nodejs isn’t hard, or is it?” } }
    //zonder mongoDB res {“message”: “POSTING a new message for user Pikachu”}
    //naam dynamisch invullen + teruggeven
});

app.put("api/v1/messages/:id", (req, res) => {
    //mongoDB JSON local storage update
    //zonder mongoDB res  {“message”: “UPDATING a message with id id”}
});

app.delete("/api/v1/messages/:id", (req, res) => {
    //mongoDB remove message met id, res {“status”: “success”, “message”: “The message was removed”}
    //zonder mongoDB res  {“message”: “DELETING a message with id id”}
});

app.get("/api/v1/messages?user=username", (req, res) => {
    //mongoDB return messages user
    //req.params.username!!
    //zonder mongoDB res  {“message”: “GETTING message for username username”}
});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});