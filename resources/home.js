function home(req, res) {
    console.log("Request handler 'home' was called.");
    var serverUrl = 'http://' + process.env.IP + ':' + process.env.PORT;
	res.json(200, 
		[
			{
				uri: serverUrl + '/teams',
				mediaType: 'application/vnd.ffdraft.teams+json',
				rel: 'http://relations.ffdraft.com/teams'
			},
			{
				uri: serverUrl + '/players',
				mediaType: 'application/vnd.ffdraft.players+json',
				rel: 'http://relations.ffdraft.com/players'
			}
		]
	);
}

exports.home = home;