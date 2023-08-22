const fs = require("fs");

let filePath1 = "./file/为学.md";
let filePath2 = "./file/观书有感.md";

let p1 = new Promise((resolve, reject) => {
  fs.readFile(filePath1, (err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  });
});

let p2 = new Promise((resolve, reject) => {
  fs.readFile(filePath2, (err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  });
});

p1.then((value) => {
  console.log(vlaue.toString());
  return p2;
}).then((value) => {
  console.log(value.toString());
});
