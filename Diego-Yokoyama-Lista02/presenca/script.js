function confirmarPresenca() {
    const checkboxes = document.querySelectorAll(".presenca");
    const presentes = [];
    const ausentes = [];

    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            presentes.push(checkbox.dataset.nome);
        } else {
            ausentes.push(checkbox.dataset.nome);
        }
    });

    document.getElementById("presentes").innerHTML = presentes
        .map((nome) => `<span class="presente">${nome}</span>`)
        .join(", ");

    document.getElementById("ausentes").innerHTML = ausentes
        .map((nome) => `<span class="ausente">${nome}</span>`)
        .join(", ");
}