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

function showFilterDisplay() {
  const filterLayout = document.querySelector('.filter')

  if (currentPage == "/") {
    filterLayout.style.display = 'inline'
  }
}
showFilterDisplay()


function showInformation(informationToShow, buttonClicked) {
  informationToShow.style.display != "flex" ? (informationToShow.style.display = "flex", buttonClicked.innerHTML = "ESCONDER") : (informationToShow.style.display = "none", buttonClicked.innerHTML = "MOSTRAR")
}


if (currentPage == "/recipes/") {
  window.onload = function verifyInfo() {

    const paragrafoInformacao = document.getElementById('infoP')

    if (paragrafoInformacao.innerHTML == "") {
      titleInformacoes.style.display = 'none';
    }
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
const totalIngredients = document.querySelectorAll(".ingredient")

document
  .querySelector("#add-ingredient")
  .addEventListener("click", () => {
    addInput(totalIngredients, ingredients)
  })

const preparation = document.querySelector('#preparation')
const steps = document.querySelectorAll('.steps')

document
  .querySelector("#add-step")
  .addEventListener("click", () => {
    addInput(steps, preparation)
  })



// function paginate(selectedPage, totalPages) {
//   let pages = [],
//     oldPage

//   for (let currentPage = 1; currentPage <= totalPages; currentPage++) {
//     const firstAndLastPage = currentPage == 1 || currentPage == totalPages
//     const pagesAfterSelectedPage = currentPage <= selectedPage + 2
//     const pagesBeforeSelectedPage = currentPage >= selectedPage - 2

//     if (firstAndLastPage || pagesAfterSelectedPage && pagesAfterSelectedPage) {
//       if (oldPage && currentPage - oldPage > 2) {
//         pages.push("...")
//       }
//       if (oldPage && currentPage - oldPage == 2) {
//         pages.push(oldPage + 1)
//       }
//       pages.push(currentPage)

//       oldPage = currentPage
//     }
//   }

//   return pages

// }


// function createPagination(pagination) {
//   const page = +pagination.dataset.page
//   const total = +pagination.dataset.total
//   const filter = +pagination.dataset.filter
//   const pages = paginate(page, total)

//   let elements = ""

//   for (let page of pages) {
//     if (String(page).includes("...")) {
//       elements += `<span>${page}</span>`
//     } else {
//       if (filter) {
//         elements += `<a href="?page${page}&filter=${filter}">${page}</a>`
//       } else {
//         elements += `<a href="?page=${page}">${page}</a>`
//       }
//     }
//   }
//   pagination.innerHTML = elements
// }

// const pagination = document.querySelector('.pagination')

// if (pagination) {
//   createPagination(pagination)
// }




// PHOTOS UPLOAD

const PhotosUpload = {
  input: "",
  files: [],
  preview: document.querySelector('#photos-preview'),
  uploadLimit: 5,
  handleFileInput(event) {
    const { files: fileList } = event.target

    PhotosUpload.input = event.target

    if (PhotosUpload.hasLimit(event)) return

    Array.from(fileList).forEach(file => {

      PhotosUpload.files.push(file)

      const reader = new FileReader()

      reader.onload = () => {
        const image = new Image()
        image.src = String(reader.result)

        const div = PhotosUpload.getContainer(image)

        PhotosUpload.preview.appendChild(div)

      }
      reader.readAsDataURL(file)
    })

  },
  getContainer(image) {
    const div = document.createElement('div')
    div.classList.add('photo')

    div.onclick = PhotosUpload.removePhoto

    div.appendChild(image)

    div.appendChild(PhotosUpload.getRemoveButton())

    return div
  },
  hasLimit(event) {
    const { uploadLimit, input: fileList } = PhotosUpload

    if (fileList.length > uploadLimit) {
      alert(`Por favor, envie no máximo ${uploadLimit} fotos da receita!`)
      event.preventDefault()
      return true
    }
    return false
  },
  getAllFiles() {
    const dataTransfer = new ClipboardEvent("").clipboardData || new DataTransfer()

    PhotosUpload.files.forEach(file => dataTransfer.items.add(file))

    return dataTransfer.files
  },
  getRemoveButton() {
    const button = document.createElement('i')
    button.classList.add('material-icons')

    button.innerHTML = 'close'
    return button
  },
  removePhoto(event) {
    const photoDiv = event.target.parentNode
    const photosArray = Array.from(PhotosUpload.preview.children)
    const index = photosArray.indexOf(photoDiv)

    PhotosUpload.files.splice(index, 1)
    PhotosUpload.input.files = PhotosUpload.getAllFiles()

    photoDiv.remove()
  }
}