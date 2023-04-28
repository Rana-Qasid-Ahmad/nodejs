const http = require('http');
const fs = require('fs');
const path = require('path');
const data = require('./files/data');
const dirPath = path.join(__dirname, 'files');
const process = require('process');


var ans = process.argv[2];


if (ans === "qasid") {
    console.log(data[0]);
} else if (ans === "qasid2") {
    console.log(data[1]);
} else if (ans === "qasid3") {
    console.log(data[2]);
} else if (ans === "qasid4") {
    console.log(data[3]);
} else {
    console.log("Error Found")

}

// console.log(a);
// if (ans === "yes") {
//     console.log('yes');

// } else if (ans === "no") {
//     console.log('no');
// } else {
//     console.log(data);
// }




// http.createServer((res, resp) => {
//     resp.writeHead(200, { 'Content-Type': 'application/json' });
//     resp.write(JSON.stringify(data[1].Name));
//     resp.end()
// }).listen(8080);


// console.log(dirPath)

// fs.writeFileSync(`${dirPath}/data.js`, "This is fille");