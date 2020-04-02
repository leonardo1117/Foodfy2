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


if(blocoInformacoes==''){
  blocoInformacoes.style.display = none;
}


function showInformation(informationToShow, buttonClicked) {

  if (informationToShow.style.display == 'none') {
    buttonClicked.addEventListener("click", function () {
      informationToShow.style.display = 'flex'
      buttonClicked.innerHTML = 'ESCONDER'
    })
  } else {
    buttonClicked.addEventListener("click", function () {
      informationToShow.style.display = 'none'
      buttonClicked.innerHTML = 'MOSTRAR'
    })
  }
}









//"FUNCIONANDO" com dois clicks e algo está errado com os parâmetros, os botões estão mostrando/escondendo outras divs
// function showInformation(informationToShow){

//   if(informationToShow.style.display == 'none'){
//     btnClose.addEventListener("click", function () {
//       informationToShow.style.display = 'initial'
//       btnClose.innerHTML = 'Esconder'
//     })
//   }else{
//     btnClose.addEventListener("click", function () {
//       informationToShow.style.display = 'none'
//       btnClose.innerHTML = 'Mostrar'
//     })
//   }
// }


