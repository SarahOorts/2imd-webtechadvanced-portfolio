const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
  //mongoDB return messages
  // zonder mongoDB res { message : "GETTING messages"}
  res.json({
      message : "GETTING messages",
  });    
});

router.get("/:id", (req, res) => {
  // res.send("Hello World!")
  let id = req.params.id;
  //mongoDB message met id
  // zonder mongoDB res { message : `GETTING messages with ID ${id}`}
  res.json({
      message : `GETTING messages with ID ${id}`,
  }); 
});

router.post("/:user", (req, res) => {
  // res.send("Hello World!")
  //mongoDB JSON-object ontv, local storage
  // body { message: { “user”: “Pikachu”, “text”: “nodejs isn’t hard, or is it?” } }
  //zonder mongoDB res {“message”: “POSTING a new message for user Pikachu”}
  //naam dynamisch invullen + teruggeven
  let user = req.params.user;
  res.json({
      message : `POSTING a new message for user ${user}`,
  });
});

router.put("/:id", (req, res) => {
  //mongoDB JSON local storage update
  //zonder mongoDB res  {“message”: “UPDATING a message with id id”}
  let id = req.params.id;

  res.json({
      message : `UPDATING a message with ID ${id}`,
  }); 
});

router.delete("/:id", (req, res) => {
  //mongoDB remove message met id, res {“status”: “success”, “message”: “The message was removed”}
  //zonder mongoDB res  {“message”: “DELETING a message with id id”}
  let id = req.params.id;

  res.json({
      message : `DELETING a message with ID ${id}`,
  }); 
});

router.get("/?user=username", (req, res) => { 
  //mongoDB return messages user
  //req.params.username!!
  //zonder mongoDB res  {“message”: “GETTING message for username username”}
  let username = req.query.username;

  res.json({
      message : `GETTING message for username ${username}`,
  }); 
});

module.exports = router;
