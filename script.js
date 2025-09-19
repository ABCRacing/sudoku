window.onload = function() {
  const puzzle = [
    5,3,0,0,7,0,0,0,0,
    6,0,0,1,9,5,0,0,0,
    0,9,8,0,0,0,0,6,0,
    8,0,0,0,6,0,0,0,3,
    4,0,0,8,0,3,0,0,1,
    7,0,0,0,2,0,0,0,6,
    0,6,0,0,0,0,2,8,0,
    0,0,0,4,1,9,0,0,5,
    0,0,0,0,8,0,0,7,9
  ];

  const solution = [
    5,3,4,6,7,8,9,1,2,
    6,7,2,1,9,5,3,4,8,
    1,9,8,3,4,2,5,6,7,
    8,5,9,7,6,1,4,2,3,
    4,2,6,8,5,3,7,9,1,
    7,1,3,9,2,4,8,5,6,
    9,6,1,5,3,7,2,8,4,
    2,8,7,4,1,9,6,3,5,
    3,4,5,2,8,6,1,7,9
  ];

  const board = document.getElementById("sudoku-board");

  for (let i = 0; i < 81; i++) {
    const cell = document.createElement("input");
    cell.type = "text";
    cell.maxLength = 1;

    if (puzzle[i] !== 0) {
      cell.value = puzzle[i];
      cell.disabled = true;
    }

    board.appendChild(cell);
  }

  document.getElementById("check-btn").onclick = function() {
    const cells = board.querySelectorAll("input");
    let allCorrect = true;

    cells.forEach((cell, index) => {
      if (!cell.disabled) {
        const val = parseInt(cell.value);
        if (val !== solution[index]) {
          cell.style.backgroundColor = "#ffdddd"; // wrong
          allCorrect = false;
        } else {
          cell.style.backgroundColor = "white"; // correct
        }
      }
    });

    if (allCorrect) {
      alert("Congratulations! Puzzle solved correctly!");
    } else {
      alert("Some cells are incorrect or empty. Keep trying!");
    }
  };
};
