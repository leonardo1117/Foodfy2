const recepies = document.querySelectorAll('.receita')


for (let receita of recepies) {
  const imgId = receita.getAttribute("id")
  const recepieName = receita.children[1].innerHTML
  const recepieBy = receita.children[2].innerHTML
  receita.addEventListener("click", function () {
    window.location.href = `/recepie?id=${imgId}`


  })
}

const btnShow = document.getElementById(showIngrediends)
const btnClose = document.querySelector('ingredients')
const blocoIngredientes = document.querySelector('.block__ingredients')


// if (blocoIngredientes.style.display != 'inital') {
//   btnShow.addEventListener("click", function () {
//     blocoIngredientes.classList.add('active')

//     btnShow.innerHTML = 'Esconder'
//   }

// )}if(blocoIngredientes.style.display == 'inital'){
//   btnShow.addEventListener("click", function () {
//     blocoIngredientes.classList.remove('active')
//     btnShow.innerHTML = 'Mostrar'
//   })
// }

btnShow.addEventListener("click", function(){
  console.log('it does work')
})


// function showInformation() {

//   if (blocoIngredientes.style.display == 'none') {
//     btnShow.addEventListener("click", function () {
//       blocoIngredientes.style.display = 'initial'
//       btnShow.innerHTML = 'Esconder'
//     })
//   }
// }

