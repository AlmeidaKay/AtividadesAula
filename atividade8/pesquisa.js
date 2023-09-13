// Variáveis para armazenar os dados
var totalIdade = 0;
var idadeMaisVelha = 0;
var idadeMaisNova = Infinity; // Inicializado com um valor alto para encontrar a idade mais nova
var totalPessimo = 0;
var totalOtimoBom = 0;
var totalMulheres = 0;
var totalHomens = 0;

// Simulando os dados de entrada (idade, sexo e opinião)
var dados = [
    { idade: 25, sexo: 'homem', opiniao: 'ótimo' },
    { idade: 30, sexo: 'mulher', opiniao: 'bom' },
    { idade: 40, sexo: 'homem', opiniao: 'regular' },
    { idade: 50, sexo: 'mulher', opiniao: 'péssimo' },
    // Adicione mais dados conforme necessário
];

// Loop pelos dados e calcular as estatísticas
for (var i = 0; i < dados.length; i++) {
    var pessoa = dados[i];

    totalIdade += pessoa.idade;

    if (pessoa.idade > idadeMaisVelha) {
        idadeMaisVelha = pessoa.idade;
    }

    if (pessoa.idade < idadeMaisNova) {
        idadeMaisNova = pessoa.idade;
    }

    if (pessoa.opiniao === 'péssimo') {
        totalPessimo++;
    }

    if (pessoa.opiniao === 'ótimo' || pessoa.opiniao === 'bom') {
        totalOtimoBom++;
    }

    if (pessoa.sexo === 'mulher') {
        totalMulheres++;
    } else if (pessoa.sexo === 'homem') {
        totalHomens++;
    }
}

// Calcular a média da idade
var mediaIdade = totalIdade / dados.length;

var porcentagemOtimoBom = (totalOtimoBom / dados.length) * 100;

console.log('Média da idade: ' + mediaIdade);
console.log('Idade da pessoa mais velha: ' + idadeMaisVelha);
console.log('Idade da pessoa mais nova: ' + idadeMaisNova);
console.log('Quantidade de pessoas que responderam péssimo: ' + totalPessimo);
console.log('Porcentagem de pessoas que responderam ótimo e bom: ' + porcentagemOtimoBom.toFixed(2) + '%');
console.log('Número de mulheres que responderam ao questionário: ' + totalMulheres);
console.log('Número de homens que responderam ao questionário: ' + totalHomens);
