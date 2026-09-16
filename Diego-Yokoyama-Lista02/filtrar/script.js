function filtrar() {
    const texto = document.getElementById("filtro").value.toLowerCase();
    const itens = document.getElementById("lista").getElementsByTagName("li");

    for (let i = 0; i < itens.length; i++) {
        const nome = itens[i].textContent.toLowerCase();

        if (nome.includes(texto)) {
            itens[i].style.display = "";
        } else {
            itens[i].style.display = "none";
        }
    }
}