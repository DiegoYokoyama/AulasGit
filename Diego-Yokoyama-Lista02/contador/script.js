let contador = 0;

function incrementar() {
    contador++;
    atualizarTexto();
}

function zerar() {
    contador = 0;
    atualizarTexto();
}

function atualizarTexto() {
    document.getElementById("cliques").textContent = `Cliques: ${contador}`;
}