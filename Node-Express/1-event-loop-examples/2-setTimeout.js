// started operating system process
console.log("first");
//Added to event loop
setTimeout(() => {
  console.log("second");
}, 0);
console.log("third");
// completed and exited operating system process
