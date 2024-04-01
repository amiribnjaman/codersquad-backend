const express = require("express");
const router = express.Router();
const { getAllTask, getOneTask } = require("../controller/task.controller");

// Routes
router.get("/", getAllTask);
router.get("/:id", getOneTask);

module.exports = router;
