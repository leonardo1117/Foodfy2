const recepies = document.querySelectorAll('.receita')


//mostrando as receitas e os criadores com base nos objetos criados no arquivo data.js
for (let receita of recepies) {
  const imgId = receita.getAttribute("id")
  const recepieName = receita.children[1].innerHTML
  const recepieBy = receita.children[2].innerHTML
  receita.addEventListener("click", function () {
    window.location.href = `/recepie?id=${imgId}`


  })
}

const blocoIngredientes = document.querySelector('.block__ingredients')
const blocoPreparacao = document.querySelector('.block__preparation')
const blocoInformacoes = document.querySelector('.block__information')
const titleInformacoes = document.querySelector('.title__information')



//função de mostrar/esconder informações com os botões na frente dos tópicos da página
function showInformation(informationToShow, buttonClicked) {

    if (informationToShow.style.display == 'none') {
      buttonClicked.addEventListener("click", function () {
        informationToShow.style.display = 'flex'
        buttonClicked.innerHTML = 'ESCONDER'
        console.log('clicked')
      })
    } else {
      buttonClicked.addEventListener("click", function () {
        informationToShow.style.display = 'none'
        buttonClicked.innerHTML = 'MOSTRAR'
        console.log('clicked')

      })
    }
  }

const paragrafoInformacao = document.getElementById('infoP')

window.onload = function verifyInfo() {

  if (paragrafoInformacao.innerHTML == "") {
    titleInformacoes.style.display = 'none';
  }
}

