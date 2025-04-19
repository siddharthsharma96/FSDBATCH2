const express = require("express");
const fs = require("fs");
const Tours = JSON.parse(fs.readFileSync("./tours.json"));

const routes = express.Router();

routes.route("/").get((req, res) => {
  return res.status(200).json({
    status: "Success",
    total: Tours.length,
    data: {
      tours: Tours,
    },
  });
});

module.exports = routes;
