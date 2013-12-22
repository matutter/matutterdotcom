function route(handle, path, response, request) {
	console.log("Act - "+path);
	if (typeof handle[path] === 'function') {
		return handle[path](response, request, path);
	} else {
		console.log("**NoH - "+path);
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write("404 Not found.");
		response.end();
	}
}

exports.route = route;