const EventEmitter = require("events");
// const emitter = new EventEmitter();

const url = "http://mylogger.io/log";

class Logger extends EventEmitter {
  log(message) {
    //Send HTTP Req
    console.log(message);

    //Raises event called messageLogged with the second param as an event argument
    //this will refer to the instance of the EventEmitter
    this.emit("messageLogged", { id: 1, url: "http://" });
  }
}

//can export a specific function or an entire object
// module.exports.log = log;
module.exports = Logger;
