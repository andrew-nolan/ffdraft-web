function getHome(request, response, next) {
	response.json(200, 
		{
			links: [
				{
					uri: 'http://localhost:8080/teams/',
					mediaType: 'application/vnd.ffdraft+json',
					rel: 'http://relations.ffdraft.com/teams'
				},
				{
					uri: 'http://localhost:8080/players/',
					mediaType: 'application/vnd.ffdraft+json',
					rel: 'http://relations.ffdraft.com/players'
				}
			]
		});
}

exports.home = getHome;