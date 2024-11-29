let listaNumerosSorteados = [];
let maiorNumero = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagensInicias() {
    exibirTextoNaTela('h1', 'Jogo do Número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e ' + maiorNumero);
}
exibirMensagensInicias();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        document.getElementById('reiniciar').removeAttribute('disabled');
        exibirTextoNaTela('p', mensagemTentativas);
    } else if (chute > numeroSecreto) {
        exibirTextoNaTela('p', 'O número secreto é menor que ' + chute);
     } else {
            exibirTextoNaTela('p', 'O número secreto é maior que ' + chute);
        }
        tentativas++;
        limparCampo();
    }

function gerarNumeroAleatorio() {
    numeroEscolhido = parseInt(Math.random() * maiorNumero + 1);
    qtdNumerosLista = listaNumerosSorteados.length;

    if (qtdNumerosLista == maiorNumero) {
        listaNumerosSorteados = [];
    }
    
    if (listaNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(listaNumerosSorteados)
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagensInicias();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}

