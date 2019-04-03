const Task = require("../models/Tasks");

const createTask = (data) => {
	return Task.create(data);
};

const getAllTask = () => {
	return Task.find({});
};


module.exports = { 
  createTask,
  getAllTask
};
