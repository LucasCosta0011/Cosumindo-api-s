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
  ]
  
  var etecMaisProxima =
  {
    nome:null,
    distancia:null
  }
   $("#cep").blur(function()
   {
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
                var longitude_etec = etec.longitude;
                var latitude_etec = etec.latitude;

                var distancia_longitude = Math.pow(longitude_etec - longitude_aluno, 2);
                var distancia_latidude = Math.pow(latitude_etec - latitude_aluno, 2);

                var distancia = Math.sqrt(distancia_longitude + distancia_latidude);
                console.log(distancia);
                
                if(etecMaisProxima.distancia === null || etecMaisProxima.distancia>distancia)
                etecMaisProxima.nome = etec.nome;
                etecMaisProxima.distancia = distancia;  
            }
            window.alert('Etec mais próxima: ' + etecMaisProxima.nome);
                
       });
   });
});