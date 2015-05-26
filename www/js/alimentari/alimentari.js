angular.module("app").controller("AlimentariCtrl", function($scope, $log,LocationService,MagazzinoService){

$log.debug("AlimentariCtrl");

$scope.alimentari={};

$scope.home= function(){
  LocationService.home();
}

$scope.addAlimentari = function(alimentari){
  $log.debug("name:"+alimentari.name);
  $log.debug("quantita:"+alimentari.quantita);
  alimentari.tipo='A';
  alimentari.id=alimentari.tipo+"_"+alimentari.name+"_"+alimentari.quantita;
  MagazzinoService.add(alimentari);
};

$scope.getAlimentari = function(){
  var alimentari = MagazzinoService.get('A');
  $log.debug("vini:"+alimentari.lenght);
  return alimentari;
};

$scope.remove = MagazzinoService.remove;
$scope.plus = MagazzinoService.plus;
$scope.minus = MagazzinoService.minus;

});
