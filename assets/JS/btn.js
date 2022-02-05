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


btnB.addEventListener('click', (e) => {
    blocB.classList.toggle('bloc-clicked');
    btnB.classList.toggle('btn-clicked');
    labelB.classList.toggle('bloc-clicked');
    inputB.classList.toggle('ingredients-clicked');

//   blocB.style.display = "flex";
//   blocG.style.display = "none";
//   blocR.style.display = "none";
});

btnG.addEventListener('click', (e) => {
    blocG.classList.toggle('bloc-clicked');
    btnG.classList.toggle('btn-clicked');
    labelG.classList.toggle('bloc-clicked');
    inputG.classList.toggle('ingredients-clicked');

//   blocG.style.display = "flex";
//   blocB.style.display = "none";
//   blocR.style.display = "none";
});

btnR.addEventListener('click', () => {
    blocR.classList.toggle('bloc-clicked');
    btnR.classList.toggle('btn-clicked');
    labelR.classList.toggle('bloc-clicked');
    inputR.classList.toggle('ingredients-clicked');

//   blocR.style.display = "flex";
//   blocB.style.display = "none";
//   blocG.style.display = "none";
  
});

//************************************************
// const btnAll = document.querySelectorAll(".btn");
// console.log(btnAll);


// btnAll.forEach((btns) => {
//   btns.addEventListener("click", (e) => {
//     console.log(e.target);
//     e.target.style.transform = "scale(0.7)";
//   });
// });
























// const _bloc_blue = document.querySelector('#bloc_blue');
// const _bloc_green = document.querySelector('#bloc_green');
// const _bloc_red = document.querySelector('#bloc_red');

// const liItems   = document.querySelectorAll('.dropdown li');

// export var toggleIndex = true;



// // ========================================  BTN BLUE
// const _btn_blue = document.querySelectorAll("#btn_blue");
// _btn_blue.forEach(btnDrop => {
//     btnDrop.addEventListener("click", toggleDropDown_blue);
// });

// export function toggleDropDown_blue(){
//     if(!toggleIndex) {
//         _bloc_blue.style.display = 'block';
//         _bloc_blue.style.height = `${_bloc_blue.scrollHeight}px`;

//         toggleIndex = true;
//         return;
//     }

//     _bloc_blue.style.height = 0;
//     toggleIndex = false;
// }
// liItems.forEach(li => li.addEventListener('click', toggleDropDown_blue))



// // ========================================  BTN GREEN 
// const _btn_green = document.querySelectorAll("#btn_green");
// _btn_green.forEach(btnDrop => {
//     btnDrop.addEventListener("click", toggleDropDown_green);
// });
// export function toggleDropDown_green(){
//     if(!toggleIndex) {
//         _bloc_green.style.display = 'block';
//         _bloc_green.style.height = `${_bloc_green.scrollHeight}px`;

//         toggleIndex = true;
//         return;
//     }

//     _bloc_green.style.height = 0;
//     toggleIndex = false;
// }
// liItems.forEach(li => li.addEventListener('click', toggleDropDown_green))



// // ========================================  BTN RED 
// const _btn_red = document.querySelectorAll("#btn_red");
// _btn_red.forEach(btnDrop => {
//     btnDrop.addEventListener("click", toggleDropDown_red);
// });

// export function toggleDropDown_red(){
//     if(!toggleIndex) {
//         _bloc_red.style.display = 'block';
//         _bloc_red.style.height = `${_bloc_red.scrollHeight}px`;

//         toggleIndex = true;
//         return;
//     }

//     _bloc_red.style.height = 0;
//     toggleIndex = false;
// }
// liItems.forEach(li => li.addEventListener('click', toggleDropDown_red))






// // ============================================= POO
// class DisplayButtonText {
//     constructor() {
//         this.btn = document.querySelector("button")
//         this.btn.addEventListener("click", this.buttonClick.bind(this))
//     }
  
//     buttonClick() {
//         console.log(`C'est le texte du bouton cliqué : ${this.btn.innerText}`)
//         console.log(this)
//     }
// }
  
// let myButton = new DisplayButtonText()