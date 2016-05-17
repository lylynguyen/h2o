angular.module('myApp.directives', [])

.directive('contact', function() {
  return {
    restrict: 'AE',
    templateUrl: 'views/contact.html'
  }
});
