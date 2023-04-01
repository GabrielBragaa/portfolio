let prato, precoPrato, bebida, precoBebida, sobremesa, precoSobremesa, precoTotal;


function selecionarPrato(seletor) {
    const opcaoAtualPrato = seletor;
    const opcaoAnteriorPrato = document.querySelector('.comes .selecionado');
    if (opcaoAnteriorPrato !== null) {
        if (opcaoAtualPrato !== opcaoAnteriorPrato)
            opcaoAnteriorPrato.classList.remove('selecionado');
    }
    seletor.classList.toggle('selecionado');
    

    prato = seletor.querySelector('.nome').innerHTML;
    precoPrato = seletor.querySelector('.preco').innerHTML;
    console.log(prato, precoPrato);
    verificaSelecao();
}

function selecionarBebida(seletor) {
    const opcaoAtualBebida = seletor;
    const opcaoAnteriorBebida = document.querySelector('.bebes .selecionado');
    if (opcaoAnteriorBebida !== null) {
        if (opcaoAtualBebida !== opcaoAnteriorBebida) {    
            opcaoAnteriorBebida.classList.remove('selecionado');
        }
    }
    seletor.classList.toggle('selecionado');

    bebida = seletor.querySelector('.nome').innerHTML;
    precoBebida = seletor.querySelector('.preco').innerHTML;
    console.log(bebida, precoBebida);
    verificaSelecao();
}

function selecionarSobremesa(seletor) {
    const opcaoAtualSobremesa = seletor;
    const opcaoAnteriorSobremesa = document.querySelector('.doces .selecionado');
    if (opcaoAnteriorSobremesa !== null) {
        if (opcaoAtualSobremesa !== opcaoAnteriorSobremesa) {
            opcaoAnteriorSobremesa.classList.remove('selecionado');
        }
    }
    seletor.classList.toggle('selecionado');

    sobremesa = seletor.querySelector('.nome').innerHTML;
    precoSobremesa = seletor.querySelector('.preco').innerHTML;
    console.log(sobremesa, precoSobremesa);
    verificaSelecao();
}

function verificaSelecao() {
    if (prato !== undefined) {
        if (bebida !== undefined) {
            if (sobremesa !== undefined) {
                const botaoPedido = document.querySelector('.botao');
                botaoPedido.innerHTML = 'Fechar pedido';
                botaoPedido.classList.add('fechar-pedido');
            } 
        }
    }
}