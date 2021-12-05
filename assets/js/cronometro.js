$(function(){
    
    var segundo = 0, minuto = 2;
    var ss, mm; 
    var cronometro; 

    function diminuiContador() {
        
        segundo--; 
        
        if(segundo === -1) { 
            minuto--;
            segundo = 59;
        }

        if(minuto === -1) {
            minuto = 0;
            segundo = 0;
        }
        
        ss = (segundo < 10)? ("0" + segundo) : segundo;
        mm = (minuto < 10)? ("0" + minuto) : minuto;
        
        $("#contador").text(mm + ":" + ss); 
    }

    $("#botao-iniciar").on('click', function(){
        if(cronometro =! null) {
            cronometro = setInterval(diminuiContador, 1000); 
        }
    });

    $("#botao-pausar").on('click', function(){
        clearInterval(cronometro); 
        cronometro = null; 
        $("#botao-iniciar").text("Retomar");
        }
    );

    $("#botao-voltar").on('click', function(){ 
        clearInterval(cronometro); 
        minuto = 2;
        segundo = 0; 
        $("#contador").text("02:00"); 
        $("#botao-iniciar").text("Iniciar"); 
    });
    
});