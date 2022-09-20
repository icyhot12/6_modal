const openBtn = document.querySelector('.open');
const closeBtn = document.querySelector('.close');
const modal = document.querySelector('.modal-background');

openBtn.addEventListener('click',function() {
    modal.classList.toggle('modal-visible')
})

closeBtn.addEventListener('click',function() {
    modal.classList.toggle('modal-visible')
})