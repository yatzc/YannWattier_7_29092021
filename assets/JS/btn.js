// DOM btn
const btnB = document.querySelector('.btn-blue');
const btnG = document.querySelector('.btn-green');
const btnR = document.querySelector('.btn-red');
// DOM bloc
const blocB = document.querySelector('.blocB');
const blocG = document.querySelector('.blocG');
const blocR = document.querySelector('.blocR');
// DOM btn label
const labelB = document.querySelector('.btn-blue label');
const labelG = document.querySelector('.btn-green label');
const labelR = document.querySelector('.btn-red label');
// DOM btn input
const inputB = document.querySelector('.ingredients');
const inputG = document.querySelector('.appliances');
const inputR = document.querySelector('.ustensils');


btnB.addEventListener('click', () => {
    blocB.classList.toggle('bloc-clicked');
    btnB.classList.toggle('btn-clicked');
    labelB.classList.toggle('hidden');
    inputB.classList.toggle('ingredients-clicked');

    blocB.style.display = "block";
    blocG.style.display = "none";
    blocR.style.display = "none";

    blocG.classList.remove('bloc-clicked');
    blocR.classList.remove('bloc-clicked');
    btnG.classList.remove('btn-clicked');
    btnR.classList.remove('btn-clicked');
    labelG.classList.remove('hidden');
    labelR.classList.remove('hidden');
    inputG.classList.remove('ingredients-clicked');
    inputR.classList.remove('ingredients-clicked');
});

btnG.addEventListener('click', () => {
    blocG.classList.toggle('bloc-clicked');
    btnG.classList.toggle('btn-clicked');
    labelG.classList.toggle('hidden');
    inputG.classList.toggle('ingredients-clicked');

    blocG.style.display = "block";
    blocB.style.display = "none";
    blocR.style.display = "none";

    blocB.classList.remove('bloc-clicked');
    blocR.classList.remove('bloc-clicked');
    btnB.classList.remove('btn-clicked');
    btnR.classList.remove('btn-clicked');
    labelB.classList.remove('hidden');
    labelR.classList.remove('hidden');
    inputB.classList.remove('ingredients-clicked');
    inputR.classList.remove('ingredients-clicked');
});

btnR.addEventListener('click', () => {
    blocR.classList.toggle('bloc-clicked');
    btnR.classList.toggle('btn-clicked');
    labelR.classList.toggle('hidden');
    inputR.classList.toggle('ingredients-clicked');

    blocR.style.display = "block";
    blocB.style.display = "none";
    blocG.style.display = "none";

    blocG.classList.remove('bloc-clicked');
    blocB.classList.remove('bloc-clicked');
    btnG.classList.remove('btn-clicked');
    btnB.classList.remove('btn-clicked');
    labelG.classList.remove('hidden');
    labelB.classList.remove('hidden');
    inputG.classList.remove('ingredients-clicked');
    inputB.classList.remove('ingredients-clicked');
  
});

//************************************************
// export function btn(btnR, btnG, btnB, blocR, blocG, blocB, labelR, labelG, labelB, inputR, inputG, inputB) {
//     btnR.addEventListener('click', () => {
//         blocR.classList.toggle('bloc-clicked');
//         btnR.classList.toggle('btn-clicked');
//         labelR.classList.toggle('hidden');
//         inputR.classList.toggle('ingredients-clicked');
    
//         blocR.style.display = "block";
//         blocB.style.display = "none";
//         blocG.style.display = "none";
    
//         blocG.classList.remove('bloc-clicked');
//         blocB.classList.remove('bloc-clicked');
//         btnG.classList.remove('btn-clicked');
//         btnB.classList.remove('btn-clicked');
//         labelG.classList.remove('hidden');
//         labelB.classList.remove('hidden');
//         inputG.classList.remove('ingredients-clicked');
//         inputB.classList.remove('ingredients-clicked');
      
//     });
// }

// btn(btnR, btnG, btnB, blocR, blocG, blocB, labelR, labelG, labelB, inputR, inputG, inputB);
// btn(btnR, btnG, btnB, blocR, blocG, blocB, labelR, labelG, labelB, inputR, inputG, inputB);
// btn(btnR, btnG, btnB, blocR, blocG, blocB, labelR, labelG, labelB, inputR, inputG, inputB);