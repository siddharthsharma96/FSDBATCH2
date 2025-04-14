const express = require("express");
const UserController = require("./../Controllers/UserController");

const routes = express.Router();

routes.route("/").get(UserController.getUsers).post(UserController.createUser);

routes
  .route("/:id")
  .get(UserController.getUser)
  .patch(UserController.updateUser)
  .delete(UserController.deleteUser);

module.exports = routes;
