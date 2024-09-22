const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");
const getController = require("../controllers/getController");

router.post("/", postController.handlePost);
router.get("/", getController.handleGet);

module.exports = router;
