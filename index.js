var server = require("./server");
var router = require("./router");
var requestHandlers= require("./requestHandlers");


var handle = {}
handle["/"] 		= requestHandlers.wake;
handle["/wake"] 	= requestHandlers.wake;
handle["/bootstrap.min.css"] = requestHandlers.bootstrap;
handle["/main.css"]	= requestHandlers.main;
handle["/favicon.ico"] = requestHandlers.favicon;

server.wake(router.route, handle);