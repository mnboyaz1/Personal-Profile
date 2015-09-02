var model = function(db) {
	var self = this;
	self.table = 'contact_blogs';
	
	self.find = function(id, callback) {
		// Execute SQL Query
		var query='select * from ?? where id = ? limit 1 ';
		var params=[ 
			self.table,
			id
		]
		db.query(query,params,function(err,data) { 
			// Send data using callback(data)
			if (err)
				callback({status:400,message:err.message})
			else if (!data.length)
				callback({status:404,message:"Not found"})
			else
				callback({status:200,message:data[0]})
		})
			
	}
	
	self.get = function(data,callback) {
		//Execute Query
		var query = 'select * from ??';
		var params=[
			self.table
		]
		db.query(query,params, function(err,data){
			//send data using callback(data)
			if(err)
				callback({status:400,message:err.message})
			else if (!data.length)
				callback ({status:404,message:"Not Found"})
			else 
				callback({status:200,message:data})
		})
	}
	
	self.post = function(data,callback) {
		// Execute SQL Query
		var query = "insert into contact_blogs set ?";
	
		db.query(query,data,function(err, data){
			if (err)
				callback({status:400, message:{error:err.message}})
			else if (data.insertId == undefined)
				callback({status:400, message:{error:"MYSQL ERROR"}})
			else {
				self.find(data.insertId,function(response) {
					callback(response)
				})
			}
		})
	}
	
	self.patch = function(contactId,data,callback) {
		// Execute SQL Query
		var query = 'update contact_blogs set ? where id = ?';
		var params=[ 
			data,
			contactId
		]
		console.log(db.format(query,params))
		db.query(query,params,function(err, data){
			if (err)
				callback({status:400, message:{error:err.message}})
			else if (data.insertId == undefined)
				callback({status:400, message:{error:"MYSQL ERROR"}})
			else {
				self.find(insertId,function(response){
					callback(response)
				})
			}
		})
	}
	
	self.put = function(contactId,data,callback){
		//Execute sql query
		var query = 'update contact_blogs set ? where id = ?';
		var params=[
			data,
			contactId
		]

		db.query(query,params,function(err,data){
			if (err)
				callback({status:400, message:{error:err.message}})
			else if (data.insertId == undefined)
				callback({status:400, message:{error:"MYSQL ERROR"}})
			else {
				self.find(insertId,function(response){
					callback(response)
				})
			}	
		})
	}
	
	self.delete = function(contactId,data,callback){
		//Execute sql query
		
		var query = 'delete from contact_blogs where id = ? limit 1';
		var params=[
			contactId,
		]
		console.log(db.format(query,params))
		db.query(query,params,function(err,data){
			if (err)
				callback({status:400, message:{error:err.message}})
			else if (data.insertId == undefined)
				callback({status:400, message:{error:"MYSQL ERROR"}})
			else {
				callback({status:202,message:"Contact Blog Deleted"})
			}
		})
	}

}
module.exports = model;