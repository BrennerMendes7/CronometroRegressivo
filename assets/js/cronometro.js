$(function(){
    
    var segundo = 0, minuto = 2; // variáveis para armazenar os valores de segundo, minutos e horas contados.
    var ss, mm; // variáveis auxiliáres para exebir valor da contagem atual na tela.
    var cronometro; // variável que armazena a contagem periódica.

    // função que incrementa o contador e atualiza a contagem na tela
    function diminuiContador() {
        
        segundo--; // incrementa os segundos
        
        if(segundo === -1) { // se segundo igual a 60, zera segundo o incrementa os minutos
            minuto--;
            segundo = 59;
        }

        if(minuto === -1) {
            minuto = 0;
            segundo = 0;
        }
        

        // se o número é menor que 10, adiciona um 0 a esquerda para exibir na tela no formato 0x:0x:x0
        ss = (segundo < 10)? ("0" + segundo) : segundo;
        mm = (minuto < 10)? ("0" + minuto) : minuto;
        
        $("#contador").text(mm + ":" + ss); // mostra a contagem no formato hh:mm:ss na tela
    }

    // evento acionado quando o botão btn-iniciar é clicado
    $("#botao-iniciar").on('click', function(){
        if(cronometro =! null) {
            cronometro = setInterval(diminuiContador, 1000); // inicia o cronometro, repetindo a função de incremento a cada 1 seg.
        }
    });

    $("#botao-pausar").on('click', function(){
        clearInterval(cronometro); // interrompe o cronometro
        cronometro = null; // faz o cronometro ficar vazio
        $("#botao-iniciar").text("Retomar");
        }
    );

    // evento disparado quando o botão btn-zerar é clicado
    $("#botao-voltar").on('click', function(){ // quando clicado no botão de zerar
        clearInterval(cronometro); // limpa o intervalo de contagem, para o cronômetro
        minuto = 2;
        segundo = 0; 
        $("#contador").text("02:00"); // colocando zero no contador do html
        $("#botao-iniciar").text("Iniciar"); // alterando texto do botão para iniciar
    });
    
});