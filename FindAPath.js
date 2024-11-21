/*
create a path
create only one start and one end
other than the path in a land , all are mines
*/

// make a boxes as dynamic   🟦 ⬜ 🟥

const blueBox = "🟦";
let rowPos = 0;
let columnPos = 0;

function movement(direction) {
  // 0 = left; 1 = right; 2 = up; 3 = down;

  if (direction === 0 || direction === 1) {
    let offSetCol = (direction - 1) ** (direction - 1);

    if (columnPos + offSetCol < 0 || columnPos + offSetCol > 4) {
      offSetCol = 0;
    }

    columnPos = columnPos + offSetCol;
  }

  if (direction === 2 || direction === 3) {
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
        boxes = boxes + "🧑‍💼";
      } else {
        boxes = boxes + blueBox;
      }
    }

    boxes = boxes + "\n";
  }

  return boxes + "\t  ↘️";
}

function game() {
  console.clear();
  console.log(getBoxes(5, 5));

  if (rowPos === 4 && columnPos === 4) {
    return "\t 🏆🏆🏆 congrats!, you find the path 🏆🏆🏆 \n";
  }

  console.log("0 = left; 1 = right; 2 = up; 3 = down");
  const direction = +prompt("Enter the direction number : ");

  movement(direction);

  return game();
}

console.log(game());
