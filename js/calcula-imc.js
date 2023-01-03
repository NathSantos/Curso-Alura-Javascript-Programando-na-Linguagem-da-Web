// pesquisando por classe -> .classe
// pesquisando por id -> #id


// ----------------- ALTERANDO O TÍTULO DA PÁGINA -----------------
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";


// ----------------- PEGANDO INFORMAÇÕES DE UM PACIENTE E VALIDAÇÃO DE DADOS -----------------
var paciente = document.querySelector("#primeiro-paciente");
var peso = paciente.querySelector(".info-peso").textContent;
var altura = paciente.querySelector(".info-altura").textContent;
var tdImc = paciente.querySelector(".info-imc");

if (peso <= 0 || peso >= 1000 || altura <= 0 || altura >= 3.00) {
    console.log("Peso ou Altura inválidos");
    tdImc.textContent = "Resultado inválido";
} else {
    var imc = peso / (altura*altura)
    tdImc.textContent = imc;
}


// ----------------- PEGANDO E ALTERANDO DADOS DE TODOS OS PACIENTES  -----------------
var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
    var peso = pacientes[i].querySelector(".info-peso").textContent;
    var altura = pacientes[i].querySelector(".info-altura").textContent;
    var tdImc = pacientes[i].querySelector(".info-imc");

    if (peso <= 0 || peso >= 1000 || altura <= 0 || altura >= 3.00) {
        console.log("Peso ou Altura inválidos");
        tdImc.textContent = "Resultado inválido";
        pacientes[i].classList.add("paciente-invalido");   // CRIANDO UMA CLASSE NA LISTA DE CLASSES DO HTML PARA QUE O DESIGN SEJA FEITO DEVIDAMENTE NO CSS
    } else {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura*altura);
    return imc.toFixed(2);
}