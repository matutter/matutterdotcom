var server = require("./server");
var router = require("./router");
var requestHandlers= require("./requestHandlers");

var handle = {}
handle[""] 		= requestHandlers.wake;
handle["wake"] 	= requestHandlers.wake;
handle["css/bootstrap.min.css"] = requestHandlers.css;
handle["css/main.css"]	= requestHandlers.css;
handle["favicon.ico"]	= requestHandlers.favicon;
handle["navbar.gif"]	= requestHandlers.gif;
handle["css/header.jpg"]	= requestHandlers.jpg;
handle["mat.png"]	= requestHandlers.png;
handle["js/holder.js"]	= requestHandlers.js;

server.wake(router.route, handle);