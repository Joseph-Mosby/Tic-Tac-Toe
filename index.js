const player = "X";
const computer = "O";

let board_full = false;
var play_board = ["", "", "", "", "", "", "", "",""];

const board_container = document.getElementById("play-area");

const render_board = () => {
    board_container.innerHTML = "";
    play_board.forEach((val, index) => {
        board_container.innerHTML += `<div id="block_${index}" class="block"onclick="addPlayerMove(${index})">${play_board[index]}</div>`;

        if (val === "X" || val === "O")
        {
            document.querySelector(`#block_${index}`).classList.add("occupied");
        }
    });
};

const addPlayerMove = index => {
    if (!board_full && play_board[index] === "") {
        play_board[index] = player;
        game_func();
        addComputerMove();
    }
};

const addComputerMove = () => {
    if (!board_full) {
        let selected;
        do {
            selected = Math.floor(Math.random() * 9);
        } while (play_board[selected] != "")
       
        play_board[selected] = computer;
        game_func();
    }
};

const check_board_complete = function() {
    let flag = false;
    debugger;
    play_board.forEach(element => {
        if (element != player && element != computer){
            flag = true;
        }
    });
    board_full = !flag;
};

const game_func = () => {
    render_board();
    check_board_complete();
}



render_board();