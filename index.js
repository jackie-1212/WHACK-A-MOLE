function initialsetup() {
  //set intial loop for holes and moles
  console.log(document.getElementById("hole1"));
  for (let i = 1; i < 10; i++) {
    document.getElementById("mole" + i).style.display = "none";
  }
}
let gameloop;
let moles = [];
let score = 0;
//load the entire event of the page
window.onload = function () {
  initialsetup();
};
function gameStart() {
  //disabling the start button as soon as game begins. game score begins at 0.
  document.getElementById("resulttext").innerHTML = "";
  document.getElementById("btn").disabled = true;
  score = 0;
  document.getElementById("scorehit").innerHTML = score;
  //make it reloop until game is finished at 30 seconds
  gameloop = setInterval(function () {
    for (let i of moles) {
      document.getElementById("mole" + i).style.display = "none";
      document.getElementById("hole" + i).style.display = "block";
    }
    moles = [];
    for (let counter = 0; counter < 2; ++counter) {
      //radomizes moles position
      const randomIndex = Math.floor(Math.random() * 9) + 1;
      //runs loop twice and pushes random number into randomIndex
      moles.push(randomIndex);
      document.getElementById("mole" + randomIndex).style.display = "block";
      document.getElementById("hole" + randomIndex).style.display = "none";
    }
  }, 1000);
  setTimeout(function () {
    gameEnd();
  }, 30000);
}

function molehit(index) {
  //make moles go back down when clicked.increases score
  document.getElementById("mole" + index).style.display = "none";
  document.getElementById("hole" + index).style.display = "block";
  score++;
  document.getElementById("scorehit").innerHTML = score;
  new Audio("res/oof.mp3").play();
}

function gameEnd() {
  //enables start button
  clearInterval(gameloop);
  document.getElementById("btn").disabled = false;
  if (score >= 20) {
    document.getElementById("resulttext").innerHTML = "YOU WIN";
  } else {
    document.getElementById("resulttext").innerHTML = "YOU LOST";
  }
}
