angular.module('myApp.contactInfo', [])
  .controller('contactInfoController', function($scope, $routeParams){
  var index = $routeParams.index;
  this.curr = $scope.contacts[index];
})
