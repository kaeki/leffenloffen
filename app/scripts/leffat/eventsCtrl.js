'use strict';
angular.module('leffenloffenApp')

  .controller('eventsCtrl', function ($scope, ajaxFactory, teatteriService) {
    $scope.erhe = '';
    $scope.showEvents = function(){
        var ID = null;
        
        if (teatteriService.locate == true){
            var request1 = ajaxFactory.getCity(teatteriService.lat, teatteriService.lon);
            request1.then(function(response){
                console.log(response.data);
                var city = response.data.results[3].address_components[0].long_name;
                var code = response.data.results[2].address_components[0].long_name;
                console.log(code+','+city);
                teatteriService.setVariable('locate', false);
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
                };
            var request = ajaxFactory.getMovies(ID);
            request.then(function(response){
                // tee vastauksella jotain
                $scope.eventsArray = response.data;
                console.log(response.data);
                $scope.clicked = true;
 
              }, function(error){
                // tee virheellä jotain
                console.log(error.data);
            });
            }
   
        )}
        else {
            console.log(teatteriService.area.ID);
            var request = ajaxFactory.getMovies(teatteriService.area.ID);
            request.then(function(response){
                // tee vastauksella jotain
                $scope.eventsArray = response.data;
                console.log(response.data);
                $scope.clicked = true;
                $scope.teatteriName = teatteriService.area.Name;
                /*
                // To store a value
                var loggedIn = JSON.stringify(response.data);   
                window.localStorage.setItem('user', loggedIn);
                */
              }, function(error){
                // tee virheellä jotain
                console.log(error.data);
            });
        };
        
    };

    teatteriService.setVariable('showEvents', $scope.showEvents);

    

    $scope.slide = function (dir) {
    $('#slider').carousel(dir);
    };
    if (teatteriService.area=null){
        $scope.erhe = true;
    };


  });
