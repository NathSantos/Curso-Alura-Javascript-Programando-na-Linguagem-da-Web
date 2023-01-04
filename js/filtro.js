var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    var pacientes = document.querySelectorAll(".paciente");

    if(this.value.length > 0) { // se teve algo digitado no campo de busca
        for(var i=0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;

            var expressao = new RegExp(this.value,"i"); // criando uma busca com expressão regular e o parâmetro "i" remove case sensitive.
                                                        // O primeiro parâmetro é o padrão (o texto da expressão regular, o que deve ser buscado) 
                                                        // e o segundo são uma ou mais flags (representando como queremos que a expressão regular busque).
            if(!expressao.test(nome)) {    // se o respectivo nome da tabela não for igual ao nome buscado
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
        }
    } else {    // se NÃO tiver nada digitado no campo de busca
        for(var i=0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});