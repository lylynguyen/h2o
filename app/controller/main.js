angular.module('myApp.main', [])
  .controller('mainController', function ($scope, ContactService) {
    $scope.contacts = ContactService.getContacts();
    $scope.remove = function (item) {
      var index = $scope.contacts.indexOf(item)
      $scope.contacts.splice(index, 1);
    };
  });
