require('http').createServer( function(request, response) {
	response.writeHead(200,{'Content-Type':'text/plain'});
	response.write('<div class="status">Server Online</div>')
	response.end();
}).listen(8888);

console.log("server up!");