'use strict';
angular.module('leffenloffenApp')

  .controller('eventsCtrl', function ($scope, ajaxFactory, teatteriService) {
    $scope.erhe = '';
    $scope.showEvents = function(){
        var ID = null;
        var moviesArray = [];
        var scheduleArray = [];
        if (teatteriService.locate == true){
            var request1 = ajaxFactory.getCity(teatteriService.lat, teatteriService.lon);
            request1.then(function(response){
                console.log(response.data);
                var city = response.data.results[3].address_components[0].long_name;
                var code = response.data.results[2].address_components[0].long_name;
                console.log(code+','+city);
                teatteriService.setVariable('locate', false);
                $scope.clicked = true;
                switch(city){
                    case 'Helsinki':
                        ID = '1002';
                        $scope.teatteriName = city;
                        break;
                    case 'Espoo':
                        switch(code){
                            case '02600':
                            case '02650':
                                ID = '1038';
                                $scope.teatteriName = city+': Sello';
                                break;
                            case '02230':
                                ID = '1039';
                                $scope.teatteriName = city+': Omena';
                                break;
                            default:
                                ID = '1012';
                                $scope.teatteriName = city;                                
                        }
                        break;
                    case 'Jyväskylä':
                        ID = '1015';
                        $scope.teatteriName = city;
                        break;
                    case 'Kuopio':
                        ID = '1016';
                        $scope.teatteriName = city;
                        break;
                    case 'Lahti':
                        ID = '1017';
                        $scope.teatteriName = city;
                        break;
                    case 'Lappeenranta':
                        ID = '1041';
                        $scope.teatteriName = city;
                        break;
                    case 'Oulu':
                        ID = '1018';
                        $scope.teatteriName = city;
                        break;
                    case 'Pori':
                        ID = '1019';
                        $scope.teatteriName = city;
                        break;
                    case 'Tampere':
                        switch(code){
                            case '33100':
                                ID = '1034';
                                $scope.teatteriName = city+': Sello';
                                break;
                            case '33210':
                                ID = '1035';
                                $scope.teatteriName = city+': Omena';
                                break;
                            default:
                                ID = '1021';
                                $scope.teatteriName = city;                              
                        }
                        break;
                    case 'Turku':
                        ID = '1022';
                        $scope.teatteriName = city;
                        break;
                    case 'Vantaa':
                        ID = '1013';
                        $scope.teatteriName = city;
                        break;
                    default:
                        ID = null;
                        $scope.teatteriName = 'Kaupungissasi ei ole Finnkinoa ;__;';
                }
                console.log(ID);
            var request = ajaxFactory.getMovies(ID);
            request.then(function(response){
                // tee vastauksella jotain
                /* VANHA TOIMIVA LAUSE
                $scope.eventsArray = response.data;
                console.log(response.data);
                $scope.clicked = true;
                */
                moviesArray = response.data;

            var request3 = ajaxFactory.getSchedule(ID);
            request3.then(function(response){
 
                scheduleArray = response.data.Shows;
              });
            var eventsArray = [];
   
            var dada = function(){

                for (var i=0; i < scheduleArray.Show.length; i++) {
                
                    for (var j=0; j < moviesArray.Event.length; j++) {
                        if ( moviesArray.Event[j].ID == scheduleArray.Show[i].EventID ) {
                            eventsArray.push( moviesArray.Event[j] );
                        }              
                    }
                }
                var seen = {};
                //You can filter based on Id or Name based on the requirement
                var uniqueEvents = eventsArray.filter(function(item){
                    if(seen.hasOwnProperty(item.ID)){
                        return false;
                    }else{
                        seen[item.ID] = true;
                        return true;
                    }
                });
                $scope.eventsArray = uniqueEvents;
                console.log($scope.clicked);

            };
            setTimeout(function() { dada(); }, 2000);

              }, function(error){
                // tee virheellä jotain
                console.log(error.data);
            });



            }
   
        )}
        else{
            var request = ajaxFactory.getMovies(teatteriService.area.ID);
            request.then(function(response){
                // tee vastauksella jotain
                /* VANHA TOIMIVA LAUSE
                $scope.eventsArray = response.data;
                console.log(response.data);
                $scope.clicked = true;
                */
                $scope.teatteriName = teatteriService.area.Name;
                moviesArray = response.data;
                console.log(moviesArray.Event[0].ID);

            var request3 = ajaxFactory.getSchedule(ID);
            request3.then(function(response){
 
                scheduleArray = response.data.Shows;
                console.log(scheduleArray.Show.length);
              });
            var eventsArray = [];
   
            var dada = function(){

                for (var i=0; i < scheduleArray.Show.length; i++) {
                
                    for (var j=0; j < moviesArray.Event.length; j++) {
                        if ( moviesArray.Event[j].ID == scheduleArray.Show[i].EventID ) {
                            eventsArray.push( moviesArray.Event[j] );
                        }              
                    }
                }
                var seen = {};
                //You can filter based on Id or Name based on the requirement
                var uniqueEvents = eventsArray.filter(function(item){
                    if(seen.hasOwnProperty(item.ID)){
                        return false;
                    }else{
                        seen[item.ID] = true;
                        return true;
                    }
                });
                $scope.eventsArray = uniqueEvents;
                $scope.clicked = true;
                console.log($scope.clicked);

            };
            setTimeout(function() { dada(); }, 2000);

              }, function(error){
                // tee virheellä jotain
                console.log(error.data);
            });

        }
        
        
    };

    teatteriService.setVariable('showEvents', $scope.showEvents);

  });
