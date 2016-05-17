angular.module('myApp.editContact', [])
  .controller('editContactController', function ($scope, $routeParams){
  this.index = $routeParams.index;
  this.currContact = this.contacts[this.index];
})
