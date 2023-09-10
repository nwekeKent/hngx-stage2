const express = require("express");
const app = express();
const port = 3050;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	res.json({ info: "Node.js, Express, and Postgres API" });
});

app.listen(port, () => {
	console.log(`App running on port ${port}.`);
});
