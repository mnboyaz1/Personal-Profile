skillsApp.controller("skillsController",function($scope,$http){
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
		});
});