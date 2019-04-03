// Libraries
const express = require("express");
// Controllers
const { newTask, getTasks } = require("../controllers/Task");

// Init Router
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send({message:'Server on C:'})
});

// Tasks
router.post("/tasks", newTask);
router.get("/tasks", getTasks);

module.exports = router;
