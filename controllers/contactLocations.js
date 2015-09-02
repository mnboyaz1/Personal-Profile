var controller = function(app, express) {
	var self = this;
	
	self.init = function() {
		self.route = express.Router();
		
		// Declare contact locations route 
		self.route.get('/', function(req,res) {
			app.models.contactLocation.get(req.body, function(data) {
				res.status(data.status).send(data.message)
			});
		})

		// Declare contact bio w/Id route 
		self.route.get('/:contactId', function(req,res) {
			app.models.contactLocation.find(req.params.contactId, function(data){
				res.status(data.status).send(data.message)
			});

		})
		
		self.route.post('/', function(req, res){
			app.models.contactLocation.post(req.body, function(data) {
				res.status(data.status).send(data.message)
			});
		})
		
		self.route.patch('/:contactId', function(req, res){
			app.models.contactLocation.patch(req.params.contactId,req.body, function(data){
				res.status(data.status).send(data.message)
			});
		})
		
		self.route.put('/:contactId', function(req, res){
			app.models.contactLocation.put(req.params.contactId,req.body, function(data){
				res.status(data.status).send(data.message)
			});
		})
		
		self.route.delete('/:contactId', function(req, res){
			app.models.contactLocation.delete(req.params.contactId,req.body, function(data){
				res.status(data.status).send(data.message)
			});
		})
		
		// Tell the app to use this route
		app.use('/contactLocations',self.route)
		
	}
}
module.exports = controller;