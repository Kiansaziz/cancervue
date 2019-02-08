'use strict';

app.controller('contactCtrl' , ['$scope', 'memberService', function($scope, memberService){
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

    $scope.pageClass = 'page-contact';

   

    $scope.fbWhite = "fb-white.png";
    $scope.fbColor = "fb-colored.png";

    $scope.igWhite ="instagram-white.png";
    $scope.igColor = "instagram-colored.png";
    $scope.cancervueBottom = "cancervue-white-bottom.png";

      $scope.ph_numbr = /^\+?\d{10}$/;
        $scope.eml_add = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;


    $scope.fb="https://www.facebook.com/cancervue/";
    $scope.ig= "https://www.instagram.com/cancervue/";
}]);
