const blueBox = "🟦";

function getBoxes(noOfRows, noOfColoumns, rowPos, coloumnPos) {
  let boxes = "";

  for (let row = 0; row < noOfRows; row++) {
    for (let coloumn = 0; coloumn < noOfColoumns; coloumn++) {
      if (row === rowPos && coloumn === coloumnPos) {
        boxes = boxes + "🧑‍💼";
      } else {
        boxes = boxes + blueBox;
      }
    }

    boxes = boxes + "\n";
  }

  return boxes;
}
