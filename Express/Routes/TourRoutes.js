const express = require("express");
const TourController = require("./../Controllers/TourController");

const routes = express.Router();
routes
  .route("/")
  .get(TourController.getAllTours)
  .post(TourController.createTour);

routes
  .route("/:id")
  .get(TourController.getTour)
  .patch(TourController.updateTour)
  .delete(TourController.deleteTour);

module.exports = routes;
