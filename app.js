// Variavel armazenando a função para o return funcionar
let numeroUsados = [];
let chunkNumerica = 5000;
let numeroSecreto = gerarNumeroAleatorio();

let tentativas = 1;

//<script src="app.js" defer></script>
// Função para exibir textos nas telas
function exibirTextosTelas(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate: 1.5 - 0.3});
    
    
}

// Função para verificar o chute note que ela não é nessasrio o retorno por estar editando o html

function verificarChute() {
    let chute = parseInt(document.querySelector('input').value);
       if (chute == numeroSecreto) {
        exibirTextosTelas('h1', 'Parabens você acertou');
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você acertou o numero secreto com ${tentativas} ${palavraTentativas}`;
        exibirTextosTelas('p', mensagemTentativas);
        habilitarbotão()

       } else if (chute > numeroSecreto) {
        
        exibirTextosTelas('p', 'Tente um numero menor');
        
       } else if (chute < numeroSecreto) {
       
        exibirTextosTelas('p', 'Tente um numero maior');
        



} 
tentativas++;
limparCampo();
}  




// Função para gerar um numero aleatorio
function gerarNumeroAleatorio() {
    let numeroParaguardar = parseInt(Math.random() * chunkNumerica + 1);
    let limiteLista =  numeroUsados.length;
    if (limiteLista == chunkNumerica){
        numeroUsados = [];
    }
     if (numeroUsados.includes(numeroParaguardar)) {
        gerarNumeroAleatorio();
} else {
    numeroUsados.push(numeroParaguardar);
    console.log(numeroUsados);
    return numeroParaguardar;
}

}
// Função para limpar o campo de input onde o usuario digita o chute
function limparCampo() {
    chute = document.querySelector('input').value = '';
    chute.value = '';
}
// função para habilitar o botão de novo jogo, foi chamada lá na função verificarChute
function habilitarbotão() {
    document.getElementById('reiniciar').removeAttribute('disabled');

}

function novojogo() {
numeroSecreto = gerarNumeroAleatorio();

tentativas = 1;
exibirTextosTelas('h1', 'Jogo do Numero Secreto');
exibirTextosTelas('p', 'Escolha um numero entre 1 e 5000');
document.getElementById('reiniciar').setAttribute('disabled', true);

}



// Função para exibir textos nas telas foi colocado fora das funções para ser chamada no inicio do jogo
exibirTextosTelas('h1', 'Jogo do Numero Secreto');
exibirTextosTelas('p', 'Escolha um numero entre 1 e 5000');

