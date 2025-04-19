const express = require("express");
const TourController = require("./../Controllers/TourController");

const routes = express.Router();

routes.param("id", TourController.checkId);

// create a check Body Middleware
// Check the body contains the name and price property
// if not send back 400 (bad request)
// its only for Post

routes
  .route("/")
  .get(TourController.getAllTours)
  .post(TourController.CheckBody, TourController.createTour);

routes
  .route("/:id")
  .get(TourController.getTour)
  .patch(TourController.updateTour)
  .delete(TourController.deleteTour);

module.exports = routes;
