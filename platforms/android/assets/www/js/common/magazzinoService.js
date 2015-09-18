angular.module("app")
.factory("MagazzinoService", function($log, $window, $firebaseArray, AuthService){

    var prodotti = AuthService.getProdotti();
    var categorie = AuthService.getCategorie();
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
      },
      getCategoria : function(){
        return categorie;
      },
      aggiungiCategoria : function(categoria){
        return categorie.$add(angular.copy(categoria));
      },
      cancellaCategoria : function(id){
        $log.debug("id:"+id);
        for (var key in categorie){
         $log.debug("categorie id:"+categorie[key].id);
         if(id==categorie[key].id){
           categorie.$remove(categorie[key]);
         }
        }
      },
      getNameCategoria : function(id){
        $log.debug("id:"+id);
        for (var key in categorie){
         $log.debug("categorie id:"+categorie[key].id);
         if(id==categorie[key].id){
           return categorie[key].titolo;
         }
        }
      }
    };
});
