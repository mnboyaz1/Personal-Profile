var controller = function(app, express) {
	var self = this;
	
	self.init = function() {
		self.route = express.Router();
		
		// Declare contact bios route 
		self.route.get('/', function(req,res) {
			app.models.contactBio.get(req.body, function(data) {
				res.status(data.status).send(data.message)
			});
		})

		// Declare contact bio w/Id route 
		self.route.get('/:contactId', function(req,res) {
			app.models.contactBio.find(req.params.contactId, function(data){
				res.status(data.status).send(data.message)
			});

		})
		
		self.route.post('/', function(req, res){
			app.models.contactBio.post(req.body, function(data) {
				res.status(data.status).send(data.message)
			});
		})
		
		self.route.patch('/:contactId', function(req, res){
			app.models.contactBio.patch(req.params.contactId,req.body, function(data){
				res.status(data.status).send(data.message)
			});
		})
		
		self.route.put('/:contactId', function(req, res){
			app.models.contactBio.put(req.params.contactId,req.body, function(data){
				res.status(data.status).send(data.message)
			});
		})
		
		self.route.delete('/:contactId', function(req, res){
			app.models.contactBio.delete(req.params.contactId,req.body, function(data){
				res.status(data.status).send(data.message)
			});
		})
		
		// Tell the app to use this route
		app.use('/contactBios',self.route)
		
	}
}
module.exports = controller;