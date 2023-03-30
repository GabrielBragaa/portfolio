let prato;
let bebida;
let sobremesa;

const frango = document.querySelector('.frango');
const churras = document.querySelector('.churras');
const peixe = document.querySelector('.peixe');
const coca = document.querySelector('.coca');
const suco = document.querySelector('.suco');
const agua = document.querySelector('.agua');
const pudim = document.querySelector('.pudim');
const mousse = document.querySelector('.mousse');
const pave = document.querySelector('.pave');

function selecionarFrango(frango) {
    document.querySelector('.frango').classList.toggle("selecionada");
    document.querySelector('.churras').classList.toggle("nao-selecionada");
    document.querySelector('.peixe').classList.toggle("nao-selecionada");
    prato = "Frango";
}

function selecionarChurras(churras) {
    document.querySelector('.frango').classList.toggle("nao-selecionada");
    document.querySelector('.churras').classList.toggle("selecionada");
    document.querySelector('.peixe').classList.toggle("nao-selecionada");
    prato = "Churrasco";
}

function selecionarPeixe(peixe) {
    document.querySelector('.frango').classList.toggle("nao-selecionada");
    document.querySelector('.churras').classList.toggle("nao-selecionada");
    document.querySelector('.peixe').classList.toggle("selecionada");
    prato = "Peixe"
}

function selecionarCoca(coca) {
    document.querySelector('.coca').classList.toggle("selecionada");
    document.querySelector('.suco').classList.toggle("nao-selecionada");
    document.querySelector('.agua').classList.toggle("nao-selecionada");
    bebida = "Coca-Cola";
}

function selecionarSuco(suco) {
    document.querySelector('.coca').classList.toggle("nao-selecionada");
    document.querySelector('.suco').classList.toggle("selecionada");
    document.querySelector('.agua').classList.toggle("nao-selecionada");
    bebida = "Suco";
}

function selecionarAgua(agua) {
    document.querySelector('.coca').classList.toggle("nao-selecionada");
    document.querySelector('.suco').classList.toggle("nao-selecionada");
    document.querySelector('.agua').classList.toggle("selecionada");
    bebida = "Água";
}

function selecionarPudim(pudim) {
    document.querySelector('.pudim').classList.toggle("selecionada");
    document.querySelector('.mousse').classList.toggle("nao-selecionada");
    document.querySelector('.pave').classList.toggle("nao-selecionada");
    sobremesa = "Pudim";
}

function selecionarMousse(mousse) {
    document.querySelector('.pudim').classList.toggle("nao-selecionada");
    document.querySelector('.mousse').classList.toggle("selecionada");
    document.querySelector('.pave').classList.toggle("nao-selecionada");
    sobremesa = "Mousse";
}

function selecionarPave(pave) {
    document.querySelector('.pudim').classList.toggle("nao-selecionada");
    document.querySelector('.mousse').classList.toggle("nao-selecionada");
    document.querySelector('.pave').classList.toggle("selecionada");
    sobremesa = "Pavê";
}