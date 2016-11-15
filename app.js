(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', function ($scope) {

  $scope.check = function () {
    var strArray;

    strArray = $scope.lunch_txt.split(",");

    if(strArray.length >1 && strArray.length<=3){
          $scope.message = "Enjoy!";
    } else if(strArray.length >=3){
          $scope.message = "Too much!";
    } else if($scope.lunch_txt ==="" ){
      $scope.message = "Please enter data first";
    }


  };
});
})();
