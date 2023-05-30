const openModal5 = document.querySelector('.botonListaDoc');
const modal5 =document.querySelector('.modal5');
const closeModal5 = document.querySelector('.modal5__close');

openModal5.addEventListener('click', (e)=>{
    e.preventDefault();
    modal5.classList.add('modal5--show');
    
});

closeModal5.addEventListener('click', (e)=>{
    e.preventDefault();
    modal5.classList.remove('modal5--show');
    
});