const fs = require('fs')
let filePath = './file/为学.md'

new Promise((resolve, reject) => {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      reject(err)
    } else {
      resolve(data)
    }
  })
}).then(value => {
  console.log(value.toString());
}, reason => {
  console.log(reason);
})