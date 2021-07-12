//Built-in Modules
//os, path, fs, http

//OS Module
const os = require("os");

//info about current user
const user = os.userInfo();
console.log(user);

//method returns system uptime in seconds
console.log(`The System updtime is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  reeMem: os.freemem(),
};

console.log(currentOS);
