// what is nodejs?

// What is runtime environment?
// v8 engine -> chrome  + libuv -> asynchronous i/o

// variable, data types, loop , functions , if else
// DOM, Fetch, Promise, console.log()

// window, document, alert, prompt, confirm,

// console.log(global)

// function(module, exports, require, __dirname, __filename){

// }

// Why modules??
// SOC

// custom module
// in-built module
// third-party modules

// import sum from "./math.js";

// const math = require("math.js");
// const os = require("os")
// import { divide } from "./math.js";

// es6 module
// commonjs

/* javascript
// Node.js is a runtime environment for executing JavaScript code server-side.

// Runtime Environment: Node.js uses the V8 JavaScript engine (the core of Google Chrome) plus the libuv library for asynchronous I/O operations, making it efficient for building scalable network applications.

// Non-blocking I/O: Node.js operates on a single-threaded event loop, using non-blocking I/O calls, allowing it to handle thousands of concurrent connections without incurring the cost of thread context switching.

// First-class JavaScript Support: Node.js allows you to write server-side code using JavaScript, providing a unified language for both server and client-side scripts.

// npm: Node.js comes with npm (Node Package Manager), the largest ecosystem of open source libraries that you can use in your project, making it easy to add functionality.

// Module System: Node.js supports module-based architecture, which encourages separation of concerns through reusable code modules. It supports both CommonJS modules and ES6 modules, allowing for better code organization.

// Built-in Modules: Node.js provides a rich set of built-in modules (e.g., fs for file system operations, http for networking) that require no external dependencies, facilitating rapid development of applications.

// Asynchronous and Event-Driven: All APIs of Node.js library are asynchronous, that is, non-blocking. It essentially means a Node.js-based server never waits for an API to return data, using events to trigger callbacks when data is ready.

// Global Objects: Unlike browser JavaScript, Node.js has different global objects available (e.g., global, process) for various global functionalities and configuration.

// Environment Variables: Node.js provides an easy way to configure your application's settings through environment variables, accessible via the process.env object, allowing for more secure and flexible configurations.

*/

// const os = require("os")

// console.log(os.hostname())
// console.log(os.platform())
// console.log(os.version())
// console.log(os.arch())
// console.log(os.cpus().length)
// console.log(os.freemem())
// console.log(os.totalmem())
// console.log(os.homedir())

const path = require("path");

// console.log(path.sep)
// /User/ahsaan/Desktop/js5/index.js
// console.log(path.dirname("/User/ahsaan/Desktop/js5/index.js"));
// console.log(path.basename("/User/ahsaan/Desktop/js5/index.js"));
// console.log(path.extname("/User/ahsaan/Desktop/js5/index.html"));

// js5/server/index.html

// ./js5/server/../server/../../js5/server/index.html
// ./js5/server/index.html

// relative path
// console.log(
//     path.join(
//         "./js5",
//         "server",
//         "..",
//         "server",
//         "..",
//         "..",
//         "js5",
//         "server",
//         "index.html"
//     )
// );

// absolute path

// /user/ahsaan/Desktop/js5/server/index.html
// console.log(path.resolve("index.html"));
// console.log(path.resolve())

const fs = require("fs");

console.log("Before reading file");
let result = fs.readFile("./sample.txt", "utf8", (err, data) => {
    //silently fail
    if (err) throw err;

    console.log(data);
});

fs.writeFile("./files/sample.txt", "With some more data.", {
    flag : "a"
}, (err) => {

});
// fs.appendFileSync("./sample.txt", "With some more and more data.");
// fs.unlinkSync("./sample.txt");

// console.log(result);

// if(fs.existsSync("./files")){
//     fs.rmdirSync("./files")
// }

// let result = fs.readdirSync("./files", { withFileTypes: true });

// console.log(
//     result.forEach((file) => {
//         if(file.isDirectory()){

//         }
//     })
// );

// fs.copyFileSync("./files/index.txt", "./files/second.txt")
// fs.renameSync("./files/index.txt", "./files/first.txt")

// fs.cpSync()

// fs.mkdirSync("./files/subfiles/subsubfiles", {
//     recursive : true
// })
// fs.rmdirSync("./", {
//     // recursive: true,
// });

// callback
// Promise
//  then/catch
// async await

console.log("After  reading file");
