// Função para calcular o fatorial de um número
function calcularFatorial(numero) {
  if (numero === 0n || numero === 1n) {
    return 1n; // Casos base: o fatorial de 0 e 1 é 1
  } else {
    return numero * calcularFatorial(numero - 1n); // Caso geral: calcula o fatorial de forma recursiva
  }
}

// Converte o resultado do fatorial para notação científica
function formatarNotacaoCientifica(fatorial) {
  const fatorialStr = fatorial.toString();
  const mantissa = fatorialStr.slice(0, 1) + '.' + fatorialStr.slice(1, 16);
  const expoente = fatorialStr.length - 1;
  return mantissa + 'e' + expoente;
}

// Programa para obter o número do usuário e calcular o fatorial
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Digite um número para calcular o fatorial: ', (numero) => {
  // Verificar se o usuário inseriu um número válido
  numero = BigInt(numero); // Converte a entrada para BigInt

  if (Number.isNaN(Number(numero)) || numero < 0n) {
    console.log('Por favor, insira um número inteiro positivo.');
  } else {
    const fatorial = calcularFatorial(numero);
    const resultadoFormatado = formatarNotacaoCientifica(fatorial);
    console.log(`O fatorial de ${numero} é: ${resultadoFormatado}`);
  }

  readline.close();
});
