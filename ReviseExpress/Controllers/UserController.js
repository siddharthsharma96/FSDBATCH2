exports.getuser = (req, res) => {
  return res.status(200).json({
    status: "Success",
    total: 9,
    data: {
      tours: "Hello this route belongs to user",
    },
  });
};
