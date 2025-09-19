function createBoard() {
  const board = document.getElementById("sudoku-board");
  for (let i = 0; i < 81; i++) {
    const cell = document.createElement("input");
    cell.type = "text";
    cell.maxLength = 1;
    board.appendChild(cell);
  }
}

function checkBoard() {
  const cells = document.querySelectorAll("#sudoku-board input");
  let allFilled = true;
  cells.forEach(cell => {
    if (cell.value === "") {
      allFilled = false;
      cell.style.backgroundColor = "#ffdddd";
    } else {
      cell.style.backgroundColor = "white";
    }
  });

  if (allFilled) {
    alert("All cells filled! (But we haven't checked correctness yet)");
  } else {
    alert("Please fill in all the cells.");
  }
}

createBoard();
