module.exports = function(app, passport){
	//Initial route to load the page.  
	app.get('*', function(req, res){
		res.sendFile('../../public/index.html');
	});

	//
}


