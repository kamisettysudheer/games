// find a path in mine field...
/*
create a path
create only one start and one end
other than the path in a land , all are mines
if 
*/

// make a boxes as dynamic   🟦 ⬜ 🟥

const blueBox = "🟦";

function getBoxes(noOfBoxes, row) {
  if (noOfBoxes < 0) {
    return 0;
  }

  if (row.length === 10) {
    console.log(row);
    row = "";
  }

  row = row + blueBox;

  return getBoxes(noOfBoxes - 1, row);
}

getBoxes(25, "");
