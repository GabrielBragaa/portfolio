let prato, precoPrato, bebida, precoBebida, sobremesa, precoSobremesa;


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
    const preco = seletor.querySelector('.preco').innerHTML;
    precoPrato = Number(preco.replace(/[^0-9,]*/g, '').replace(',', '.')).toFixed(2);
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
    const preco = seletor.querySelector('.preco').innerHTML;
    precoBebida = Number(preco.replace(/[^0-9,]*/g, '').replace(',', '.')).toFixed(2);
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
    const preco = seletor.querySelector('.preco').innerHTML;
    precoSobremesa = Number(preco.replace(/[^0-9,]*/g, '').replace(',', '.')).toFixed(2);
    verificaSelecao();
}

function confirmar() {
    const preco = Number(precoPrato) + Number(precoBebida) + Number(precoSobremesa);
    const tela = document.querySelector('.confirmacao');
    tela.classList.remove('escondido');
    tela.querySelector('.nome-prato-confirmado').innerHTML = prato;
    tela.querySelector('.preco-prato-confirmado').innerHTML = precoPrato.replace('.', ',');
    tela.querySelector('.nome-bebida-confirmada').innerHTML = bebida;
    tela.querySelector('.preco-bebida-confirmada').innerHTML = precoBebida.replace('.', ',');
    tela.querySelector('.nome-sobremesa-confirmada').innerHTML = sobremesa;
    tela.querySelector('.preco-sobremesa-confirmada').innerHTML = precoSobremesa.replace('.', ',');
    tela.querySelector('.preco-confirmado').innerHTML = String(preco.toFixed(2)).replace('.', ',');
}
function cancelar() {
    const tela = document.querySelector('.confirmacao');
    tela.classList.add('escondido');
}

function redirecionar() {
    let nome = prompt('Digite o seu nome: ');
    let endereco = prompt('Digite o seu endereço: ');
    let total = document.querySelector('.preco-confirmado').innerHTML;

    let msg = `Olá, gostaria de fazer o pedido:\n 
    - Prato: ${prato} \n 
    - Bebida: ${bebida} \n 
    - Sobremesa: ${sobremesa} \n 
    Total: R$ ${total} \n\n 
    Nome: ${nome} \n 
    Endereço: ${endereco}`;

    let num = "55021981199598"

    msg = window.encodeURIComponent(msg);
    window.open("https://wa.me/" + num + "?text=" + msg);
}
