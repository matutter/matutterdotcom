var fs  = require("fs");
var formidable = require("formidable");

function wake(response) {
	console.log("Hdl - wake");
	fs.readFile('index.html', function(err, html) {
		response.writeHead(200, {"Content-Type":"text/html"});
		response.write(html);
		response.end();	
	});
}

function main(response) {
	fs.readFile('main.css', function(err, css) {
		response.writeHead(200, {"Content-Type":"text/css"});
		response.write(css);
		response.end();	
	});
}

function bootstrap(response) {
	fs.readFile('bootstrap.min.css', function(err, css) {
		response.writeHead(200, {"Content-Type":"text/css"});
		response.write(css);	
		response.end();
	});
}


exports.wake = wake;
exports.bootstrap = bootstrap;
exports.main = main;