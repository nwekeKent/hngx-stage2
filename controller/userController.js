const db = require("../database/database");

exports.createUser = (req, res, next) => {
	const { name } = req.body;

	// Validate that "name" is a string
	if (typeof name !== "string") {
		return res.status(400).json({ error: "Name must be a string." });
	}

	// Check if required fields are provided
	if (!name) {
		return res.status(400).json({ error: "Name is required." });
	}

	// Insert the new user into the database
	const query = "INSERT INTO users (name) VALUES (?)";
	db.run(query, [name], err => {
		if (err) {
			return res.status(500).json({ error: "Error creating user." });
		}
		res.status(201).json({ message: "User created successfully." });

		// Close the database connection after the response is sent
		db.close(err => {
			if (err) {
				console.error("Error closing the database:", err.message);
			} else {
				console.log("Database connection closed in userController.");
			}
		});
	});
};
