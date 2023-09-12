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
	const query = db.prepare("INSERT INTO users (name) VALUES (?)");
	query.run([name], err => {
		if (err) {
			return res.status(500).json({ error: "Error creating user." });
		}

		const userId = query.lastID;

		const selectQuery = "SELECT * FROM users WHERE id = ?";
		db.get(selectQuery, [userId], (err, user) => {
			if (err) {
				return res.status(500).json({ error: "Error fetching created user" });
			}

			if (!user) {
				return res.status(404).json({ error: "User not found." });
			}

			res.status(201).json(user);
		});
	});
};

exports.getUserById = (req, res, next) => {
	const { id } = req.params;

	// Retrieve a user by id from the "users" table
	const query = "SELECT * FROM users WHERE id = ?";
	db.get(query, [id], (err, user) => {
		if (err) {
			return res.status(500).json({ error: "Error fetching user by id." });
		}

		if (!user) {
			return res.status(404).json({ error: "User not found." });
		}

		res.status(200).json(user);
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
		const query = "SELECT * FROM users WHERE id = ?";
		const userId = id;
		db.get(query, [userId], (err, user) => {
			if (err) {
				return res.status(500).json({ error: "Error fetching user by id." });
			}

			if (!user) {
				return res.status(404).json({ error: "User not found." });
			}

			res.status(200).json(user);
		});
	});
};

exports.deleteUserById = (req, res, next) => {
	const { id } = req.params;

	const selectSql = "SELECT * FROM users WHERE id = ?";

	db.get(selectSql, [id], (err, user) => {
		if (err) {
			return res.status(500).json({ error: "Error fetching user to delete" });
		}

		if (!user) {
			return res.status(404).json({ error: "User not found" });
		}

		const deleteSql = "DELETE FROM users WHERE id = ?";

		db.run(deleteSql, [id], err => {
			if (err) {
				return res.status(500).json({ error: "Error deleting user" });
			}

			return res.status(200).json(user); // Return the deleted user
		});
	});
};
