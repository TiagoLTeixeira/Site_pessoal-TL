let botao = document.getElementById("botaoTema");

botao.addEventListener("click", function() {

    document.body.classList.toggle("escuro");

});


function abrirImagem(imagem) {

    let popup = document.getElementById("popup-Imagem");
    let imagemGrande = document.getElementById("imagemGrande");

    popup.style.display = "flex";

    imagemGrande.src = imagem.src;
}


function fecharImagem() {

    let popup = document.getElementById("popup-Imagem");

    popup.style.display = "none";
}

const secoes = document.querySelectorAll(".fade-in");

const observador = new IntersectionObserver(function(entradas) {

    entradas.forEach(function(entrada) {

        if (entrada.isIntersecting) {
            entrada.target.classList.add("visivel");
        }

    });

}, { threshold: 0.15 });

secoes.forEach(function(secao) {
    observador.observe(secao);
});