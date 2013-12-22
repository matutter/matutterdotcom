var fs  = require("fs");
var formidable = require("formidable");

function wake(response) {
	console.log("\n**NEW CON");
	fs.readFile('index.html', function(err, html) {
		response.writeHead(200, {"Content-Type":"text/html"});
		response.write(html);
		response.end();	
	});
}

function css(response, request, path) {
	fs.readFile(path, function(err, css) {
		response.writeHead(200, {"Content-Type":"text/css"});
		response.write(css);
		response.end();	
	});
}

function gif(response, request, path) {
	fs.readFile(path, function(err, gif) {
		response.writeHead(200, {"Content-Type":"image/gif"});	
		response.end(gif, 'binary');
	});
}

function jpg(response, request, path) {
	fs.readFile(path, function(err, jpg) {
		response.writeHead(200, {"Content-Type":"image/jpg"});	
		response.end(jpg, 'binary');
	});
}

function png(response, request, path) {
	fs.readFile('css/'+path, function(err, png) {
		if(err) console.log("**404 - "+path);
		response.writeHead(200, {"Content-Type":"image/png"});	
		response.end(png, 'binary');
	});
}

function js(response, request, path) {
	fs.readFile(path, function(err, js) {
		response.writeHead(200, {"Content-Type":"text/javascript"});	
		response.end(js);
	});
}

function favicon(response) {
	fs.readFile('favicon.ico', function(err, ico) {
		response.writeHead(200, {"Content-Type":"image/ico"});	
		response.end(ico, 'binary');
	});
}

exports.wake = wake;
exports.css = css;
exports.gif = gif;
exports.jpg	= jpg;
exports.png	= png;
exports.js	= js;
exports.favicon = favicon;