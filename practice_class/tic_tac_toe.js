let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGmaebtn = document.querySelector("#new-btn");
let newMsgcontainer = document.querySelector(".msg-container");
let newMsg = document.querySelector("#msg");

let turnO = true; //playerX, playerO

// let arr = ["apple", "banana", "litchi"];

// //2D arr
// let arr2 = [["apple", "litchi"], ["potao", "mashroom"], ["pants", "shirt"]];


const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    turnO = true;
    enabledBoxes();
    newMsgcontainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        // box.innerText = "abc";
        if(turnO === true) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

// const checkWinner = () => {
//     for(let pattern of winPatterns) {
//         console.log(pattern[0], pattern[1], pattern[2]);
//         console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);
//     }
// }


const disabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};


const enabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};



const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    newMsgcontainer.classList.remove("hide");
    disabledBoxes();
};


const checkWinner = () => {
    for(let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("winner", pos1Val);
                showWinner(pos1Val);
            }
        }
    }
};



newGmaebtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);