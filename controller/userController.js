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
		// db.close(err => {
		// 	if (err) {
		// 		console.error("Error closing the database:", err.message);
		// 	} else {
		// 		console.log("Database connection closed in userController.");
		// 	}
		// });
	});
};

exports.getUsers = (req, res, next) => {
	// Retrieve all users from the "users" table
	const query = "SELECT * FROM users";
	db.all(query, [], (err, users) => {
		if (err) {
			return res.status(500).json({ error: "Error fetching users." });
		}
		res.status(200).json({ users });
	});
};

// exports.getUserById = (req, res, next) => {
// 	const { id } = req.params;

// 	// Retrieve a user by id from the "users" table
// 	const query = "SELECT * FROM users WHERE id = ?";
// 	db.get(query, [id], (err, user) => {
// 		if (err) {
// 			return res.status(500).json({ error: "Error fetching user by id." });
// 		}

// 		if (!user) {
// 			return res.status(404).json({ error: "User not found." });
// 		}

// 		res.status(200).json(user);
// 	});
// };

exports.getUserByIdOrName = (req, res, next) => {
	const { idOrName } = req.params;

	// Check if the provided parameter is a number (id) or a string (name)
	const isId = !isNaN(idOrName);
	const query = isId
		? "SELECT * FROM users WHERE id = ?"
		: "SELECT * FROM users WHERE name = ?";

	const param = isId ? parseInt(idOrName, 10) : idOrName;

	db.get(query, [param], (err, user) => {
		if (err) {
			return res.status(500).json({ error: "Error fetching user." });
		}

		if (!user) {
			return res.status(404).json({ error: "User not found." });
		}

		res.status(200).json({ user });
	});
};

exports.updateUserName = (req, res, next) => {
	const { id } = req.params;
	const { name } = req.body;

	// Validate that "name" is provided and is a string
	if (!name || typeof name !== "string") {
		return res
			.status(400)
			.json({ error: "Name must be provided and must be a string." });
	}

	// Update the user's name in the "users" table
	const query = "UPDATE users SET name = ? WHERE id = ?";
	db.run(query, [name, id], err => {
		if (err) {
			return res.status(500).json({ error: "Error updating user name." });
		}
		res.status(200).json({ message: "User name updated successfully." });
	});
};

exports.deleteUserById = (req, res, next) => {
	const { id } = req.params;

	// Delete the user from the "users" table by ID
	const query = "DELETE FROM users WHERE id = ?";
	db.run(query, [id], err => {
		if (err) {
			return res.status(500).json({ error: "Error deleting user." });
		}
		res.status(200).json({ message: "User deleted successfully." });
	});
};
