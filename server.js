var status	= "Online";
var http	= require('http');
var url		= require('url');

function wake(route, handle) {
	function onRequest(request, response) {
		var postData = "";
		var pathname = url.parse(request.url).pathname;
		console.log("Req - "+pathname);
		route(handle, pathname, response, request);
}

http.createServer(onRequest).listen(8888);
console.log("Server "+status);
}

exports.wake = wake;
