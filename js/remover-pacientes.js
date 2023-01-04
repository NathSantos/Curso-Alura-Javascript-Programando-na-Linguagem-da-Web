// Quero remover a linha do paciente que eu clicar 2 vezes sobre

var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");   // usando a tabela (pai da linha que foi clicada)

tabela.addEventListener("dblclick",function(event){
    event.target.parentNode.classList.add("fadeOut");   // fazendo transição de fadeOut p remoção mais suave

    setTimeout(function() {                 // falando p js esperar um pouco (pra transição acontecer) e depois remover
        event.target.parentNode.remove();       // event.target -> quem foi clicado (célula)
    }, 500);                                    // parentNode -> pai do alvo (no caso, a linha toda daquela célula)

});                                            