const produto = {
  nome: "Notebook",
  preco: 3500.00,
  estoque: 12
};

console.log("Propriedades do produto:");

for (let propriedade in produto) {
  console.log(`${propriedade}: ${produto[propriedade]}`);
}