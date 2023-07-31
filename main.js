// gameBoard = [["x", "x", "x"],["x", "x", "x"], ["x", "x", "x"]];


// for(let i = 0; i < gameBoard.length; i++) { 
//     for(let j = 0; j < gameBoard[i].length; j++) { 
//         console.log(gameBoard[i][j])
//     }
// }
let playerTurn = 'X';

function boxClicked(thingClicked) {
    console.log(thingClicked);
    

    if(thingClicked.innerHTML === '' ) {
        thingClicked.innerHTML = playerTurn;
        if(playerTurn === 'X') {
            playerTurn = 'O';
        } else{
            playerTurn = 'X';
        }
    }



    console.log(playerTurn);
}

function resetBoard() {
    const boxes = document.querySelectorAll(".tttBox");
    console.log(boxes);
    for (let box of boxes) {
        box.innerHTML='';
    }
}



