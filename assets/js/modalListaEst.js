const openModal4 = document.querySelector('.botonListaEst');
const modal4 =document.querySelector('.modal4');
const closeModal4 = document.querySelector('.modal4__close');

openModal4.addEventListener('click', (e)=>{
    e.preventDefault();
    modal4.classList.add('modal4--show');
    
});

closeModal4.addEventListener('click', (e)=>{
    e.preventDefault();
    modal4.classList.remove('modal4--show');
    
});