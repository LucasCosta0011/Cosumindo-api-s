$("document").ready(function()
{
   // window.alert('teste');
   var etecs = [
    {
      nome: 'Etec 139 - Sede - Jd. Petrópolis',
      longitude:-47.4427446,
      latitude:-21.9993394
    },
    {
      nome:'Etec 139 - Prédio II - Vila Pinheiro',
        longitude:-47.4260427,
        latitude:-21.988025
    },
    {
      nome: 'ETEC 110 - Dep. Salim Sedeh - Cidade Jardim',
      longitude: -47.393906, 
      latitude: -22.174657
    },
    {
      nome: 'ETEC 104 - Centro, 439',
      longitude:  -47.407331, 
      latitude: -22.566874
    }
  ]
  
  var etecMaisProxima =
  {
    nome:null,
    distancia:null
  }
   $("#cep").blur(function()
   {    var cep = document.querySelector("#cep");
        //The trim() method in Java String is a built-in function that eliminates leading and trailing spaces. 
        //O método trim () em Java String é uma função integrada que elimina espaços à esquerda e à direita.
        if (cep.value.trim() === "") 
        {
          cep.style.background = "yellow";
          window.alert('Preencha seu cep');
        }
       var cep = $("#cep").val();
       $.get('https://brasilapi.com.br/api/cep/v2/' + cep).done(function(valores)
       {
            
            $("#state").val(valores.state);
            $("#city").val(valores.city);
            $("#neighborhood").val(valores.neighborhood);
            $("#street").val(valores.street);
            $("#service").val(valores.service);

            var longitude_aluno = valores.location.coordinates.longitude;
            var latitude_aluno = valores.location.coordinates.latitude;

            //console.log(longitude_aluno, latitude_aluno);

            for(etec of etecs)
            {
                var distancia_longitude = Math.pow(etec.longitude - longitude_aluno, 2);
                var distancia_latidude = Math.pow(etec.latitude - latitude_aluno, 2);

                var distancia = Math.sqrt(distancia_longitude + distancia_latidude);
                console.log(distancia);
                
                if(etecMaisProxima.distancia === null || etecMaisProxima.distancia>distancia)
                etecMaisProxima.nome = etec.nome;
                etecMaisProxima.distancia = distancia;  
            }
           
            var loc = document.querySelector("#location");
            loc.value = etecMaisProxima.nome;
            loc.style.background = "#FF7F50	";
            loc.style.color = "#fff	";
            loc.style.fontSize = "1.5em";
            loc.style.width = "390px";
            loc.style.marginLeft = "-30px";
                
       });
   });
});