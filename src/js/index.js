import { setupMenu, toggleMenu, openMenu, closeMenu, closeMenuOnItemClick } from "./modules/menu.js";

setupMenu()

const mediaQuerySmall = window.matchMedia('(max-width: 768px)')
const mediaQueryLarge = window.matchMedia('(min-width: 1024px)')

function handleMediaQueryChange(){
    if(mediaQuerySmall.matches){
        console.log('até 768px')
        toggleMenu(false)
        closeMenuOnItemClick()
    }else if(mediaQueryLarge.matches){
        console.log('maior que 1024px')
        toggleMenu(true)
        // ENTRA EFEITOS DE HOVER AQUI
    }else{
        console.log('entre 768px e 1024px')
        console.log('TAMANHO MEDIO')
        toggleMenu(true) //funcionando corretamente, menu aberto
        menu.classList.add('medium')
        closeMenuOnItemClick()
    }
}

function addMediaQueryListerners(){
    mediaQuerySmall.addEventListener('change', handleMediaQueryChange)
    mediaQueryLarge.addEventListener('change', handleMediaQueryChange)
}

addMediaQueryListerners()
handleMediaQueryChange()


const arrowUp = document.querySelector('#arrow-up')

function arrowNavigationToTop(){
    window.addEventListener('scroll', ()=> {
        arrowUp.classList.toggle('show', window.scrollY > 500)
    })

    arrowUp.addEventListener('click', function(e){
        e.preventDefault()
        window.scrollTo({
        top: 0
        })
    })
}
arrowNavigationToTop()