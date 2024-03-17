let boxes = document.querySelectorAll('.box');
let resetGametBtn = document.querySelector('.reset-Btn');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('.msg');
let newGameBtn= document.querySelector('.new-game');

let turn0 = true; //turn x , turn o


const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame = () => {
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add('hide');
}



const newGame = () => {
    enableBoxes();
}

boxes.forEach((box) => {
    box.addEventListener('click', (event) =>{
        if(turn0 === true) {
            box.innerText = 'X';
            turn0 = false;
        } else {
            box.innerText = 'O';
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const disbaledBoxes = () => {
    for(box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}


const showWinner = (winner) => {
    msg.innerText = `Congratulation, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disbaledBoxes();
}

const checkWinner = () => {

    for(let pattern of winPatterns){
            let pos1Val = boxes[pattern[0]].innerText;
            let pos2Val = boxes[pattern[1]].innerText;
            let pos3Val = boxes[pattern[2]].innerText;

            if(pos1Val != "" && pos2Val != "" && pos3Val != "") {
                if(pos1Val === pos2Val && pos2Val === pos3Val){
                    showWinner(pos3Val);
                }
            }
    }
    
    
};

resetGametBtn.addEventListener('click', resetGame);
 newGameBtn.addEventListener('click', resetGame);