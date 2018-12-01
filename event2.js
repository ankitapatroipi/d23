var events = require('events');

var eventEmitter = new events.EventEmitter();

var f1 = function () 
{     
	console.log("Test Event is happens.");
};

eventEmitter.on("TestEvent", f1);

eventEmitter.emit("TestEvent");



// JavaScript source code

