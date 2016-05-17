angular.module('myApp.addContact', [])
  .controller('addContactController', function ($scope, $location) {
  $scope.path = $location.path();

  $scope.addContact = function () {
    var contact = $scope.currContact;
    contact.id = $scope.contacts.length;
    $scope.contacts.push(contact);
  };
});
