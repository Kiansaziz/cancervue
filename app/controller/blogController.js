


app.controller('blogCtrl', ['$scope', 'memberService', function($scope, memberService){
    $scope.fetch = function(){
		var members = memberService.read();
		members.then(function(response){
			$scope.members = response.data;
		});

		var members = memberService.readTbl();
		members.then(function(response){
			$scope.test = response.data;
		});
    }

    $scope.fbWhite = "fb-white.png";
    $scope.fbColor = "fb-colored.png";

    $scope.igWhite ="instagram-white.png";
    $scope.igColor = "instagram-colored.png";
    $scope.cancervueBottom = "cancervue-white-bottom.png";

    $scope.fb="https://www.facebook.com/cancervue/";
    $scope.ig= "https://www.instagram.com/cancervue/";

}]);
    