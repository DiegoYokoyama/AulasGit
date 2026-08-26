const numeros = [42, 17, 89, 3, 56];

let maior = numeros[0];
let menor = numeros[0];

for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] > maior) {
    maior = numeros[i];
  }
  if (numeros[i] < menor) {
    menor = numeros[i];
  }
}

console.log(`O maior valor é: ${maior}`);
console.log(`O menor valor é: ${menor}`);