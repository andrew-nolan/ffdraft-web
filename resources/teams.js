function getAllTeams(req, res) {
    console.log("Request handler 'Get All Teams' was called.");
    var serverUrl = 'http://' + process.env.IP + ':' + process.env.PORT;
	res.json(200, 
		{
			teams: [
				{
					name: "House of Cards",
					id: "1",
					maximumBid: "184",
					numberOfPlayers: "0",
					self: {
						uri: serverUrl + '/teams/1',
						mediaType: 'application/vnd.ffdraft.team+json',
						rel: 'self'
					}
				},
				{
					name: "The Express",
					id: "2",
					maximumBid: "184",
					numberOfPlayers: "0",
					self: {
						uri: serverUrl + '/teams/2',
						mediaType: 'application/vnd.ffdraft.team+json',
						rel: 'self'
					}
				}
			]
		});
}

exports.getAllTeams = getAllTeams;