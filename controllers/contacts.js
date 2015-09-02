var controller = function(app, express) {
	var self = this;
	
	self.init = function() {
		self.route = express.Router();
		
		// Declare contacts route 
		self.route.get('/', function(req,res) {
			app.models.contact.get(req.body, function(data) {
				res.status(data.status).send(data.message)
			});
		})

		// Declare contacts w/Id route 
		self.route.get('/:contactId', function(req,res) {
			app.models.contact.find(req.params.contactId, function(data){
				res.status(data.status).send(data.message)
			});

		})
		
		self.route.post('/', function(req, res){
			app.models.contact.post(req.body, function(data) {
				res.status(data.status).send(data.message)
			});
		})
		
		self.route.patch('/:contactId', function(req, res){
			app.models.contact.patch(req.params.contactId,req.body, function(data){
				res.status(data.status).send(data.message)
			});
		})
		
		self.route.put('/:contactId', function(req, res){
			app.models.contact.put(req.params.contactId,req.body, function(data){
				res.status(data.status).send(data.message)
			});
		})
		
		self.route.delete('/:contactId', function(req, res){
			app.models.contact.delete(req.params.contactId,req.body, function(data){
				res.status(data.status).send(data.message)
			});
		})
		
		// Tell the app to use this route
		app.use('/contacts',self.route)
		
	}
}
module.exports = controller;