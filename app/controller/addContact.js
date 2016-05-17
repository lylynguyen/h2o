angular.module('myApp.addContact', [])
  .controller('addContactController', function($scope, $location){
  this.path = $location.path();

  this.addContact = function () {
    var contact = this.currContact;
    contact.id = this.contacts.length;
    this.contacts.push(contact);
  };
})
