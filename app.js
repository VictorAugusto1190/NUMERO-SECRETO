let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio(); 
let tentativas = 1;

function exibirMensagemNaTela (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.2});
}

exibirTextoNaTela();
function exibirTextoNaTela () {
    exibirMensagemNaTela('h1','JOGO DO NUMERO SECRETO');
    // responsiveVoice.speak('JOGO DO NUMERO SECRETO','Brazilian portugues Female',{rate:1.2})
    exibirMensagemNaTela('p',`escolhe um numero entre 1 e ${numeroLimite} `);
    // responsiveVoice.speak('escolhe um numero entre 1 e 10','Brazilian Portugues Famele',{rate:1.2})

}

function verificarChute() {
    let chute = document.querySelector('input').value;

    let tentativa = tentativas > 1 ? "tentativas" : "tentativa"
    
    if (chute == numeroSecreto) {
        exibirMensagemNaTela('h1','ACERTOU!!!!!');
        exibirMensagemNaTela('p',`voce acertou com ${tentativas} ${tentativa}`);
         document.getElementById('reiniciar').removeAttribute('disabled');
    } else if (chute > numeroSecreto) {
        exibirMensagemNaTela('h1','OPS');
        exibirMensagemNaTela('p','o numero secreto é menor')
    } else if(chute < numeroSecreto){
        exibirMensagemNaTela('h1','OPS')
        exibirMensagemNaTela('p','O numero secreto é maior')
    }/* if (tentativas == 3) {
        exibirMensagemNaTela('h1','BLOQUEADO')
        exibirMensagemNaTela('p','suas tentativas acabaram')
        document.getElementById('Chutar').setAttribute('disabled',true)
        document.getElementById('reiniciar').removeAttribute('disabled',true)
    }*/
    tentativas ++;
    limpar()

}


function limpar () {
    let limparCampo = document.querySelector('input').value = "";
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limpar();
    tentativas = 1;
    exibirTextoNaTela();
    document.getElementById('reiniciar').setAttribute('disabled',true);
    // document.getElementById('Chutar').removeAttribute()
}


function gerarNumeroAleatorio () {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = []
    }

    console.log(numeroEscolhido);
    if(listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }
    // return numeroEscolhido;
}