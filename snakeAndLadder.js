function rollTheDice() {
  return Math.ceil(Math.random() * 6);
}

function snakesPosition(position) {
  switch (position) {
    case 28:
      return 10;
    case 37:
      return 3;
    case 48:
      return 16;
    case 75:
      return 32;
    case 94:
      return 71;
    case 96:
      return 42;
    default:
      return position;
  }
}

function laddersPosition(position) {
  switch (position) {
    case 4:
      return 56;
    case 12:
      return 50;
    case 14:
      return 55;
    case 22:
      return 58;
    case 41:
      return 79;
    case 54:
      return 88;
    default:
      return position;
  }
}

function getPlayerPosition(player, diceValue) {
  const playerPosition = player + diceValue;

  player = snakesPosition(playerPosition);
  if (player !== playerPosition) {
    console.log("----- 🐍 you got snake 🐍 -----\n");
    return player;
  }

  player = laddersPosition(playerPosition);
  if (player !== playerPosition) {
    console.log("----- 🪜 you got ladder 🪜 -----\n");
    return player;
  }

  return playerPosition;
}

function rollDiceFor(playerName) {
  prompt(playerName + " chance : ", "press enter");
  const diceValue = rollTheDice();
  console.log("rolling a die... \ndie value = " + diceValue + "\n");

  return diceValue;
}

function displayPlayersPositions(player1Name, player1, player2Name, player2) {
  console.log("------------------------------------------------------------------");
  console.log("\t | " + player1Name + " position : " + player1 + "\t" + player2Name + " position : " + player2 + " | \n");
}

function startGame(player1Pos, player2Pos, player1Name, player2Name) {
  displayPlayersPositions(player1Name, player1Pos, player2Name, player2Pos);

  if (player1Pos === 100 || player2Pos === 100) {
    return player1Pos === 100 ? "player1" : "player2";
  }

  const diceValueOfPlayer1 = rollDiceFor(player1Name);
  player1Pos = getPlayerPosition(player1Pos, diceValueOfPlayer1);

  const diceValueOfPlayer2 = rollDiceFor(player2Name);
  player2Pos = getPlayerPosition(player2Pos, diceValueOfPlayer2);

  player1Pos = player1Pos > 100 ? player1Pos - diceValueOfPlayer1 : player1Pos;
  player2Pos = player2Pos > 100 ? player2Pos - diceValueOfPlayer2 : player2Pos;

  return startGame(player1Pos, player2Pos, player1Name, player2Name);
}

function game() {
  const askToPlay = confirm("Do you want to start the SNAKE AND LADDER GAME!");

  if (askToPlay) {
    console.log("lets start the game.... \n");
    const player1Name = prompt("Enter player1 name : ", "player1");
    const player2Name = prompt("Enter player2 name : ", "player2");

    const winner = startGame(0, 0, player1Name, player2Name);

    return "\n\t🏆🏆🏆 " + (winner === "player1" ? player1Name : player2Name) + " won the game 🏆🏆🏆";
  }

  return "it's ok, you miss a chance to play with a great person!";
}

console.log(game());
