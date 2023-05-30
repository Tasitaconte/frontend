const openModal1 = document.querySelector('.btn-secondary');
const modal1 =document.querySelector('.modal1');
const closeModal1 = document.querySelector('.modal1__close');

openModal1.addEventListener('click', (e)=>{
    e.preventDefault();
    modal1.classList.add('modal1--show');
    
});

closeModal1.addEventListener('click', (e)=>{
    e.preventDefault();
    modal1.classList.remove('modal1--show');
    
});