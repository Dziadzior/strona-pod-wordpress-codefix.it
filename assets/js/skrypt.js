let nawigacjaLista = document.querySelector('.nawigacja')
let menuPrzycisk = document.querySelector('.menu-przycisk')
let zamknijPrzycisk = document.querySelector('.zamknij-przycisk')

menuPrzycisk.addEventListener('click', function () {
	nawigacjaLista.classList.add('aktywny2')
})

zamknijPrzycisk.addEventListener('click', function () {
	nawigacjaLista.classList.remove('aktywny2')
})
