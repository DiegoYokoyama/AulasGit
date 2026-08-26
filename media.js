const numeros = [8, 12, 5, 20, 15];

let soma = 0;

for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i];
}

const media = soma / numeros.length;

console.log(`A média dos valores é: ${media}`);