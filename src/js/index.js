import { setupMenu, toggleMenu, closeMenuOnItemClick } from "./modules/menu.js";
import { AtualizarCarrossel, initCarousel } from "./modules/carousel.js";


const mediaQuerySmall = window.matchMedia('(max-width: 768px)')
const mediaQueryLarge = window.matchMedia('(min-width: 1024px)')

document.addEventListener('DOMContentLoaded', () =>{
    initCarousel({auto: true, interval: 4000})
    
    addMediaQueryListerners()
    setupMenu()
    handleMediaQueryChange()
})
AtualizarCarrossel()


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

let currentYear = new Date().getFullYear()
let copyYear = document.querySelector('#copy-year')
copyYear.textContent = currentYear