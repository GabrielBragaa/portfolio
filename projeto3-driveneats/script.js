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
    const check = seletor.querySelector('.check');
    if (opcaoAnteriorPrato !== null) {
        const checkAnterior = opcaoAnteriorPrato.querySelector('.check');
        if (opcaoAtualPrato !== opcaoAnteriorPrato) {
            opcaoAnteriorPrato.classList.remove('selecionado');
        }
        checkAnterior.classList.toggle('escondido'); 
    }
    seletor.classList.toggle('selecionado');
    if (seletor.classList.contains('selecionado') == true) {
        check.classList.toggle('escondido');
    }

    prato = seletor.querySelector('.nome').innerHTML;
    const preco = seletor.querySelector('.preco').innerHTML;
    precoPrato = Number(preco.replace(/[^0-9,]*/g, '').replace(',', '.')).toFixed(2);
    verificaSelecao();
}

function selecionarBebida(seletor) {
    const opcaoAtualBebida = seletor;
    const opcaoAnteriorBebida = document.querySelector('.bebes .selecionado');
    const check = seletor.querySelector('.check');
    if (opcaoAnteriorBebida !== null) {
        const checkAnterior = opcaoAnteriorBebida.querySelector('.check');
        if (opcaoAtualBebida !== opcaoAnteriorBebida) {
            opcaoAnteriorBebida.classList.remove('selecionado');
        }
        checkAnterior.classList.toggle('escondido');
    }
    seletor.classList.toggle('selecionado');
    if (seletor.classList.contains('selecionado') == true) {
        check.classList.toggle('escondido');
    }

    bebida = seletor.querySelector('.nome').innerHTML;
    const preco = seletor.querySelector('.preco').innerHTML;
    precoBebida = Number(preco.replace(/[^0-9,]*/g, '').replace(',', '.')).toFixed(2);
    verificaSelecao();
}

function selecionarSobremesa(seletor) {
    const opcaoAtualSobremesa = seletor;
    const opcaoAnteriorSobremesa = document.querySelector('.doces .selecionado');
    const check = seletor.querySelector('.check');
    if (opcaoAnteriorSobremesa !== null) {
        const checkAnterior = opcaoAnteriorSobremesa.querySelector('.check');
        if (opcaoAtualSobremesa !== opcaoAnteriorSobremesa) {
            opcaoAnteriorSobremesa.classList.remove('selecionado');
        }
        checkAnterior.classList.toggle('escondido');
    }
    seletor.classList.toggle('selecionado');
    if (seletor.classList.contains('selecionado') == true) {
        check.classList.toggle('escondido');
    }

    sobremesa = seletor.querySelector('.nome').innerHTML;
    const preco = seletor.querySelector('.preco').innerHTML;
    precoSobremesa = Number(preco.replace(/[^0-9,]*/g, '').replace(',', '.')).toFixed(2);
    verificaSelecao();
}

function confirmar() {
    const preco = Number(precoPrato) + Number(precoBebida) + Number(precoSobremesa);
    const tela = document.querySelector('.confirmacao');
    const corpo = document.querySelector('body');
    const telaBranca = document.querySelector('.tela-branca');
    telaBranca.classList.remove('escondido');
    corpo.classList.add('no-scroll');
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
    const corpo = document.querySelector('body');
    corpo.classList.remove('no-scroll');
    const telaBranca = document.querySelector('.tela-branca');
    telaBranca.classList.add('escondido');
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
