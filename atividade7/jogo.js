
function jogar(escolhaDoJogador) {
    var opcoes = ['pedra', 'papel', 'tesoura'];
    var escolhaDoComputador = opcoes[Math.floor(Math.random() * 3)];

    if (escolhaDoJogador === escolhaDoComputador) {
        alert ('A escolha do computador foi: ' + escolhaDoComputador + '\n' + 'Empate!');
    } else if (
        (escolhaDoJogador === 'pedra' && escolhaDoComputador === 'tesoura') ||
        (escolhaDoJogador === 'papel' && escolhaDoComputador === 'pedra') ||
        (escolhaDoJogador === 'tesoura' && escolhaDoComputador === 'papel')
    ) {
        alert ('A escolha do computador foi: ' + escolhaDoComputador + '\n' + 'Você ganhou :)');
    } else {
        alert ('A escolha do computador foi: ' + escolhaDoComputador + '\n' + 'Você perdeu :(');
    }
}
