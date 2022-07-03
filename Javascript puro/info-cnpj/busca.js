/**
 * Utilizei uma informação, mas poderia ter puxado várias.
 * Para saber todas as informações que é possível trazer 
 * acesse o site oficial https://brasilapi.com.br
 */

var btnBusca = document.querySelector("#btnBuscarCnpj")
var txtGeneric = document.querySelector("#txtGeneric")
var txtCnpj = document.querySelector("#cnpj")

window.onload = () => { 
  btnBusca.onclick = () => {
    var cnpj = txtCnpj.value;
    var cnpjParse = false;
    if(cnpjParsing(cnpj)){
      var cnpjFormated = cnpjFormat(cnpj);
      cnpjParse = true;
    }
    cnpjValue = (cnpjParse == false) ? cnpj : cnpjFormated;
    fetch('https://brasilapi.com.br/api/cnpj/v1/' + cnpjValue)
      .then(function(response){
        return response.json();
      })
      .then(function(data){
        txtGeneric.value = data.municipio;
      })
      .catch(Error => console.log(Error))
  }
}

function cnpjParsing(cnpj){
  cnpjParsed = cnpj.includes("/") || cnpj.includes(".")|| cnpj.includes("-")
  return cnpjParsed;
} 

function cnpjFormat(cnpj){
  cnpjFormated = cnpj.replace(".", "").replace(".", "").replace("/", "").replace("-", "")
  return cnpjFormated;
}