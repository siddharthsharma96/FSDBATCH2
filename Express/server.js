const app = require("./index");

const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

console.log(process.env.NODE_ENV);

// 4.Server

const PORT_NO = process.env.PORT_N || 8000;
app.listen(PORT_NO, () => {
  console.log("Server started on ", PORT_NO);
});
