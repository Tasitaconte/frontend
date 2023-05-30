const openModal6 = document.querySelector('.btn-success1');
const modal6 =document.querySelector('.modal6');
const closeModal6 = document.querySelector('.modal6__close');

openModal6.addEventListener('click', (e)=>{
    e.preventDefault();
    modal6.classList.add('modal6--show');
    
});

closeModal6.addEventListener('click', (e)=>{
    e.preventDefault();
    modal6.classList.remove('modal6--show');
    
});