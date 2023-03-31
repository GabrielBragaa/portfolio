let prato;
let bebida;
let sobremesa;


function selecionarPrato(seletor) {
    const opcaoAtualPrato = document.querySelector(seletor);
    const opcaoAnteriorPrato = document.querySelector('.prato-selecionado');
    if (opcaoAnteriorPrato !== null) {
        if (opcaoAtualPrato !== opcaoAnteriorPrato)
            opcaoAnteriorPrato.classList.remove('prato-selecionado');
    }
    document.querySelector(seletor).classList.toggle('prato-selecionado');
}




function selecionarBebida(seletor) {
    const opcaoAtualBebida = document.querySelector(seletor);
    const opcaoAnteriorBebida = document.querySelector('.bebida-selecionada');
    if (opcaoAnteriorBebida !== null) {
        if (opcaoAtualBebida !== opcaoAnteriorBebida) {    
            opcaoAnteriorBebida.classList.remove('bebida-selecionada');
        }
    }
    document.querySelector(seletor).classList.toggle('bebida-selecionada');
}


function selecionarSobremesa(seletor) {
    const opcaoAtualSobremesa = document.querySelector(seletor);
    const opcaoAnteriorSobremesa = document.querySelector('.sobremesa-selecionada');
    if (opcaoAnteriorSobremesa !== null) {
        if (opcaoAtualSobremesa !== opcaoAnteriorSobremesa) {
            opcaoAnteriorSobremesa.classList.remove('sobremesa-selecionada');
        }
    }
    document.querySelector(seletor).classList.toggle("sobremesa-selecionada");

}