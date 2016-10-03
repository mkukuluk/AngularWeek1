(function (){
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController',['$scope',LunchCheckController]);
   function LunchCheckController($scope){
    $scope.menu = "";
    $scope.calcItems = function(){
      var items = $scope.menu.split(',');
      $scope.clickNews = items.length;
      if(items[0]==("")){
        $scope.clickNew="Please enter data first";
      }
      else if(items.length > 3){
        $scope.clickNew="Too Much!";
      }
      else{
        $scope.clickNew="Enjoy!";
      }

    }

  }
}
)();
