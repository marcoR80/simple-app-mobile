angular.module("app")
.factory("MagazzinoService", function($log, $window, $firebaseArray){

  var ref = new Firebase("https://vivid-torch-1065.firebaseio.com/magazzino");
   var prodotti = $firebaseArray(ref);

     $log.debug("prodotti:"+prodotti);

    //var prodotti =   JSON.parse($window.localStorage['magazzino']) || [];
    return {
        get : function(tipo){

          $log.debug("get prodotti:"+angular.toJson(prodotti));

          var res=[];
          $log.debug("tipo"+tipo);
          for (var key in prodotti){
            $log.debug("prodotto"+prodotti[key]);
            if(tipo==prodotti[key].tipo){
              res.push(prodotti[key]);
            }
          }
          return res;
        },
        add : function(prodotto){
            prodotti.$add(angular.copy(prodotto));
        },
        remove : function(id){
         $log.debug("id:"+id);
         for (var key in prodotti){
          $log.debug("prodotto id:"+prodotti[key].id);
          if(id==prodotti[key].id){
              prodotti.$remove(prodotti[key]);
          }
         }
        },
        minus : function(id){
          $log.debug("id:"+id);
         for (var key in prodotti){
          $log.debug("prodotto id:"+prodotti[key].id);
          if(id==prodotti[key].id){
            prodotti[key].quantita--;
            if(prodotti[key].quantita==0){
              prodotti.$remove(prodotti[key]);
            }
            prodotti.$save(prodotti[key]);
          }
        }
      },
        plus : function(id){
          $log.debug("id:"+id);
         for (var key in prodotti){
           $log.debug("prodotto id:"+prodotti[key].id);
          if(id==prodotti[key].id){
           var prod=prodotti[key];
           prodotti[key].quantita++;
           prodotti.$save(prodotti[key]);
         }

        }
       }
    };
});
