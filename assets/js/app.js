const hamMenu = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamMenu.addEventListener('click', ()=>{
    hamMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
});


const questions = document.querySelectorAll(".question");

console.log(questions);

questions.forEach((question) => {
    question.addEventListener("click",function () {
        question.classList.toggle("active");
    });
});