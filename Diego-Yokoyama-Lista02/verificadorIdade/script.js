function verificar() {
    const ano = Number(document.getElementById("ano").value);
    const sexo = document.querySelector('input[name="sexo"]:checked').value;
    const anoAtual = new Date().getFullYear();
    const idade = anoAtual - ano;

    document.getElementById("resultado").textContent =
        `Detectamos ${sexo === "Masculino" ? "homem" : "mulher"} com ${idade} anos.`;

    document.getElementById("imagem").textContent = escolherImagem(idade, sexo);
    document.getElementById("imagem").style.display = "flex";
    document.getElementById("imagem").style.alignItems = "center";
    document.getElementById("imagem").style.justifyContent = "center";
}

function escolherImagem(idade, sexo) {
    const masculino = sexo === "Masculino";

    if (idade <= 2) {
        return "👶";
    } else if (idade <= 12) {
        return masculino ? "👦" : "👧";
    } else if (idade <= 17) {
        return masculino ? "🧑" : "👩‍🦱";
    } else if (idade <= 59) {
        return masculino ? "👨" : "👩";
    } else {
        return masculino ? "👴" : "👵";
    }
}