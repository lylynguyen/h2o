angular.module('myApp.editContact', [])
  .controller('editContactController', function ($scope, $routeParams) {
  $scope.index = $routeParams.index;
  $scope.currContact = $scope.contacts[$scope.index];
});
