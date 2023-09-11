const express = require("express");

const userControllers = require("../controller/userController");

const router = express.Router();

// get all users
router.get("/api", userControllers.getUsers);

// get a user using the user id
router.get("/api/:id", userControllers.getUserById);

// optionally, get a user by using the user name
router.get("/api/:name", userControllers.getUserByName);

// create a new user
router.post("/api", userControllers.createUser);

// update a user using the user's id by passing a body containing the user's new name
router.put("/api/:id", userControllers.updateUserName);

// delete user using the user's id
router.delete("/api/:id", userControllers.deleteUserById);

// delete user using user's name
router.delete("/api/:name", userControllers.deleteUserByName);

module.exports = router;
