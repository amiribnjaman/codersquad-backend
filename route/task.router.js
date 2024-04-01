const express = require("express");
const router = express.Router();
const {
  getAllTask,
  getOneTask,
  createTask,
  updateTask,
  deleteTask,
} = require("../controller/task.controller");

// Routes
router.get("/", getAllTask);
router.get("/:id", getOneTask);
router.post("/", createTask);
router.patch("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;
