module.exports = function(app, passport){
	//Initial route to load the page.  
	app.get('/', function(req, res){
		res.sendFile('../../public/index.html');
	});

	//Route to get all tasks for a specific user. 
	app.get("/api/tasks", function(req, res){
		var tasks = ["Do a thing", "Do another thing", "Do some more things"];
		console.log(req.body); 
		res.json(tasks);
	});

	//Post route for the entry of tasks
	app.post('/api/tasks', function(req, res){
		console.log(req.body);
		res.end();
	});

	//Put route for update of tasks.
	app.put('/api/tasks', function(req, res){
		console.log(req.body);
		res.end();
	});

	//Delete route for deletion of tasks. 
	app.delete('/api/tasks', function(req, res){
		console.log(req.body);
		res.end();
	});
}


