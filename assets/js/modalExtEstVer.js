const openModal3 = document.querySelector('.fa-eye');
const modal3 =document.querySelector('.modal3');
const closeModal3 = document.querySelector('.modal3__close');

openModal3.addEventListener('click', (e)=>{
    e.preventDefault();
    modal3.classList.add('modal3--show');
    
});

closeModal3.addEventListener('click', (e)=>{
    e.preventDefault();
    modal3.classList.remove('modal3--show');
    
});