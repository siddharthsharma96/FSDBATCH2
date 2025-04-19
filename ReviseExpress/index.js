const express = require("express");
const app = express();

const TouRoutes = require("./Routes/TourRoutes");
const UserRoutes = require("./Routes/UserRoutes");

app.use(express.json());

// app.get("/api/v1/tours", (req, res) => {
//   return res.status(200).json({
//     status: "Success",
//     total: Tours.length,
//     data: {
//       tours: Tours,
//     },
//   });
// });

// app.get("/api/users", (req, res) => {
//   return res.status(200).json({
//     status: "Success",
//     total: Tours.length,
//     data: {
//       tours: "Hello this route belongs to user",
//     },
//   });
// });

app.use("/api/v1/tours", TouRoutes);
app.use("/api/users", UserRoutes);

app.listen(8000, () => {
  console.log("server started on port 8000");
});
