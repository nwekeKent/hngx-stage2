const express = require("express");
const db = require("./database/database");
const app = express();
const userControllers = require("./controller/userController");
const port = 3050;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/api", userControllers.getUsers);

app.get("/api/:id", userControllers.getUserByName);

app.post("/api", userControllers.createUser);

app.listen(port, () => {
	console.log(`App running on port ${port}.`);
});
