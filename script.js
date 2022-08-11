const botaoAbrir = document.querySelector(" [data-modal='abrir']");

const containerModal = document.querySelector('[data-modal="container"]');
const botaoFechar = document.querySelector('[data-modal="fechar"]');

if (botaoAbrir && botaoFechar && containerModal) {
    function addClasse(event) {
        event.preventDefault();
        containerModal.classList.add("ativo");
    }

    function desativarClasse(event) {
        event.preventDefault();
        containerModal.classList.remove("ativo");
    }

    function cliqueForaModal(event) {
        if (event.target === this) {
            // o this se refere ao objeto principal, no caso, se refere ao pai.
            desativarClasse(event);
        }
    }

    containerModal.addEventListener("click", cliqueForaModal);
    botaoAbrir.addEventListener("click", addClasse);
    botaoFechar.addEventListener("click", desativarClasse);
}