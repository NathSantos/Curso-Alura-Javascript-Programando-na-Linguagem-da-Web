// UTILIZANDO TÉCNICA AJAX PARA IMPORTAR DADOS PARA A TABELA

var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
    var xhr = new XMLHttpRequest();     // Faz requisição de um http
    xhr.open("GET", "https://raw.githubusercontent.com/mmgcnerds/api-pacientes/main/api-pacientes.json");

    xhr.addEventListener("load", function(){    // adicionando um evento p ficar escutando se tive uma resposta da requisição

        if(xhr.status == 200) { // status 200 -> deu tudo certo na requisição
            var resposta = xhr.responseText;        // pegando o array com os dados presente na página http
            var pacientes = JSON.parse(resposta);   // transformando isso para o formato do js

            pacientes.forEach(function(paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        } 
        else {
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    });

    xhr.send();
});