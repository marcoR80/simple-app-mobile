angular.module("app").controller("IgieneCasaCtrl", function($scope, $log,LocationService,MagazzinoService){

$log.debug("IgieneCasaCtrl");

$scope.igiene={};

$scope.home= function(){
  LocationService.home();
}

$scope.addIgiene = function(igiene){
  $log.debug("name:"+igiene.name);
  $log.debug("quantita:"+igiene.quantita);
  igiene.tipo='I';
  igiene.id=igiene.tipo+"_"+igiene.name+"_"+igiene.quantita;
  MagazzinoService.add(igiene);
};

$scope.getIgiene = function(){
  var igiene = MagazzinoService.get('I');
  $log.debug("Igiene:"+igiene.lenght);
  return igiene;
};

$scope.remove = MagazzinoService.remove;
$scope.plus = MagazzinoService.plus;
$scope.minus = MagazzinoService.minus;

});
