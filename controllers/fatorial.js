// Função para calcular o fatorial de um número
function calcularFatorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1; // Casos base: o fatorial de 0 e 1 é 1
  } else {
    return numero * calcularFatorial(numero - 1); // Caso geral: calcula o fatorial de forma recursiva
  }
}

// Programa para obter o número do usuário e calcular o fatorial
const readline = require('readline').createInterface({
  input: process.stdin,  // Define a entrada padrão como o console (stdin)
  output: process.stdout // Define a saída padrão como o console (stdout)
});

readline.question('Digite um número para calcular o fatorial: ', (numero) => {
  // Verificar se o usuário inseriu um número válido
  numero = parseInt(numero); // Converte a entrada em um número inteiro

  if (isNaN(numero) || numero < 0) {
    console.log('Por favor, insira um número inteiro positivo.'); // Exibe mensagem de erro para entrada inválida
  } else {
    const fatorial = calcularFatorial(numero); // Chama a função para calcular o fatorial do número
    console.log(`O fatorial de ${numero} é: ${fatorial}`); // Exibe o resultado do fatorial
  }

  readline.close(); // Fecha a interface de leitura de linha para permitir que o programa termine corretamente
});
