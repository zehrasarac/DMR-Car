const hamMenu = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamMenu.addEventListener('click', ()=>{
    hamMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
})

