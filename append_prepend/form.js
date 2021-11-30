/*
    window.onload = function(){
    document.querySelector('h1').style.color = 'red' ;
    document.body.style.background = "red";}
*/
/*  usando prepend exemplo: $( ".inner" ).prepend( "<p>Test</p>" );
   
    O .prepend()método insere o conteúdo especificado como o primeiro filho de cada elemento na coleção jQuery (para inseri-lo como o      último filho, use .append()).

    Os métodos .prepend()e .prependTo()executam a mesma tarefa. A principal diferença está na sintaxe - especificamente, no                posicionamento do conteúdo e do destino. Com .prepend(), a expressão do seletor que precede o método é o contêiner no qual o           conteúdo é inserido. Com .prependTo(), por outro lado, o conteúdo precede o método, seja como uma expressão do seletor ou como         uma marcação criada instantaneamente, e é inserido no contêiner de destino.
*/
var cont = 1;
$('document').ready(function(){
    $('#btnAddPhone').click(function(){
        cont++;
        $('.campo1').prepend('<span id="campo'+ cont +'"><input type="tel" placeholder="Phone..." style="width:400px;padding:8px; border-radius: 10px;border: solid 1px #261B18; margin-top:10px; position:relative; display:block;" value=""><button id="'+ cont +'" class="btn-apagar " style="width:20px; height:20px; border-radius:10px; border:none;">-</button></span>');
    })
});

$('document').ready(function(){
    $('.campo1').on('click', '.btn-apagar',function(){
        var btn = $(this).attr("id");
        $('#campo'+ btn +'').remove();

    })
});
