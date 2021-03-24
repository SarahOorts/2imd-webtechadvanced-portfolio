function getM(req, res){
    //mongoDB return messages
   // zonder mongoDB res { message : "GETTING messages"}
   if(req.query.user != null){
    let username = req.query.user;
    console.log(username);
    res.json({
        status : "succes",
        message : `GETTING message for username ${username}`,
    });
   } 
   else{
    
    res.json({
        status : "succes",
        message : "GETTING messages",
    });
   }    
}

function getMId(req, res){
    // res.send("Hello World!")
  let id = req.params.id;
  //mongoDB message met id
  // zonder mongoDB res { message : `GETTING messages with ID ${id}`}
  res.json({
        status : "succes",
        message : `GETTING messages with ID ${id}`,
  }); 
}

function postUser(req, res){
    // res.send("Hello World!")
    //mongoDB JSON-object ontv, local storage
    // body { message: { “user”: “Pikachu”, “text”: “nodejs isn’t hard, or is it?” } }
    //zonder mongoDB res {“message”: “POSTING a new message for user Pikachu”}
    //naam dynamisch invullen + teruggeven
    // let user = req.params.user;
    res.json({
        status : "succes",
        message : `POSTING a new message for user Pikachu`, //${user}
    });
}

function putId(req, res){
    //mongoDB JSON local storage update
    //zonder mongoDB res  {“message”: “UPDATING a message with id id”}
    let id = req.params.id;
  
    res.json({
        status : "succes",
        message : `UPDATING a message with ID ${id}`,
    }); 
}

function deleteId(req, res){
    //mongoDB remove message met id, res {“status”: “success”, “message”: “The message was removed”}
    //zonder mongoDB res  {“message”: “DELETING a message with id id”}
    let id = req.params.id;
  
    res.json({
        status : "succes",
        message : `DELETING a message with ID ${id}`,
    }); 
  }

//   function getUsername(req, res){ 
//     //mongoDB return messages user
//     //req.params.username!!
//     //zonder mongoDB res  {“message”: “GETTING message for username username”}
//     let username = req.param("user");
//     // let user = JSON.stringify(username); //https://www.codegrepper.com/code-examples/javascript/node+http+get+query+params
//     // console.log(user); //https://expressjs.com/en/guide/routing.html
    
//     res.json({
//         status : "succes",
//         message : `GETTING message for username ${username}`,
//     }); 
    
//   }

module.exports.getM = getM;
module.exports.getMId = getMId;
module.exports.postUser = postUser;
module.exports.putId = putId;
module.exports.deleteId = deleteId;
// module.exports.getUsername = getUsername;