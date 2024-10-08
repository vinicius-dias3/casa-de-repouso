export const btnMenu = document.querySelector('#hamburguer-button')
export const menu = document.querySelector('#menu')

export function toggleMenu(isOpen){
    btnMenu.setAttribute('aria-expanded', isOpen);
    menu.setAttribute('aria-hidden', !isOpen);
    menu.classList.toggle('menu-closed', !isOpen);
    menu.classList.toggle('menu', isOpen)
    menu.classList.remove('medium')
}

export function openMenu(){
    btnMenu.setAttribute('aria-expanded', 'true')
    menu.setAttribute('aria-hidden', 'false')
    menu.classList.remove('menu-closed')
    menu.classList.add('menu')
}

export function closeMenu(){
    btnMenu.setAttribute('aria-expanded', 'false')
    menu.setAttribute('aria-hidden', 'true')
    menu.classList.remove('menu')
    menu.classList.add('menu-closed')
    console.log('closeMenu chamada')
}

export function closeMenuOnClickOutside(event){
    if(!menu.contains(event.target) && !btnMenu.contains(event.target)){
        toggleMenu(false)
        document.removeEventListener('click', closeMenuOnClickOutside)
    }
}

export function closeMenuOnItemClick(){
    const menuItems = document.querySelectorAll('#menu li a');

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            toggleMenu(false)
        })
    })
}

export function setupMenu(){
    toggleMenu(false)
    btnMenu.addEventListener('click', function() {
        let expanded = this.getAttribute('aria-expanded') === 'true'
        document.removeEventListener('click', toggleMenu(false))
        
        menu.classList.toggle('menu-closed', expanded)
        menu.classList.toggle('menu', !expanded)
    
        this.setAttribute('aria-expanded', !expanded)
        menu.setAttribute('aria-hidden', expanded)
        
        setTimeout(function(){
            if(!expanded){
                document.addEventListener('click', closeMenuOnClickOutside)
            }
        }, 1)
    })
}