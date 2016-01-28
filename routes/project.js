exports.viewProject = function(req, res){
	//controller codes
	var name = req.params.name;
	console.log("The project name is:" + name);
	//var viewProject = require();
	res.render('project',{
		'projectName': name
	});
}