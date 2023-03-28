/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



        var vidas= 7;



        var letra=["_", "_", "_","_", "_", "_","_"];
        
        var punts=0;
          // Lletra de paraules per al joc
          var paraules = ["fetge","forca","jutges","jutjat","mengen","penjat","quinta","setze"];
          var pistes =   ["A la quinta forca","A ca un penjat, no hi anomenis cordes", 
              "Seteze jutges d'un jutjat mengen fetge d'un penjat"];
          var paraulespistes = [1,2,0,2,2,2,1,0,2];
          // Escull una paaula aleatoriament 
          var aleatori = Math.floor(Math.random() * paraules.length);
          var paraula = paraules[aleatori];
          var pista =  pistes[paraulespistes[aleatori]];
          var lletres = [];
          for (var i = 0; i < paraula.length; i++) {
            lletres[i] = "_";      
          }
          // document.getElementById("palabro").innerHTML = lletres;

        function Verificar(){

			var lletra= document.getElementById("lletra").value;
                        var pos = paraula.indexOf(lletra);
                                    alert("hola");
			if((lletra >= "m")) {

				vidas= vidas-1;

				document.getElementById("vidas").innerHTML=vidas;

				letra=lletra+letra+"";

				document.getElementById("letras").innerHTML=letra;

			} else {

				palabro=lletra+palabro+"";

				document.getElementById("palabro").innerHTML=lletres;

			}

			if ((vidas==0)){

			  window.alert("Has perdut");

			  lletra="";

			}

          
		}
                
        function esconder(){

             document.getElementById("ahorcado").hidden =   true;  
             document.getElementById("ahorcado_0").hidden = true;  
             document.getElementById("ahorcado_1").hidden = true;  
             document.getElementById("ahorcado_2").hidden = true;  
             document.getElementById("ahorcado_3").hidden = true;  
             document.getElementById("ahorcado_4").hidden = true; 
             document.getElementById("ahorcado_5").hidden = true; 
             document.getElementById("ahorcado_6").hidden = true;
		}
