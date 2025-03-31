const fs = require("fs");

// Synchronous
const readFileData = fs.readFileSync("./txt/read-this.txt", "utf-8");
console.log(readFileData);

fs.writeFileSync(
  "./txt/output.txt",
  `Hello siddharth this side: \n ${readFileData}`,
  "utf-8"
);

console.log("file read successfully");

// Non-blocking

fs.readFile("./txt/read-this.txt", "utf-8", (err, data) => {
  if (err) return console.log("Error 💥:", err);
  console.log("1", data);
  fs.readFile("./txt/append.txt", "utf-8", (err1, data1) => {
    if (err) return console.log("Error 💥:", err1);
    fs.readFile("./txt/final.txt", "utf-8", (err2, data2) => {
      if (err) return console.log("Error 💥:", err2);
      fs.readFile("./txt/index.json", "utf-8", (err3, data3) => {
        if (err) return console.log("Error 💥:", err3);
        console.log(data3);

        fs.writeFile(
          "./txt/output.txt",
          `file 1data:\n${data1}\nfile2 data\n${data}\nfile3 data\n${data2}\nJson Data \n ${data3} \n This is a new data`,
          "utf-8",
          (err) => {
            if (err) return console.log("Error 💥:", err);
            console.log("File saved succesfully");
          }
        );
      });
    });
  });
});

console.log("asgfasdgjsdhg");

// Status Code
// 1:Providing Some Information
// 2:Success
// 3:Redirection
// 4:Client Error
// 5:Server Error
