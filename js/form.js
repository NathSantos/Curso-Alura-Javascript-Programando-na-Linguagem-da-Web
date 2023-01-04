// ----------------- ADICIONANDO PACIENTES AO CLICAR NO BOTÃO (EVENTOS DO BROWSER)  -----------------

var botao = document.querySelector("#adicionar-paciente");

botao.addEventListener("click", function(event){
    event.preventDefault();     // PREVINE OS COMPORTAMENTOS PADRÃO DO EVENTO (evita perder os dados digitados quando atualizar a página)

    var form = document.querySelector("#form-adiciona");

    var paciente = obtemPacienteDoForm(form);   // EXTRAINDO INFORMAÇÕES DO PACIENTE DO FORM

    var erros = validaPaciente(paciente);

    if(erros.length > 0) {
        exibeMensagensDeErro(erros);
        return;
    }
    
    adicionaPacienteNaTabela(paciente)

    form.reset();   // PARA LIMPAR OS DADOS COLOCADOS NO CAMPO DO FORMULÁRIO

    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";
});

function obtemPacienteDoForm(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function adicionaPacienteNaTabela(paciente) {
    var pacienteTr = montaTr(paciente);             // CRIA A TR E A TD
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");  // The <tr> HTML element defines a row of cells in a table
    pacienteTr.classList.add("paciente");

    var nomeTd = montaTd(paciente.nome, "info-nome");   
    var pesoTd = montaTd(paciente.peso, "info-peso");
    var alturaTd = montaTd(paciente.altura, "info-altura");
    var gorduraTd = montaTd(paciente.gordura, "info-gordura");
    var imcTd = montaTd(paciente.imc, "info-imc");

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr;
}

function montaTd(dado,classe){
    var td = document.createElement("td");  // The <td> tag defines a standard data cell in an HTML table
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente) {

    var erros = [];

    if (paciente.nome.length == 0){
        erros.push("O nome não pode ser em branco");
    }

    if (paciente.gordura.length == 0){
        erros.push("A gordura não pode ser em branco");
    }

    if (paciente.peso.length == 0){
        erros.push("O peso não pode ser em branco");
    }

    if (paciente.altura.length == 0){
        erros.push("A altura não pode ser em branco");
    }

    if(paciente.peso <= 0 || paciente.peso >= 1000) {
        erros.push("Peso é inválido");
    }

    if(paciente.altura <= 0 || paciente.altura >= 3.00) {
        erros.push("Altura é inválida");
    }

    return erros;
}

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";  // não permite acúmulo de mensagens de erro

    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}