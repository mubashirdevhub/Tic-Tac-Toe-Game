let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newgameBtn = document.querySelector("#new-btn")
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;
let count = 0;

let winPatterns = [
    [0, 1, 2],
    [0 ,3 ,6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];



// add click btn on boxes

boxes.forEach(box => {
    box.addEventListener("click", () => {
        // console.log("clicked");

        if(turnO){
            turnO = false;
            box.innerText = "O";
            box.classList.add("o");
        }
        else{
            turnO = true;
            box.innerText = "X";
            box.classList.add("x");
        };

        box.disabled = true;
        count++
        checkWinner();

    })
});


// disbaled boxes

const disbaleBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};



const checkWinner = () => {
    for(let pattern of winPatterns){
        let post1Val = boxes[pattern[0]].innerText;
        let post2Val = boxes[pattern[1]].innerText;
        let post3Val = boxes[pattern[2]].innerText;

        if(post1Val != "" && post2Val != "" && post3Val != ""){
            if(post1Val === post2Val && post2Val === post3Val){
                showWinner(post1Val);
                return;
            }
        }
    }


    // draw

    if(count === 9){
        msg.innerText = "Oh No Its Draw!!!";
        msgcontainer.classList.remove("hide");
        msg.style.color = "red";
        disbaleBoxes();
    }

}

const showWinner = (winner) => {
    msg.innerText = `Congratulation, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    msg.style.color = "lightgreen";
    disbaleBoxes();
}




// button reset and new games

const resetGame = () => {
        turnO = true;
        count = 0;
        enableBoxes();
        msgcontainer.classList.add("hide");
}

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
        box.classList.remove("x");
        box.classList.remove("o");
    }
}

newgameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);