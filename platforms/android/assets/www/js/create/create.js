angular.module("app").controller("CreateCtrl", function($scope, $log,LocationService,MagazzinoService){

$log.debug("CreateCtrl");

$scope.categoria={};

$scope.aggiungiCategoria = function(categoria){
  categoria.id=_p8();
  $log.debug("id"+categoria.id);
  MagazzinoService.aggiungiCategoria(categoria);
  LocationService.home();
}


$scope.home= function(){
  LocationService.home();
}


function _p8() {
  return (Math.random().toString(16)+"000000000").substr(2,8);
}


});
