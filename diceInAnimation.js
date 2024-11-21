/*
┏ ━ ┓

┃   ┃

┗ ━ ┛

⚪️ ⚀ ⚁ ⚂ ⚃ ⚄ ⚅
*/

function one() {
  const topRow = "┏━━━━━━━━━━━━┓";
  const bottomRow = "┗━━━━━━━━━━━━┛";
  const row1 = "┃            ┃";
  const row2 = "┃            ┃";
  const row3 = "┃     ⚪️     ┃";
  const row4 = "┃            ┃";
  const row5 = "┃            ┃";

  // console.log(topRow.length, bottomRow.length, row1.length);
  console.log(topRow + "\n" + row1 + "\n" + row2 + "\n" + row3 + "\n" + row4 + "\n" + row5 + "\n" + bottomRow);
}

function two() {
  const topRow = "┏━━━━━━━━━━━━┓";
  const bottomRow = "┗━━━━━━━━━━━━┛";
  const row1 = "┃         ⚪️ ┃";
  const row2 = "┃            ┃";
  const row3 = "┃            ┃";
  const row4 = "┃            ┃";
  const row5 = "┃ ⚪️         ┃";
  
  // console.log(topRow.length, bottomRow.length, row1.length);
  console.log(topRow + "\n" + row1 + "\n" + row2 + "\n" + row3 + "\n" + row4 + "\n" + row5 + "\n" + bottomRow);
}

function three() {
  const topRow = "┏━━━━━━━━━━━━┓";
  const bottomRow = "┗━━━━━━━━━━━━┛";
  const row1 = "┃         ⚪️ ┃";
  const row2 = "┃            ┃";
  const row3 = "┃     ⚪️     ┃";
  const row4 = "┃            ┃";
  const row5 = "┃ ⚪️         ┃";
  
  // console.log(topRow.length, bottomRow.length, row1.length);
  console.log(topRow + "\n" + row1 + "\n" + row2 + "\n" + row3 + "\n" + row4 + "\n" + row5 + "\n" + bottomRow);
}

function four() {
  const topRow = "┏━━━━━━━━━━━━┓";
  const bottomRow = "┗━━━━━━━━━━━━┛";
  const row1 = "┃ ⚪️      ⚪️ ┃";
  const row2 = "┃            ┃";
  const row3 = "┃            ┃";
  const row4 = "┃            ┃";
  const row5 = "┃ ⚪️      ⚪️ ┃";
  
  // console.log(topRow.length, bottomRow.length, row1.length);
  console.log(topRow + "\n" + row1 + "\n" + row2 + "\n" + row3 + "\n" + row4 + "\n" + row5 + "\n" + bottomRow);
}

function five() {
  const topRow = "┏━━━━━━━━━━━━┓";
  const bottomRow = "┗━━━━━━━━━━━━┛";
  const row1 = "┃ ⚪️      ⚪️ ┃";
  const row2 = "┃            ┃";
  const row3 = "┃     ⚪️     ┃";
  const row4 = "┃            ┃";
  const row5 = "┃ ⚪️      ⚪️ ┃";
  
  // console.log(topRow.length, bottomRow.length, row1.length);
  console.log(topRow + "\n" + row1 + "\n" + row2 + "\n" + row3 + "\n" + row4 + "\n" + row5 + "\n" + bottomRow);
}

function six() {
  const topRow = "┏━━━━━━━━━━━━┓";
  const bottomRow = "┗━━━━━━━━━━━━┛";
  const row1 = "┃ ⚪️      ⚪️ ┃";
  const row2 = "┃            ┃";
  const row3 = "┃ ⚪️      ⚪️ ┃";
  const row4 = "┃            ┃";
  const row5 = "┃ ⚪️      ⚪️ ┃";
  
  // console.log(topRow.length, bottomRow.length, row1.length);
  console.log(topRow + "\n" + row1 + "\n" + row2 + "\n" + row3 + "\n" + row4 + "\n" + row5 + "\n" + bottomRow);
}

function delay(noOfTimes) {
  for (let i = 0; i < noOfTimes; i++) {}
}

function stopRollingTheDice(randomNumber) {
  switch (randomNumber) {
    case 1:
      return one();
    case 2:
      return two();
    case 3:
      return three();
    case 4:
      return four();
    case 5:
      return five();
    case 6:
      return six();
  }
}

function rollTheDice(noOfRolls) {
  if (noOfRolls === 0) {
    const randomNumber = Math.ceil(Math.random() * 6);
    console.clear();
    return stopRollingTheDice(randomNumber);
  }

  console.clear();
  five();
  delay(150000000);
  
  console.clear();
  one();
  delay(150000000);
  
  console.clear();
  four();
  delay(150000000);
  
  console.clear();
  two();
  delay(150000000);
  
  console.clear();
  six();
  delay(150000000);
  
  console.clear();
  three();
  delay(150000000);

  rollTheDice(noOfRolls - 1);
}

rollTheDice(4);

