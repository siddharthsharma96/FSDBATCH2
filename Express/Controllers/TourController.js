const fs = require("fs");

const Tours = JSON.parse(fs.readFileSync("./tours.json"));

exports.getAllTours = (req, res) => {
  console.log(req.requestTime);

  res.status(200).json({
    status: "sucess",
    timeofHit: req.requestTime,
    total: Tours.length,
    data: {
      tours: Tours,
    },
  });
};

exports.createTour = (req, res) => {
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
};

exports.getTour = (req, res) => {
  // console.log(req.params);
  const id = req.params.id * 1;
  // if (id > Tours.length) {
  //   return res.status(404).json({
  //     status: "fail",
  //     messge: "No data found",
  //   });
  // }
  const tour = Tours.find((el) => el.id === id);
  //   console.log(tour);
  res.status(200).json({
    status: "success",
    data: {
      tour,
    },
  });
};

exports.updateTour = (req, res) => {
  // const id = req.params.id * 1;
  // if (id > Tours.length) {
  //   return res.status(404).json({
  //     status: "fail",
  //     messge: "No data found",
  //   });
  // }
  res.status(200).json({
    status: "Updated successfully",
    messge: "<updated code will come here ...",
  });
};
exports.deleteTour = (req, res) => {
  // const id = req.params.id * 1;
  // if (id > Tours.length) {
  //   return res.status(404).json({
  //     status: "fail",
  //     messge: "No data found",
  //   });
  // }
  res.status(204).json({
    status: "Updated successfully",
    messge: null,
  });
};

exports.checkId = (req, res, next, val) => {
  // console.log(val);

  if (val * 1 > Tours.length) {
    return res.status(404).json({
      status: "fail",
      messge: "No data found",
    });
  }
  next();
};

exports.CheckBody = (req, res, next) => {
  if (!req.body.productName || !req.body.price) {
    return res.status(400).json({
      status: "fail",
      messgae: "Body doesn't contain either name or price please check",
    });
  }
  next();
};
