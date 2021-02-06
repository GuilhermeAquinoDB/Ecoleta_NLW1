// pegar o botão
// procura no page-home dentro do main o a
const buttonSearch = document.querySelector("#page-home main a")
// puxar o modal
const modal = document.querySelector("#modal")
const close = document.querySelector("#modal .header a")
// houve um evento de clique
buttonSearch.addEventListener("click", () => {

    modal.classList.remove("hide")
})

close.addEventListener("click", () => {

    modal.classList.add("hide")
})