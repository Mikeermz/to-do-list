const { createTask, getAllTask, getTaskByName, deleteTaskByName, getTasksActive, getTasksCompleted, getTasksInompleted } = require("../actions");

const newTask = (req, res) => {
	createTask(req.body).then(
		(task) => res.status(201).json({ "message": "Task has been creted"})
	).catch( (error) => {
    if (error.code === 11000) return res.status(409).json({message: 'Duplicate name'})
    return res.status(400).json(error)
  });
};

const getTasks = async (req, res) => {
  getAllTask().then((tasks) => {
      res.status(200).json(tasks);
    }).catch((e) => {
      res.status(400).json(e);
    });
};

const updateTask = async (req, res) => {
  getTaskByName(req.params.name)
        .then((task) => {
          if (!task) res.status(404).json({ "message": "Task does not exist" });
		      res.status(200).json(task);
        }).catch( error => res.status(400).json(error))
}

const deleteTask = async (req, res) => {
  deleteTaskByName(req.params.name)
        .then((task) => {
          if (!task) res.status(404).json({ "message": "Task does not exist" });
		      res.status(200).json(task);
        }).catch( error => res.status(400).json(error))
}

const activeTasks = async (req, res) => {
  getTasksActive().then((tasks) => {
      res.status(200).json(tasks);
    }).catch((e) => {
      res.status(400).json(e);
    });
};

const completedTasks = async (req, res) => {
  getTasksCompleted().then((tasks) => {
      res.status(200).json(tasks);
    }).catch((e) => {
      res.status(400).json(e);
    });
};

const incompletedTasks = async (req, res) => {
  getTasksInompleted().then((tasks) => {
      res.status(200).json(tasks);
    }).catch((e) => {
      res.status(400).json(e);
    });
};

module.exports = { 
  newTask,
  getTasks,
  updateTask,
  deleteTask,
  activeTasks,
  completedTasks,
  incompletedTasks
};
