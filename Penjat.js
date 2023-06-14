/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

        var vidas= 7;
        var encertades = [];
        var fallades=["_", "_", "_","_", "_", "_","_"];
        
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
          
           for (var i = 0; i < paraula.length; i++) {
            encertades[i] = "_";      
          }
          // document.getElementById("palabro").innerHTML = lletres;

        function Verificar(){
                        SQLlite();
                        
			var lletra = document.getElementById("lletra").value;
                        var pos = paraula.indexOf(lletra);
                        var pos = Lletra.indexOf("_");
                        
                        document.body.style.backgroundImage = "url('img/Party.png')";
                        window.alert("Has guanyat");
                        
                         document.getElementById("palabro").innerHTML=encertades;
                        // alert(paraula);
                        
                        if ((encertades.indexOf(lletra) != -1) || (fallades.indexOf(lletra) != -1)) {
                           alert("Lletra repetida");                        
                        } else {
                        
                            if((pos == -1)) {
                                    alert("has fallat");

                                    // letra=letra+" "+lletra;
                                    fallades[7 - vidas]=lletra;
                                   
                                    vidas= vidas-1;
                                    document.getElementById("vidas").innerHTML=vidas;

                            } else {
                                    alert("has encertat");

                                    // lletres=lletres+" "+lletra;
                                    for (var i = pos; i < paraula.length; i++){
                                        if (paraula[i] == lletra){
                                            encertades[i]=lletra;
                                        }
                                    }
                                    
                            }

                            if ((vidas==0)){

                              document.body.style.backgroundImage = "url('img/Jungle.png')";
                              window.alert("Has perdut");
                                    
                              lletra="";

                            }
                        }
          
		}
                
        function esconder(){
             document.getElementById("palabro").innerHTML=encertades;
             document.getElementById("letras").innerHTML=fallades;
             
             document.getElementById("ahorcado")  .hidden = true;  
             document.getElementById("ahorcado_0").hidden = true;  
             document.getElementById("ahorcado_1").hidden = true;  
             document.getElementById("ahorcado_2").hidden = true;  
             document.getElementById("ahorcado_3").hidden = true;  
             document.getElementById("ahorcado_4").hidden = true; 
             document.getElementById("ahorcado_5").hidden = true; 
             document.getElementById("ahorcado_6").hidden = true;
		}
        function SQLlite(){ 
            
            config = {
            locateFile: file => `https://sql.js.org/dist/${file}`
            // locateFile: filename => `https://unpkg.com/sql.js@1.6.2/dist/${filename}`
        };
        // The `initSqlJs` function is globally provided by all of the main dist files if loaded in the browser.
        // We must specify this locateFile function if we are loading a wasm file from anywhere other than the
        // current html page's folder.
        alasql('ATTACH SQLITE DATABASE penjat("penjat.db"); USE penjat; \n\
                SELECT * FROM TblTextosGUI;',
        //     [], function(idiomes) {Print_Data(idiomes = idiomes.pop());}
            [], function(idiomes) {Idiomes = idiomes.pop();}
        );
        //window.alert(Idiomes[0].Versio);
        if (Idiomes.length == 0) {Idiomes = Idiomes_dft;};
        
        }