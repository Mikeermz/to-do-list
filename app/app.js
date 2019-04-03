// Libraries
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

// Database
const { db } = require("./config");

// Routes
const router  =  require("./routes");

// Init app 
const app = express();

app.use(morgan(":method :url :status :res[content-length] - :response-time ms"));
app.use(bodyParser.json());
app.use("/api/v1",router);
app.use(cors());

// DB Conection

mongoose.connect(db.url, { useNewUrlParser: true });
const mongo = mongoose.connection;

mongo.on("error", (error) => console.log("Failed to connect to mongo", error))
	.once("open", () => console.log("Connected to database"));

module.exports = app;
