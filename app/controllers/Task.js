const { createTask, getAllTask } = require("../actions");

const newTask = (req, res) => {
	createTask(req.body).then(
		task => res.status(201).json({ "message": "Task has been creted"})
	).catch(e => res.status(400).send(e));
};

const getTasks = async (req, res) => {
  getAllTask().then((tasks) => {
      res.status(200).json(tasks);
    }).catch((e) => {
      res.status(400).json(e);
    });
};

module.exports = { 
  newTask,
  getTasks
};
