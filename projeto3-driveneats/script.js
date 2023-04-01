let prato, precoPrato, bebida, precoBebida, sobremesa, precoSobremesa, precoTotal;


function verificaSelecao() {
    if (prato !== undefined) {
        if (bebida !== undefined) {
            if (sobremesa !== undefined) {
                const botaoPedido = document.querySelector('.botao');
                botaoPedido.innerHTML = 'Fechar pedido';
                botaoPedido.classList.add('fechar-pedido');
                botaoPedido.removeAttribute('disabled');
            } 
        }
    }
}

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

function confirmar() {
    const tela = document.querySelector('.confirmacao');
    tela.classList.remove('escondido');
    tela.querySelector('.nome-prato-confirmado').innerHTML = prato;
    tela.querySelector('.preco-prato-confirmado').innerHTML = precoPrato;
    tela.querySelector('.nome-bebida-confirmada').innerHTML = bebida;
    tela.querySelector('.preco-bebida-confirmada').innerHTML = precoBebida;
    tela.querySelector('.nome-sobremesa-confirmada').innerHTML = sobremesa;
    tela.querySelector('.preco-sobremesa-confirmada').innerHTML = precoSobremesa;
}

function cancelar() {
    const tela = document.querySelector('.confirmacao');
    tela.classList.add('escondido');
}

function redirecionar() {
    let nome = prompt('Digite o seu nome: ');
    let endereco = prompt('Digite o seu endereço: ');
    
    let msg = `Olá, gostaria de fazer o pedido:\n - Prato:${prato} - Bebida: ${bebida} \n - Sobremesa: ${sobremesa} \n Total: R$ 27,70 \n\n Nome: ${nome} \n Endereço: ${endereco}`;

    let num = "55021981199598"

    msg = window.encodeURIComponent(msg);
    window.open("https://wa.me/" + num + "?text=" + msg);
}