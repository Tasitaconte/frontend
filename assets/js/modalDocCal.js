const openModal2 = document.querySelector('.btn-primary');
const modal2 =document.querySelector('.modal2');
const closeModal2 = document.querySelector('.modal2__close');

openModal2.addEventListener('click', (e)=>{
    e.preventDefault();
    modal2.classList.add('modal2--show');
    
});

closeModal2.addEventListener('click', (e)=>{
    e.preventDefault();
    modal2.classList.remove('modal2--show');
    
});