/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



        var vidas= 7;

        var palabro="";

        var letra="";

        function Verificar(){

			var lletra= document.getElementById("lletra").value;

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
