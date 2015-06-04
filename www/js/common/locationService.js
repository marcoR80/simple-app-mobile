angular.module("app")
.factory("LocationService", function($location, $log){
    return {
      "alimentari" : function(path) {
        $location.path('/alimentari');
        },
        "vini" : function(){
          $location.path('/vini');
        },
        "home" : function(){
          $location.path('/initPage');
        },
        "igieneCasa" : function(){
          $location.path('/igieneCasa');
        },
        "bibite" : function(){
          $location.path('/bibite');
        },
        "igienePers" : function(){
          $location.path('/igienePers');
        },
        "nuovaCategoria" : function(){
          $location.path('/create');
        },
        "categoria" : function(id){
          $location.path('/categoria/'+id);
        },
        "goCancellaCategoria" : function(){
          $location.path('/cancellaCategoria');
        },
        "errorPage" : function(){
          $log.debug("error");
          $location.path('/error');
        },
        "start" : function(){
          $location.path('/home');
        }
    };

});
