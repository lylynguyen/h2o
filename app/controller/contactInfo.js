angular.module('myApp.contactInfo', [])
  .controller('contactInfoController', function ($scope, $routeParams) {
  var index = $routeParams.index;
  $scope.curr = $scope.contacts[index];
});
