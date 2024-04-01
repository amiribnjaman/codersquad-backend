const Task = require("../model/task.model");
const { v4: uuidv4 } = require("uuid");

// Get One task API
const getOneTask = async (req, res) => {
  const { email } = req.decoded;
  const id = req.params.id;
  try {
    const tasks = await Task.findOne({ id });
    if (tasks) {
      res.status(200).json(tasks);
    } else {
      res.status(400).json({ message: "something went wrong" });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Get all task API
const getAllTask = async (req, res) => {
  // const email = req.query.email;
  const { email } = req.decoded;
  try {
    const tasks = await Task.find({ creatorEmail: email });
    if (tasks) {
      res.status(200).json(tasks);
    } else {
      res.status(400).json({ message: "something went wrong" });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getOneTask,
  getAllTask,
};
