const express = require("express");
const router = express.Router();
const {
  getAllTask,
  getOneTask,
  createTask,
  updateTask,
} = require("../controller/task.controller");

// Routes
router.get("/", getAllTask);
router.get("/:id", getOneTask);
router.post("/", createTask);

module.exports = router;
