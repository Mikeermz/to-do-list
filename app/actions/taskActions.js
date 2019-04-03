const Task = require("../models/Tasks");

const createTask = (data) => {
	return Task.create(data);
};

const getAllTask = () => {
	return Task.find({});
};

const getTaskByName = (name) => {
  const query = {name }
	return Task.findOneAndUpdate(query, {$set:{completed:true}}, { new: true } );
};

const deleteTaskByName = (name) => {
  const query = {name}
  return Task.findOneAndUpdate(query, {$set:{is_active:false}}, { new: true } );
}

const getTasksActive = () => {
  return Task.find({ is_active: true });
}

const getTasksCompleted = () => {
  return Task.find({ completed: true, is_active: true });
}

const getTasksInompleted = () => {
  return Task.find({ completed: false, is_active: true });
}

module.exports = { 
  createTask,
  getAllTask,
  getTaskByName,
  deleteTaskByName,
  getTasksActive,
  getTasksCompleted,
  getTasksInompleted
};
