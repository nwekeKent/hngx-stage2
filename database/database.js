const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("mydatabase.db");

// Create the "users" table if it doesn't exist
db.serialize(() => {
	db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT
    )
  `),
		err => {
			if (err) {
				console.error("Error creating user table:", err.message);
			} else {
				console.log("User table created successfully.");
			}
		};
});

// Close the database connection when the module is unloaded
process.on("exit", () => {
	db.close(err => {
		if (err) {
			console.error("Error closing the database:", err.message);
		} else {
			console.log("Database connection closed.");
		}
	});
});

module.exports = db; // Export the database instance
