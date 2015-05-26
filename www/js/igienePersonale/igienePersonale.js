angular.module("app").controller("IgienePersCtrl", function($scope, $log,LocationService,MagazzinoService){

$log.debug("IgieneCasaCtrl");

$scope.igiene={};

$scope.home= function(){
  LocationService.home();
}

$scope.addIgieneP = function(igiene){
  $log.debug("name:"+igiene.name);
  $log.debug("quantita:"+igiene.quantita);
  igiene.tipo='IP';
  igiene.id=igiene.tipo+"_"+igiene.name+"_"+igiene.quantita;
  MagazzinoService.add(igiene);
};

$scope.getIgieneP = function(){
  var igiene = MagazzinoService.get('IP');
  $log.debug("Igiene:"+igiene.lenght);
  return igiene;
};

$scope.remove = MagazzinoService.remove;
$scope.plus = MagazzinoService.plus;
$scope.minus = MagazzinoService.minus;

});
