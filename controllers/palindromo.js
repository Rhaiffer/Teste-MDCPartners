// Função para calcular o fatorial de um número
function calcularFatorial(numero) {
  // Verifica se o número é 0 ou 1, pois o fatorial de 0 e 1 é sempre 1
  if (numero === 0n || numero === 1n) {
    return 1n; // Casos base: o fatorial de 0 e 1 é 1
  } else {
    // Caso geral: utiliza a recursão para calcular o fatorial de forma eficiente
    return numero * calcularFatorial(numero - 1n);
  }
}

// Converte o resultado do fatorial para notação científica
function formatarNotacaoCientifica(fatorial) {
  const fatorialStr = fatorial.toString();
  // Separa o primeiro dígito (mantissa) e os próximos 15 dígitos
  const mantissa = fatorialStr.slice(0, 1) + '.' + fatorialStr.slice(1, 16);
  const expoente = fatorialStr.length - 1; // Calcula o expoente da notação científica
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
    const fatorial = calcularFatorial(numero); // Calcula o fatorial do número
    const resultadoFormatado = formatarNotacaoCientifica(fatorial); // Formata o resultado em notação científica
    console.log(`O fatorial de ${numero} é: ${resultadoFormatado}`);
  }

  readline.close(); // Fecha a interface readline após a execução do programa
});
