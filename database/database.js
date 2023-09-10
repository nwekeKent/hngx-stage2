const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("mydatabase.db");

// Create the "users" table if it doesn't exist
db.serialize(() => {
	db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT
    )
  `);
});

module.exports = db; // Export the database instance
