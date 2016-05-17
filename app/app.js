var myApp = angular.module('myApp', [
  'myApp.main',
  'myApp.contactInfo',
  'myApp.addContact',
  'myApp.editContact',
  'myApp.services',
  'ngRoute'
  ]
)

  .config(function ($routeProvider, $locationProvider){
    $routeProvider
      .when('/home', {
        templateUrl: 'app/views/default.html',
        controller: 'mainController'
      })
      .when('/contactInfo/:index', {
      templateUrl: 'app/views/contactInfo.html',
      controller: 'contactInfoController'
      })
      .when('/add', {
        templateUrl: 'app/views/addContact.html',
        controller: 'addContactController'
      })
      .when('/edit/:index', {
        templateUrl: 'app/views/addContact.html',
        controller: 'editContactController'
      })
      .otherwise({redirectTo: '/home'});
  })
