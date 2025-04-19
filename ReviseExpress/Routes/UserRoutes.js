const express = require("express");
const UserController = require("./../Controllers/UserController");

const routes = express.Router();

routes.route("/").get(UserController.getuser);

module.exports = routes;
