angular.module('myApp.main', [])
  .controller('mainController', function($scope, ContactService){
    this.contacts = ContactService.getContacts();

    this.remove = function(item){
      var index = $scope.contacts.indexOf(item)
      this.contacts.splice(index, 1);
      this.removed = "Contact removed!"
    };
  }
