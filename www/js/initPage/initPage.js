angular.module("app").controller("InitPageCtrl", function($scope, $log, LocationService,MagazzinoService){



$scope.pageCategoria = function(id){
  $log.debug("id"+id);
  LocationService.categoria(id);
};

$scope.goCreaCategoria = function(){
  LocationService.nuovaCategoria();
};

$scope.getAllCategorie = function(){

  var categorie = MagazzinoService.getCategoria();
  $log.debug(categorie);
  return categorie;
};

$scope.goCancellaCategoria = function(){
  LocationService.goCancellaCategoria();
};



});
