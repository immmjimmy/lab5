var data = require("../data.json");

exports.addFriend = function(request, response) {
	var name = request.query.name;
	var image = 'http://lorempixel.com/400/400/people';
	var description = request.query.description;

	response.render('index', {
		"data": data,
	});
});