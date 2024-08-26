let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function exibirMensagemNoConsole() {
    console.log('O botão foi clicado!')
};

function exibirAlerta(){
    console.log('Eu amo JS')
}

function exibirPrompt() {
    let nomeDaCidade = prompt('Digite o nome de uma cidade do Brasil que você gosta muito:')
    alert(`Estive em ${nomeDaCidade} e lembrei de você`)
}

function exibirSoma() {
    let numero1 = parseInt(prompt('Digite o primeiro número da soma'));
    let numero2 = parseInt(prompt('Digite o segundo número da soma'));
    alert(`A soma é ${numero1+numero2}`)
}