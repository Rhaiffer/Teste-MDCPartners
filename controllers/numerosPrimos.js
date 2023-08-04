// Importar o módulo 'readline' para lidar com a leitura de entrada do usuário
const readline = require('readline');

// Função para verificar se um número é primo
function primo(numero) {
  if (numero <= 1) {
    return false; // Números menores ou iguais a 1 não são primos, então retorna falso
  }

  // Loop para verificar divisibilidade do número até a raiz quadrada do mesmo
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false; // Se o número for divisível por algum i, não é primo, então retorna falso
    }
  }

  return true; // Se o número não foi divisível por nenhum i, é primo, então retorna verdadeiro
}

// Função para encontrar os primeiros 'n' números primos
function encontrarPrimeirosNPrimos(n) {
  let primos = [];
  let numero = 2; // Começa a busca a partir do número 2, que é o menor número primo

  while (primos.length < n) {
    // Loop para encontrar os primeiros 'n' números primos
    if (primo(numero)) {
      primos.push(numero); // Se o número é primo, adiciona à lista de primos encontrados
    }
    numero++; // Avança para o próximo número para a próxima iteração
  }

  return primos; // Retorna a lista contendo os 'n' números primos encontrados
}

// Criar uma interface de leitura de linha
const rl = readline.createInterface({
  input: process.stdin, // Define a entrada padrão como o console (stdin)
  output: process.stdout // Define a saída padrão como o console (stdout)
});

// Pedir ao usuário para digitar um número
rl.question('Digite um número: ', (answer) => {
  const numero = parseInt(answer); // Converte a entrada em um número inteiro

  if (isNaN(numero)) {
    console.log('Por favor, digite um número válido.'); // Se a entrada não for um número válido, exibe mensagem de erro
  } else {
    const numeroPrimo = primo(numero); // Verifica se o número digitado é primo
    if (numeroPrimo) {
      console.log(`${numero} é um número primo.`); // Exibe mensagem se o número é primo
    } else {
      console.log(`${numero} não é um número primo.`); // Exibe mensagem se o número não é primo
    }

    const n = 10; // Define o número de primos a serem encontrados
    const primeirosNPrimos = encontrarPrimeirosNPrimos(n); // Encontra os primeiros 10 números primos
    console.log(`Os primeiros ${n} números primos são: ${primeirosNPrimos.join(', ')}`); // Exibe a lista de primos encontrados
  }

  rl.close(); // Fecha a interface de leitura de linha para permitir que o programa termine corretamente
});
