const carros = [
  { marca: "Toyota", modelo: "Corolla", ano: 2018 },
  { marca: "Honda", modelo: "Civic", ano: 2014 },
  { marca: "Ford", modelo: "Focus", ano: 2016 },
  { marca: "Volkswagen", modelo: "Gol", ano: 2012 },
  { marca: "Chevrolet", modelo: "Onix", ano: 2020 }
];

console.log("Carros fabricados depois de 2015:");

for (let i = 0; i < carros.length; i++) {
  if (carros[i].ano > 2015) {
    console.log(`${carros[i].marca} ${carros[i].modelo} (${carros[i].ano})`);
  }
}