let paginaAtual = 0;
const paginas = document.querySelectorAll(".pagina");
const livro = document.getElementById("livro");

function abrirLivro() {
    document.querySelector(".capa").style.display = "none";
    livro.classList.remove("hidden");
    mostrarPagina();
}

function mostrarPagina() {
    paginas.forEach((p, i) => p.style.display = (i === paginaAtual ? "block" : "none"));
}

function proximaPagina() {
    if (paginaAtual < paginas.length - 1) {
        paginaAtual++;
        mostrarPagina();
    }
}

function paginaAnterior() {
    if (paginaAtual > 0) {
        paginaAtual--;
        mostrarPagina();
    }
}