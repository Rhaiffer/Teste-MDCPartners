const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function contarVogais(frase) {
  // Expressão regular para encontrar todas as vogais, incluindo as com acentos
  const regexVogais = /[aeiouáéíóúàèìòùâêîôûãõäëïöü]/gi;
  // Usamos a função match() para encontrar todas as ocorrências de vogais na frase
  const vogaisEncontradas = frase.match(regexVogais);

  // Se vogaisEncontradas for nulo (ou seja, não há vogais na frase), retorna 0
  if (!vogaisEncontradas) {
    return 0;
  }

  // Caso contrário, retornamos o número de vogais encontradas
  return vogaisEncontradas.length;
}

rl.question('Digite uma frase: ', (frase) => {
  const numeroVogais = contarVogais(frase);
  console.log(`O número de vogais na frase é: ${numeroVogais}`);
  rl.close();
});
