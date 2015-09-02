var controller = function(app, express) {
	var self = this;
	
	self.init = function() {
		self.route = express.Router();
	
		self.route.get('/public', function(req, res) {
	
			res.render('index.jade',{title:"My Resume"});
		});
		
		

		// Tell the app to use this route
		app.use('/',self.route)
		
	}
}
module.exports = controller;