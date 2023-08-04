// Importa o módulo readline para interagir com o usuário via linha de comando
const readline = require('readline');

// Cria uma instância de readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função que exibe a tabuada de um número
function tabuada(numero) {
  console.log(`Tabuada do ${numero}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}

// Solicita que o usuário digite um número
rl.question('Digite um número: ', (numero) => {
  // Chama a função tabuada passando o número digitado como argumento
  tabuada(Number(numero));
  // Fecha a instância 
  rl.close();
});
