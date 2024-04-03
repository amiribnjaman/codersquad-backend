const express = require("express");
const router = express.Router();
const {
  getAllTask,
  getOneTask,
  createTask,
  updateTask,
  deleteTask,
  getAUserAllTask,
} = require("../controller/task.controller");
const authentication = require("../middleware/authentication")
const authorization = require("../middleware/authorization");

// Routes
router.get("/", authentication, getAllTask);
router.get("/:id", authentication, getOneTask);
router.get("/my-task", authorization, getAUserAllTask);
router.post("/", authentication, createTask);
router.patch("/:id", authorization, updateTask);
router.delete("/:id", authorization, deleteTask);

module.exports = router;
