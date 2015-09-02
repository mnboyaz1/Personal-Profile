mainApp.controller("mainController",function($scope,$http){
		$scope.skills=[];
		$scope.contacts=[];
		$scope.bios=[];
		$scope.blogs=[];
		$scope.locations=[];
		$scope.numbers=[];
		
		$http.get('http://localhost:3000/contactSkills')
		  .success(function(response){
		  $scope.contactSkills=response;
		  $scope.pageName="Developer Skills";
		});
		
		$http.get('http://localhost:3000/contacts')
		  .success(function(response){
		  $scope.contacts=response;
		});
		
		$http.get('http://localhost:3000/contactBios')
		  .success(function(response){
		  $scope.bios=response;
		});
		
		$http.get('http://localhost:3000/contactLocations')
		  .success(function(response){
		  $scope.locations=response;
		});
		
		$http.get('http://localhost:3000/contactNumbers')
		  .success(function(response){
		  $scope.numbers=response;
		});
		
		$http.get('http://localhost:3000/contactBlogs')
		  .success(function(response){
		  $scope.blogs=response;
		  $scope.blogPageName="'Living Life' Blogs";
		});
		
		$scope.createBlog = function() {
		  $http.post('http://localhost:3000/contactBlogs', $scope.blogData)
		    .success(function(response) {
			  $scope.blogData = []; //clear form after post
			  $scope.blogs = response;
			  console.log("posting complete");
			}).error(function(repsonse) {
			  console.log("error while posting");
			})
		};
});