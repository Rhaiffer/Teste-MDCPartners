// Importar o módulo 'readline' para lidar com a leitura de entrada do usuário
const readline = require('readline');

// Função para verificar se a palavra é um palíndromo
function polindromo(palavra) {
  // Limpar a palavra removendo espaços e caracteres especiais, e transformar em minúsculas
  const palavraLimpa = palavra.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

  // Reverter a palavra
  const palavraRevertida = palavraLimpa.split('').reverse().join('');

  // Verificar se a palavra limpa é igual à palavra revertida
  return palavraLimpa === palavraRevertida;
}

// Criar uma interface de leitura de linha
const rl = readline.createInterface({
  input: process.stdin,   // Define a entrada padrão como o console (stdin)
  output: process.stdout  // Define a saída padrão como o console (stdout)
});

// Pedir ao usuário para digitar uma palavra
rl.question('Digite uma palavra: ', (palavra) => {
  // Quando o usuário insere a palavra, a função de callback é acionada, recebendo o valor digitado como 'palavra'

  // Verificar se a palavra é um palíndromo usando a função 'Palíndromo'
  if (polindromo(palavra)) {
    console.log(`${palavra} é um palíndromo.`); // Exibir mensagem se a palavra é um palíndromo
  } else {
    console.log(`${palavra} não é um palíndromo.`); // Exibir mensagem se a palavra não é um palíndromo
  }

  // Fechar a interface de leitura de linha para permitir que o programa termine corretamente
  rl.close();
});
