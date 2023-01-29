// ----------------------------------------------------//
 // selecionado as todas as class !!!!
const controls = document.querySelectorAll('.control')

// Atribuidno um valor ao currentItem
let currentItem = 0

// ----------------------------------------------------//
 // selecionado as todas as class !!!!
const items = document.querySelectorAll('.item')
// contando a quantidaade de elementos dentro da class
const maxItems = items.length

// ----------------------------------------------------//
// percorrendo os elemento para realizar o efeito SLIDER

controls.forEach(control => {
  control.addEventListener('click', () => {
    const isLeft = control.classList.contains('arrow-left')
    console.log('Control clicked', isLeft, currentItem)

    // ----------------------------------------------------//
    // se a condição satifazer vai adicionar ou negativar o 'currentItem'
    if(isLeft) {
      currentItem -= 1 
    } else {
      currentItem += 1
    }

    // ----------------------------------------------------//
    // Se currentItem maior que a quantidade de imagens que eu tenho na pagina, o currentItem vai voltar na imagem 1
    if(currentItem >= maxItems) {
      // abaixo esta sendo zerado, para voltar no elemento 0 !
      currentItem = 0
    }
    // Se caso for menor ele vai retornar ao ultimo elemento !!!!
    if(currentItem < 0) {
      currentItem = maxItems -1
    }

    // ----------------------------------------------------//

    // selecionando a class 'Determinda' e removendo !!!
    items.forEach(item => item.classList.remove('current-item'))
    
    // ----------------------------------------------------//
    
    // pegando as imagens e centralizando para dar o efeito de slide !!!
    items[currentItem].scrollIntoView({
      //acção ue centraliza a imagem !!!
      inline: "center",
      // Ação que da uma suavizada na mudaanção das imagens !!!
      behavior: "smooth"
    })

    items[currentItem].classList.add("current-item")


  })
})