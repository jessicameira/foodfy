const modalOverlay = document.querySelector('.modal-overlay')
const receitas = document.getElementsByClassName('receitas')
const modal = document.querySelector(".modal-overlay .modal")

for (let receita of receitas){
    receita.addEventListener("click", ()=> {

        const recImagem = document.querySelector(`#${receita.id} img`).getAttribute("src")
        const recNome = document.querySelector(`#${receita.id} h4`).textContent
        const recAutor = document.querySelector(`#${receita.id} p`).textContent

        console.log(recImagem, recNome, recAutor)
        showRecipe (recImagem, recNome, recAutor)
        modalOverlay.classList.add("active")

    })

    
}
function showRecipe (recImagem, recNome, recAutor){
    modal.innerHTML = `<div>
                <img src="${recImagem}" alt="${recNome}">
                <h4>${recNome} </h4>
                <p> ${recAutor}</p>
            </div>
            <div> <a href="#" id="closeModal">Fechar modal</a> </div>`
            let butFechar = document.querySelector('.modal-overlay .modal a')
    butFechar.addEventListener("click", () =>{
        modalOverlay.classList.remove("active")
    })
}