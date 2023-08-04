const readline = require('readline');

// Função para calcular o valor final do investimento usando juros compostos
function calcularValorFinal(capitalInicial, taxaJuros, tempoInvestimento) {
  const taxaJurosDecimal = taxaJuros / 100;
  const valorFinal = capitalInicial * (1 + taxaJurosDecimal) ** tempoInvestimento;
  return valorFinal;
}

// Função para formatar o valor como moeda brasileira (BRL)
function formatarValor(valor) {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// Criando uma interface para entrada de dados pelo usuário
const rl = readline.createInterface({
  input: process.stdin,   // Utilizando a entrada padrão (stdin)
  output: process.stdout  // Utilizando a saída padrão (stdout)
});

// Função genérica para obter um número inteiro do usuário e tratar entradas inválidas
function obterNumeroInteiro(mensagem, callback) {
  rl.question(mensagem, (input) => {
    const numero = parseInt(input);
    if (isNaN(numero)) {
      console.log('Por favor, digite um valor numérico válido.');
      obterNumeroInteiro(mensagem, callback);
    } else {
      callback(numero);
    }
  });
}

// Solicitando ao usuário os valores do capital inicial, taxa de juros e tempo de investimento
obterNumeroInteiro('Digite o capital inicial: ', (capitalInicial) => {
  obterNumeroInteiro('Digite a taxa de juros (em %): ', (taxaJuros) => {
    obterNumeroInteiro('Digite o tempo de investimento (em meses): ', (tempoInvestimento) => {
      // Chamando a função calcularValorFinal com os valores informados pelo usuário
      const valorFinal = calcularValorFinal(capitalInicial, taxaJuros, tempoInvestimento);

      // Exibindo o valor final do investimento na tela usando formatação de moeda
      console.log(`O valor final do investimento é: ${formatarValor(valorFinal)}`);

      // Fechando a interface de entrada de dados, encerrando o programa
      rl.close();
    });
  });
});
