const blocoIngredientes = document.querySelector('.block__ingredients')
const blocoPreparacao = document.querySelector('.block__preparation')
const blocoInformacoes = document.querySelector('.block__information')
const titleInformacoes = document.querySelector('.title__information')
const currentPage = location.pathname


function headerHighlight() {

  const menuItems = document.querySelectorAll("header .links a")
  const adminHeader = document.querySelectorAll("header .header-links a")

  for (item of menuItems) {
    if (currentPage.includes(item.getAttribute("href"))) {
      item.classList.add("active")
    }
  }

  for (item of adminHeader) {
    if (currentPage.includes(item.getAttribute("href"))) {
      item.classList.add("active")
      item.style.color = 'white'
    }
  }

}
headerHighlight()


const filterLayout = document.querySelector('.filter')

if (currentPage != "/") {
  filterLayout.style.display = 'none'
}




function showInformation(informationToShow, buttonClicked) {
  informationToShow.style.display != "flex" ? (informationToShow.style.display = "flex", buttonClicked.innerHTML = "ESCONDER") : (informationToShow.style.display = "none", buttonClicked.innerHTML = "MOSTRAR")
}


window.onload = function verifyInfo() {

  const paragrafoInformacao = document.getElementById('infoP')

  if (paragrafoInformacao.innerHTML == "") {
    titleInformacoes.style.display = 'none';
  }
}

/////////////////////////////

function addInput(mainDiv, inputDiv) {

  const newField = mainDiv[mainDiv.length - 1].cloneNode(true);

  if (newField.children[0].value == "") return false;

  newField.children[0].value = "";
  inputDiv.appendChild(newField);
}

const ingredients = document.querySelector("#ingredients")
const fieldContainer = document.querySelectorAll(".ingredient")

document
  .querySelector("#add-ingredient")
  .addEventListener("click", () => {
    addInput(fieldContainer, ingredients)
  })

const preparation = document.querySelector('#preparation')
const steps = document.querySelectorAll('.steps')


document
  .querySelector("#add-step")
  .addEventListener("click", () => {
    addInput(steps, preparation)
  })


