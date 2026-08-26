let numeros = [15, 8, 20];

function ordemCrescente(vetor) {
    let temp;

    // Comparação entre os números
    if (vetor[0] > vetor[1]) {
        temp = vetor[0];
        vetor[0] = vetor[1];
        vetor[1] = temp;
    }

    if (vetor[0] > vetor[2]) {
        temp = vetor[0];
        vetor[0] = vetor[2];
        vetor[2] = temp;
    }

    if (vetor[1] > vetor[2]) {
        temp = vetor[1];
        vetor[1] = vetor[2];
        vetor[2] = temp;
    }

    return "Números em ordem crescente: " + vetor[0] + ", " + vetor[1] + ", " + vetor[2];
}

console.log(ordemCrescente(numeros));