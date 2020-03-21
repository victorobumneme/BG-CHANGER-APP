const body = document.querySelector('body');
const btnBlue = document.querySelector('#color-blue');
const btnPurple = document.querySelector('#color-purple');
const btnGreen = document.querySelector('#color-green');
const btnNone = document.querySelector('#color-none');

//APPLYING LOGIC

btnBlue.addEventListener('click', ()=> {
    body.classList.add('bg-blue', 'text-white');
    body.classList.remove('bg-purple', 'bg-green');
});

btnPurple.addEventListener('click', ()=> {
    body.classList.add('bg-purple', 'text-white');
    body.classList.remove('bg-blue', 'bg-green');
});

btnGreen.addEventListener('click', ()=> {
    body.classList.add('bg-green', 'text-white');
    body.classList.remove('bg-blue', 'bg-purple');
});

btnNone.addEventListener('click', ()=> {
   body.classList.remove('bg-blue', 'bg-purple', 'bg-green', 'text-white');
});
