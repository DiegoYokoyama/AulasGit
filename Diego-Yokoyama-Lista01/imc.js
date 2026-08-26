const peso = 70;      // em kg
const altura = 1.75;  // em metros

function calcularIMC(peso, altura) {
  const imc = peso / (altura * altura);
  const imcFormatado = imc.toFixed(2);

  if (imc >= 18.5 && imc <= 24.9) {
    return `Seu IMC é ${imcFormatado}. Você está com o IMC ideal!`;
  } else {
    return `Seu IMC é ${imcFormatado}. Você precisa se cuidar.`;
  }
}

console.log(calcularIMC(peso, altura));