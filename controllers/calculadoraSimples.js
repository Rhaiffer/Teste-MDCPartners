// Importar o módulo 'readline' para lidar com a leitura de entrada do usuário
const readline = require('readline');

// Cria uma interface de leitura de linha
const rl = readline.createInterface({
  input: process.stdin,   // Define a entrada padrão como o console (stdin)
  output: process.stdout  // Define a saída padrão como o console (stdout)
});

// Pede ao usuário para digitar o primeiro número
rl.question('Digite o primeiro número: ', (num1) => {
  // Quando o usuário insere o valor, a função de callback é acionada, recebendo o valor digitado como 'num1'

  // Pede ao usuário para digitar o operador (+, -, *, ou /)
  rl.question('Digite o operador (+, -, *, /): ', (operator) => {
    // Quando o usuário insere o operador, a função de callback é acionada, recebendo o valor digitado como 'operator'

    // Pede ao usuário para digitar o segundo número
    rl.question('Digite o segundo número: ', (num2) => {
      // Quando o usuário insere o valor, a função de callback é acionada, recebendo o valor digitado como 'num2'

      // Chamar a função 'calculate' para executar a operação matemática com os valores digitados
      const result = calculate(parseFloat(num1), operator, parseFloat(num2));

      // Exibe o resultado da operação no console
      console.log(`O resultado da operação é: ${result}`);

      // Fechar a interface de leitura de linha para permitir que o programa termine corretamente
      rl.close();
    });
  });
});

// Função 'calculate' para executar a operação matemática
function calculate(num1, operator, num2) {
  // Verificar qual operador foi inserido usando um switch

  switch (operator) {
    case '+':
      return num1 + num2; // Realizar adição
    case '-':
      return num1 - num2; // Realizar subtração
    case '*':
      return num1 * num2; // Realizar multiplicação
    case '/':
      // Verifica se o segundo número é zero antes de realizar a divisão
      if (num2 === 0) {
        throw new Error('Não é possível dividir por zero.'); // Lançar um erro se for zero
      }
      return num1 / num2; // Realizar divisão
    default:
      throw new Error('Operador inválido. Use +, -, *, ou /.'); // Lançar um erro se o operador for inválido
  }
}
