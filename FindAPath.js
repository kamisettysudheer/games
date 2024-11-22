/*
create a path
create only one start and one end
other than the path in a land , all are mines
*/

// make a boxes as dynamic   🟦 ⬜ 🟥

const blueBox = "🟦";
let rowPos = 0;
let columnPos = 0;
const LEFT = 0;
const RIGHT = 1;
const UP = 2;
const DOWN = 3;

function delay() {
  for (let i = 0; i < 1000000000; i++) { }
}

function isPathCorrect() {
  const path = "00-01-11-12-22-32-33-43-44";
  for (let i = 0; i < path.length; i += 3) {
    if ((+path[i]) === rowPos && (+path[i + 1]) === columnPos) {
      return true;
    }
  }


  return false;
}

function getDirection(direction) {
  switch (direction) {
    case "a": return LEFT;
    case "d": return RIGHT;
    case "w": return UP;
    case "s": return DOWN;
  }

  return -1;
}

function movement(direction) {
  // 0 = left; 1 = right; 2 = up; 3 = down;
  direction = getDirection(direction);

  if (direction === LEFT || direction === RIGHT) {
    let offSetCol = (direction - 1) ** (direction - 1);

    if (columnPos + offSetCol < 0 || columnPos + offSetCol > 4) {
      offSetCol = 0;
    }

    columnPos = columnPos + offSetCol;
  }

  if (direction === UP || direction === DOWN) {
    let offSetRow = (direction - 3) ** (direction - 3);

    if (rowPos + offSetRow < 0 || rowPos + offSetRow > 4) {
      offSetRow = 0;
    }

    rowPos = rowPos + offSetRow;
  }
}

function getBoxes(noOfRows, noOfColoumns) {
  let boxes = "";

  for (let row = 0; row < noOfRows; row++) {
    for (let coloumn = 0; coloumn < noOfColoumns; coloumn++) {
      if (row === rowPos && coloumn === columnPos) {
        boxes = boxes + (isPathCorrect() ? "🧑‍💼" : "💣");
      } else {
        boxes = boxes + blueBox;
      }
    }

    boxes = boxes + "\n";
  }

  return boxes + "\t  ↘️";
}

function takeDirection() {
  // console.log(" RIGHT -> D \n LEFT  -> A \n UP    -> W \n DOWN  -> S");
  // "👆👇👉👈"

  console.log("   👆 \t\t   W \n 👈👇👉 \t A S D");
  return prompt("Enter the direction number : ");
}

function gameLoop() {
  console.clear();
  console.log(getBoxes(5, 5));

  if (rowPos === 4 && columnPos === 4) {
    return "\t 🏆🏆🏆 congrats!, you find the path 🏆🏆🏆 \n";
  }

  const direction = takeDirection();
  movement(direction);

  if (!isPathCorrect()) {
    console.clear();
    console.log(getBoxes(5, 5));
    delay();
    rowPos = 0;
    columnPos = 0;
    return gameLoop();
  }

  return gameLoop();
}

console.log(gameLoop());
