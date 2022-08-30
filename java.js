const board = document.querySelector(".board")
const startBtn = document.querySelector(".start")



function createDiv() { 
   let input = prompt("Choose your preferred grid size!")
   if(input > 100 || input < 2) {
    alert('The maximum and minimum numbers you can choose are 100 and 0.')
} else {
   board.style.gridTemplateColumns = `repeat(${input},1fr)`;
   board.style.gridTemplateRows = `repeat(${input},1fr)`; 
for(let i = 0; i<input*input; i++) {
const square = document.createElement('div');
    square.classList.add('grid');
    board.appendChild(square);
    square.addEventListener('dragenter', () => {
      square.classList.remove('grid');
      square.classList.add('newGrid');
   });
   }
   };
};






