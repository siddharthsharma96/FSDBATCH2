const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());

const Tours = JSON.parse(fs.readFileSync("./tours.json"));

app.get("/api/v1/tours", (req, res) => {
  res.status(200).json({
    status: "sucess",
    total: Tours.length,
    data: {
      tours: Tours,
    },
  });
});

app.post("/api/v1/tours", (req, res) => {
  //   console.log(req.body);

  const newId = Tours[Tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);
  Tours.push(newTour);
  fs.writeFile("./tours.json", JSON.stringify(Tours), (err) => {
    res.status(201).json({
      status: "Success",
      data: {
        newTour,
      },
    });
  });

  res.status(201).json({
    status: "Success",
    data: {
      newTour,
    },
  });
});

app.get("/api/v1/tours/:id", (req, res) => {
  console.log(req.params);
  const id = req.params.id * 1;
  if (id > Tours.length) {
    return res.status(404).json({
      status: "fail",
      messge: "No data found",
    });
  }
  const tour = Tours.find((el) => el.id === id);
  //   console.log(tour);
  res.status(200).json({
    status: "success",
    data: {
      tour,
    },
  });

  //   res.send("kljj");
});

app.listen(8000, () => {
  console.log("Server started");
});
