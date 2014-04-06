/**
 * Module Dependencies
 */
 
var restify = require('restify');
var home = require('../resources/home');

function start() {
	function respond(req, res, next) {
		res.send('hello ' + req.params.name + '\n');
	}
	
	var server = restify.createServer();
	server.pre(restify.pre.userAgentConnection());
	server.get('/', home.getHome);
	server.get('/teams/:teamId', respond);
	server.post('/teams/:teamId/:playerId', respond);
	server.get('/players/:playerId', respond);

	server.listen(8080, function() {
		console.log('%s listening at %s', server.name, server.url);
	});
}

exports.start = start;