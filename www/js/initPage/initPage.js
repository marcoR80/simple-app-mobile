angular.module("app").controller("InitPageCtrl", function($scope, $log, LocationService){

$log.debug("init");

window.localStorage['name'] = 'Max';

var name = window.localStorage['name'] || 'you';

$log.debug("name:"+name);

$scope.pageVini = function(){
  LocationService.vini();
};

$scope.pageBibite = function(){
  LocationService.bibite();
};

$scope.pageAlimentari = function(){
  LocationService.alimentari();
};

$scope.pageIgieneCasa = function(){
  LocationService.igieneCasa();
};

$scope.pageIgienePers = function(){
  LocationService.igienePers();
};

});
