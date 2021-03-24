const express = require('express');
const router = express.Router();
const messageController = require("../../../controllers/api/v1/index");

router.get("/", messageController.getM);

router.get("/:id", messageController.getMId);

router.post("/", messageController.postUser);

router.put("/:id", messageController.putId);

router.delete("/:id", messageController.deleteId);

// router.get("/?user=username", messageController.getUsername);

module.exports = router;
