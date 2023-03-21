/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



        var vidas= 7;

        var palabro="";

        var letra="";
        
          // Lletra de paraules per al joc
          var paraules = ["fetge","forca","jutges","jutjat","mengen","penjat","quinta","setze"];
          // Escull una paaula aleatoriament 
          var paraula = paraules[Math.floor(Math.random()*  paraules.length)];
          var pos = paraula.indexOf(lletra);
          var lletres = [];
          for (var i = 0; i < paraula.length; i++) {
            lletres[i] = "_";      
          }
          document.getElementById("palabro").innerHTML = lletres;

        function Verificar(){

			var lletra= document.getElementById("lletra").value;
                         var pos = paraula.indexOf(lletra);
			if((lletra >= "m")) {

				vidas= vidas-1;

				document.getElementById("vidas").innerHTML=vidas;

				letra=lletra+letra+"";

				document.getElementById("letras").innerHTML=letra;

			} else {

				palabro=lletra+palabro+"";

				document.getElementById("palabro").innerHTML=palabro;

			}

			if ((vidas==0)){

			  window.alert("Has perdut");

			  lletra="";

			}

          
		}
