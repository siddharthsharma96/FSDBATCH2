const express = require("express");
const app = express();
const userRouter = require("./Routes/UserRoutes");
const tourRouter = require("./Routes/TourRoutes");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
// 1.Middleware
app.use(express.json());

// console.log(process.env.NODE_ENV);

// app.use(express.static("./public/index.html"));
if (process.env.NODE_ENV === "development") {
  app.use((req, res, next) => {
    console.log("hello from middleware");
    next();
  });
}

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use("/api/v1/tours", tourRouter);

app.use("/api/v1/users", userRouter);

module.exports = app;
