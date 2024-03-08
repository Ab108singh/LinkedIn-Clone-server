const fs = require("fs/promises");

async function fileOps() {
    try {
        let result = await fs.readFile("./math.js", "utf8");
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

fileOps();
