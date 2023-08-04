const readline = require('readline');

// Cria uma interface para leitura das entradas do usuário
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para calcular a média das notas
function calcularMedia(notas) {
  const somaNotas = notas.reduce((acc, nota) => acc + nota, 0);
  return somaNotas / notas.length;
}

// Função para receber as notas do usuário e calcular a média
function receberNotas() {
  let notas = [];

  rl.question('Digite a nota da primeira disciplina: ', (nota1) => {
    notas.push(parseFloat(nota1));

    rl.question('Digite a nota da segunda disciplina: ', (nota2) => {
      notas.push(parseFloat(nota2));

      rl.question('Digite a nota da terceira disciplina: ', (nota3) => {
        notas.push(parseFloat(nota3));

        // Calcula a média e exibe o resultado
        const media = calcularMedia(notas);
        console.log(`A média das notas é: ${media.toFixed(2)}`);

        // Fecha a interface de leitura
        rl.close();
      });
    });
  });
}

// Inicia o programa
receberNotas();
