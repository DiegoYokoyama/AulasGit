const numeros = [15, 3, 9];

function ordenarCrescente(vetor) {

  const ordenado = [...vetor].sort((a, b) => a - b);
  return `Os números em ordem crescente são: ${ordenado.join(", ")}`;
}

console.log(ordenarCrescente(numeros));