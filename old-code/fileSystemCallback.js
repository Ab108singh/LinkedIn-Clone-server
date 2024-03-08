const fs = require("fs");

fs.readFile("./math.js", "utf-8", function (err, data) {
    if (err) throw err;
    console.log(data);
});
