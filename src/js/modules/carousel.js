let images = [
    {src: './src/images/pexels-karolina-grabowska-5207029.jpg', alt: 'enfermeira gesto coração'},
    {src: './src/images/idosa-tomando-cafe.jpg', alt: 'idosa tomando café'},
    {src: './src/images/homem-idoso-tomando-remedio.jpg', alt: 'homem tomando remédio'},
    {src: './src/images/maos-idosa.jpg', alt: 'mãos idosa'}
]

let carouselImage = null
let currentIndex = 0
let intervalId = null
let indicatorsContainer = null

function createIndicators(){
    indicatorsContainer.innerHTML = ''

    images.forEach((_, index) => {
        const indicator = document.createElement('input')
        indicator.type = 'radio'
        indicator.name = 'carousel-btn'
        //para saber qual input foi clicado\/
        indicator.value = index
        indicator.classList.add('indicator')
        indicatorsContainer.appendChild(indicator)
    });
}

// alterar nome, quando terminar
export function AtualizarCarrossel () {
    // carouselImage = document.querySelector('#carousel-image')
    if(!carouselImage) return;
    carouselImage.src = images[currentIndex].src
    carouselImage.alt = images[currentIndex].alt

    document.querySelectorAll('.indicator').forEach((indicator, index) => {
        indicator.checked = (index === currentIndex)
    })
}

function handleIndicatorChange(e){
    if(e.target.matches('input[type=radio]')){
        currentIndex = Number(e.target.value)
        AtualizarCarrossel()
    }
}

function nextImage(){
    currentIndex = (currentIndex + 1) % images.length
    AtualizarCarrossel()
}

function startCarousel(interval = 3000){
    intervalId = setInterval(nextImage, interval)
}


export function initCarousel ({auto = true, interval = 3000} = {}){
    carouselImage = document.querySelector('#carousel-image')
    indicatorsContainer = document.querySelector('.indicators')

    createIndicators()
    AtualizarCarrossel()

    //evento de change nos radios
    indicatorsContainer.addEventListener('change', handleIndicatorChange)

    if(auto) startCarousel(interval)

}