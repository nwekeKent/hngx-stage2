const express = require("express");
const userRoutes = require("./route/user");

//set port
const port = process.env.PORT || 3050;

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(userRoutes);

app.listen(port, () => {
	console.log(`App running on port ${port}.`);
});
