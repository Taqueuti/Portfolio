const menu = document.querySelector(".menu-burger-container");

const active = () => {
    menu.classList.toggle('active');
    
    event.preventDefault();
}

menu.addEventListener('click', active);