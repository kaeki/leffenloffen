'use strict';

angular
  .module('leffenloffenApp')
    .service('teatteriService', function () {
    	//DADAA ja muita chatservicen functioita ja parametreja kutsutaan vain chatServicen nimelleä, esim chatService.user
    		var area = null;
    		//Tällä metodilla asetetaan arvoja muuttujalle dadan sisällä
    		//HOX kaikille dadan muuttujille omat funktiot
            var teatteriVariables = {

                area: null

            };
            teatteriVariables.setVariable = function (key, value){
                teatteriVariables[key] = value;
            };

    		return teatteriVariables;
    		// Returnilla palautellaan asioita mitä halutaan esim. dada.muuttuja
    });