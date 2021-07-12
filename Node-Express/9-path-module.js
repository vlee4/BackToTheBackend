//PATH module
const path = require("path");

console.log(path.sep); //path separator

//Join stictches together sequences with path separator
const filePath = path.join("/content", "subfolder", "test.txt");
console.log("filepath", filePath);

const base = path.basename(filePath);
console.log(base);

//accepts a sequence or path and resolve returns an abs path; helpful for running projects in different environments that use different path separating delimiters
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log("abs", absolute);
