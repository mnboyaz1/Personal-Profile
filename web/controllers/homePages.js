var controller = function(app, express) {
	var self = this;
	
	self.init = function() {
		self.route = express.Router();
	
		self.route.get('/', function(req, res) {
	
			res.render('home',{title:"My Profile"});
		});
		
		self.route.get('/blogs', function(req,res){
			res.render('blogs',{title:"Blog Page"});
		});
		
		self.route.get('/skills', function(req,res){
			res.render('skills',{title:"Skills"});
		});
		

		// Tell the app to use this route
		app.use('/',self.route)
		
	}
}
module.exports = controller;