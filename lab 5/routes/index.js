const express = require('express');
const router = express.Router();
const messageController = require("../controllers/index");

router.get("/", messageController.getM);

router.get("/:id", messageController.getMId);

router.post("/:user", messageController.postUser);

router.put("/:id", messageController.putId);

router.delete("/:id", messageController.deleteId);

router.get("/?user=username", messageController.getUsername);

module.exports = router;
