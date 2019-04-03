// Libraries
const express = require("express");
// Controllers
const { newTask, getTasks, updateTask, deleteTask, activeTasks, completedTasks, incompletedTasks } = require("../controllers/Task");

// Init Router
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send({message:'Server on C:'})
});

// Tasks
router.post("/tasks", newTask);
router.get("/tasks", getTasks);
router.patch("/tasks/:name", updateTask);
router.put("/tasks/:name", deleteTask);
router.get("/tasks-active", activeTasks);
router.get("/tasks-completed", completedTasks);
router.get("/tasks-incompleted", incompletedTasks);

module.exports = router;
