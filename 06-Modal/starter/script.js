'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// console.log(btnCloseModal);

// Open and close Modal
const closeModal = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

const openModal = () => {
        // console.log('Button clicked');
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
}




for(let i = 0; i < btnsOpenModal.length; i++){
    console.log(btnsOpenModal[i].addEventListener('click', openModal));
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);




const keyEscape = (event) => {
    // console.log(event.key);

    if(event.key === 'Escape' && !modal.classList.contains('hidden')){
       closeModal();
    }
}

document.addEventListener('keydown', keyEscape)