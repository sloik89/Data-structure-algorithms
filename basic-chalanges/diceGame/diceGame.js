function diceGame(numberOfGame) {
  let dice1 = null;
  let dice2 = null;
  let roll = null;
  let status = "";
  let results = [];
  for (let i = 0; i < numberOfGame; i++) {
    dice1 = Math.floor(Math.random() * 6 + 1);
    dice2 = Math.floor(Math.random() * 6 + 1);
    roll = dice1 + dice2;
    if (roll === 7 || roll === 11) {
      status = "win";
    } else if (roll === 2 || roll === 3 || roll === 12) {
      status = "loss";
    } else {
      status = "roll again";
    }
    results.push({ dice1, dice2, roll, status });
  }
  return results;
}
const roll = diceGame(5);
console.log(roll);
