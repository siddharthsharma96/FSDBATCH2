const app = require("./index");

// 4.Server

const PORT_NO = 8000;
app.listen(PORT_NO, () => {
  console.log("Server started on ", PORT_NO);
});
