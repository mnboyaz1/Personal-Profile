blogApp.controller("blogController",function($scope,$http){
		$scope.blogData=[];
		$scope.blogs=[];

		//GET all current blogs on page load
		$http.get('http://localhost:3000/contactBlogs')
		  .success(function(response) {
		    $scope.blogs = response;
			$scope.pageName="Living Life Blogs";
		  });
		
		//POST new blog from form
		
		$scope.createBlog = function() {
		  $http.post('http://localhost:3000/contactBlogs', $scope.blogData)
		    .success(function(response) {
			  $scope.blogData = []; //clear form after post
			  $scope.blogs = response;
			});
		};
		
		
}