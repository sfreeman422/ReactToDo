module.exports = function(app, passport){
	//Initial route to load the page.  
	app.get('/', function(req, res){
		res.sendFile('../../public/index.html');
	});

	//Post route for the entry of tasks
	app.post('/api/task', function(req, res){
		console.log(req.body);
		res.end();
	})

}


