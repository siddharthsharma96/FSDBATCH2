const fs = require("fs");
const http = require("http");
const url = require("url");
const replaceTemplates = require("./modules/replaceTemplates");

// Synchronous
// const readFileData = fs.readFileSync("./txt/read-this.txt", "utf-8");
// console.log(readFileData);

// fs.writeFileSync(
//   "./txt/output.txt",
//   `Hello siddharth this side: \n ${readFileData}`,
//   "utf-8"
// );

// console.log("file read successfully");

// // Non-blocking

// fs.readFile("./txt/read-this.txt", "utf-8", (err, data) => {
//   if (err) return console.log("Error 💥:", err);
//   console.log("1", data);
//   fs.readFile("./txt/append.txt", "utf-8", (err1, data1) => {
//     if (err) return console.log("Error 💥:", err1);
//     fs.readFile("./txt/final.txt", "utf-8", (err2, data2) => {
//       if (err) return console.log("Error 💥:", err2);
//       fs.readFile("./txt/index.json", "utf-8", (err3, data3) => {
//         if (err) return console.log("Error 💥:", err3);
//         console.log(data3);

//         fs.writeFile(
//           "./txt/output.txt",
//           `file 1data:\n${data1}\nfile2 data\n${data}\nfile3 data\n${data2}\nJson Data \n ${data3} \n This is a new data`,
//           "utf-8",
//           (err) => {
//             if (err) return console.log("Error 💥:", err);
//             console.log("File saved succesfully");
//           }
//         );
//       });
//     });
//   });
// });

// console.log("asgfasdgjsdhg");

// Status Code
// 1:Providing Some Information
// 2:Success
// 3:Redirection
// 4:Client Error
// 5:Server Error

// step 1:read all the file data
const overview = fs.readFileSync("./templates/overview.html", "utf-8");
const product = fs.readFileSync("./templates/product.html", "utf-8");
const data = fs.readFileSync("./dev-data/data.json");
const card = fs.readFileSync("./templates/card.html", "utf-8");
const data_obj = JSON.parse(data);
// console.log(data_obj);

// Step 2 : Create server
const server = http.createServer((req, res) => {
  // console.log(req.url);
  // step 4 : define the paths according to our requirement
  const { query, pathname } = url.parse(req.url, true);
  console.log(query, pathname);
  if (req.url === "/" || pathname === "/overview") {
    res.writeHead(200, {
      "Content-type": "text/html",
    });
    // step 5: replace the values with our json data
    const cardHtml = data_obj.map((el) => replaceTemplates(card, el)).join("");
    // console.log(cardHtml);

    const output = overview.replace("{%PRODUCT_CARDS%}", cardHtml);

    res.end(output);
  } else if (pathname === "/product") {
    res.writeHead(200, {
      "Content-type": "text/html",
    });
    const productDetail = data_obj[query.id];
    const output = replaceTemplates(product, productDetail);
    res.end(output);
  } else if (pathname === "/api") {
    res.writeHead(200, {
      "Content-type": "application/json",
    });
    res.end(data);
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
    });
    res.end(`<h1>Page not found</h1>`);
  }
});

// step 3: start the server
const PORT_NO = 8000;
server.listen(PORT_NO, "127.0.0.1", () => {
  console.log("server started on port ", PORT_NO);
});
