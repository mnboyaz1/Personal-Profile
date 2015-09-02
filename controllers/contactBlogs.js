var controller = function(app, express) {
	var self = this;
	
	self.init = function() {
		self.route = express.Router();
		
		// Declare contact blogs route 
		self.route.get('/', function(req,res) {
			app.models.contactBlog.get(req.body, function(data) {
				res.status(data.status).send(data.message)
			});
		})

		// Declare contact Blog w/Id route 
		self.route.get('/:contactId', function(req,res) {
			app.models.contactBlog.find(req.params.contactId, function(data){
				res.status(data.status).send(data.message)
			});

		})
		
		self.route.post('/', function(req, res){
			app.models.contactBlog.post(req.body, function(data) {
				res.status(data.status).send(data.message)
			});
		})
		
		self.route.patch('/:contactId', function(req, res){
			app.models.contactBlog.patch(req.params.contactId,req.body, function(data){
				res.status(data.status).send(data.message)
			});
		})
		
		self.route.put('/:contactId', function(req, res){
			app.models.contactBlog.put(req.params.contactId,req.body, function(data){
				res.status(data.status).send(data.message)
			});
		})
		
		self.route.delete('/:contactId', function(req, res){
			app.models.contactBlog.delete(req.params.contactId,req.body, function(data){
				res.status(data.status).send(data.message)
			});
		})
		
		// Tell the app to use this route
		app.use('/contactBlogs',self.route)
		
	}
}
module.exports = controller;