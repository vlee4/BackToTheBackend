/*
GLOBALS = NO WINDOW
- variables available all throughout node env

__dirname = path to current directory
__filename = file name
require = function to use modules (CommonJS)
module = info about current module (file)
process = info about env where the program is being executed
console
setInterval
clearTimeout
*/

setInterval(() => {
  console.log("hello world");
}, 1000);
