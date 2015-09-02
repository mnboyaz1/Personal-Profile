var controller = function(app, express) {
	var self = this;
	
	self.init = function() {
		self.route = express.Router();
		
		// Declare contact numbers route 
		self.route.get('/', function(req,res) {
			app.models.contactNumber.get(req.body, function(data) {
				res.status(data.status).send(data.message)
			});
		})

		// Declare contact numbers w/Id route 
		self.route.get('/:contactId', function(req,res) {
			app.models.contactNumber.find(req.params.contactId, function(data){
				res.status(data.status).send(data.message)
			});

		})
		
		self.route.post('/', function(req, res){
			app.models.contactNumber.post(req.body, function(data) {
				res.status(data.status).send(data.message)
			});
		})
		
		self.route.patch('/:contactId', function(req, res){
			app.models.contactNumber.patch(req.params.contactId,req.body, function(data){
				res.status(data.status).send(data.message)
			});
		})
		
		self.route.put('/:contactId', function(req, res){
			app.models.contactNumber.put(req.params.contactId,req.body, function(data){
				res.status(data.status).send(data.message)
			});
		})
		
		self.route.delete('/:contactId', function(req, res){
			app.models.contactNumber.delete(req.params.contactId,req.body, function(data){
				res.status(data.status).send(data.message)
			});
		})
		
		// Tell the app to use this route
		app.use('/contactNumbers',self.route)
		
	}
}
module.exports = controller;