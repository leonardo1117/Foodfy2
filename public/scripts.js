const recepies = document.querySelectorAll('.receita')

//mostrando as receitas e os criadores com base nos objetos criados no arquivo data.js
for (let receita of recepies) {
  const imgId = receita.getAttribute("id")
  const recepieName = receita.children[1].innerHTML
  const recepieBy = receita.children[2].innerHTML
  receita.addEventListener("click", function () {
    window.location.href = `/recipeInfo?id=${imgId}`


  })
}

const blocoIngredientes = document.querySelector('.block__ingredients')
const blocoPreparacao = document.querySelector('.block__preparation')
const blocoInformacoes = document.querySelector('.block__information')
const titleInformacoes = document.querySelector('.title__information')

//função de mostrar/esconder informações com os botões na frente dos tópicos da página
function showInformation(informationToShow, buttonClicked) {
  informationToShow.style.display != "flex" ? (informationToShow.style.display = "flex", buttonClicked.innerHTML = "ESCONDER") : (informationToShow.style.display = "none", buttonClicked.innerHTML = "MOSTRAR")
}

const paragrafoInformacao = document.getElementById('infoP')

window.onload = function verifyInfo() {

  if (paragrafoInformacao.innerHTML == "") {
    titleInformacoes.style.display = 'none';
  }
}


// ADICIONAR NOVO CAMPO COM BOTÃO --- TESTE
// const btnAddIngredient = document.getElementById('add-ingredient')
// const inputIngredient = document.getElementById('inputIngredient')
// const ingredient = document.querySelector('.ingredient')



// btnAddIngredient.addEventListener("click", function (event) {
//   if (ingredient.lastChild != "") {
//     let newIngredient = document.createElement('input')
//     newIngredient.name = "ingredients[]"
//     newIngredient.placeholder = "Novo ingrediente"
//     ingredient.appendChild(newIngredient)
//     this.parentElement.insertBefore(newIngredient, this.parentElement.lastElementChild)
//   }
// })

// const btnAddStep = document.getElementById('add-step')
// const inputStep = document.getElementById('inputStep')


// btnAddStep.addEventListener("click", function () {
//   let newStep = document.createElement('input')
//   newStep.name = "preparation[]"
//   newStep.placeholder = "Novo passo"
//   inputStep.appendChild(newStep)
//   this.parentElement.insertBefore(newStep, this.parentElement.lastElementChild)
// })

function addInput(mainDiv, inputDiv) {

  // Realiza um clone do último ingrediente adicionado
  const newField = mainDiv[mainDiv.length - 1].cloneNode(true);


  // Não adiciona um novo input se o último tem um valor vazio
  if (newField.children[0].value == "") return false;

  // Deixa o valor do input vazio
  newField.children[0].value = "";
  inputDiv.appendChild(newField);
}

const ingredients = document.querySelector("#ingredients");
const fieldContainer = document.querySelectorAll(".ingredient");

document
  .querySelector("#add-ingredient")
  .addEventListener("click", () => {
    addInput(fieldContainer, ingredients)
  })

const preparation = document.querySelector('#preparation')
const steps = document.querySelector('.steps')

document
  .querySelector("#add-step")
  .addEventListener("click", () => {
    addInput(steps, preparation)
  })