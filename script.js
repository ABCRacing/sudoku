let currentPuzzle = [];
let currentSolution = [];

function loadPuzzle() {
  const difficulty = document.getElementById("difficulty").value;

  // sudoku.js makes an empty puzzle array of 81 (0 for empty)
  let rawPuzzle = sudoku.makepuzzle();

  // Adjust difficulty by removing more or fewer numbers:
  // easy = ~35 clues, medium = ~27 clues, hard = ~20 clues
  if (difficulty === "medium") rawPuzzle = sudoku.makepuzzle(0.5);
  if (difficulty === "hard") rawPuzzle = sudoku.makepuzzle(0.25);

  currentPuzzle = rawPuzzle;
  currentSolution = sudoku.solvepuzzle(rawPuzzle);

  const board = document.getElementById("sudoku-board");
  board.innerHTML = "";

  for (let i = 0; i < 81; i++) {
    const cell = document.createElement("input");
    cell.type = "text";
    cell.maxLength = 1;

    const val = currentPuzzle[i];
    if (val !== null && val !== 0) {
      cell.value = val + 1; // sudoku.js uses 0-8, add 1
      cell.disabled = true;
    }

    board.appendChild(cell);
  }
}

function checkBoard() {
  const cells = document.querySelectorAll("#sudoku-board input");
  let allCorrect = true;

  cells.forEach((cell, index) => {
    if (!cell.disabled) {
      const correctVal = currentSolution[index] + 1; // also add 1 here
      if (parseInt(cell.value) !== correctVal) {
        cell.style.backgroundColor = "#ffdddd";
        allCorrect = false;
      } else {
        cell.style.backgroundColor = "white";
      }
    }
  });

  if (allCorrect) {
    alert("Congratulations! Puzzle solved correctly!");
  } else {
    alert("Some cells are incorrect or empty. Keep trying!");
  }
}

// Load on page start
window.onload = loadPuzzle;
