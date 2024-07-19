let score = 0;
let crose = true;
let audiogo = new Audio("gameover.mp3");
let audio = new Audio("music.mp3");
// setTimeout(() => {
// }, 1000);

document.onkeydown = function (e) {
  audio.play();
  if (e.key == "Enter") {
    alert("pause");
  }
  console.log("key code is: ", e.key);
  if (e.key == "ArrowUp") {
    let dino = document.querySelector(".dino");
    dino.classList.add("animateDino");
    setTimeout(() => {
      dino.classList.remove("animateDino");
    }, 700);
  } else if (e.key == "ArrowRight") {
    let dino = document.querySelector(".dino");
    let dinoX = parseInt(
      window.getComputedStyle(dino, null).getPropertyValue("left")
    );
    dino.style.left = dinoX + 112 + "px";
    dino.style.transform = `scaleX(${1})`;
  } else if (e.key == "ArrowLeft") {
    let dino = document.querySelector(".dino");
    let dinoX = parseInt(
      window.getComputedStyle(dino, null).getPropertyValue("left")
    );
    dino.style.left = dinoX - 112 + "px";
    dino.style.transform = `scaleX(${-1})`;
  }
};

setInterval(() => {
  dino = document.querySelector(".dino");
  gameOver = document.querySelector(".gameOver");
  obstacle = document.querySelector(".obstacle");
  dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));
  dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue("top"));
  ox = parseInt(
    window.getComputedStyle(obstacle, null).getPropertyValue("left")
  );
  oy = parseInt(
    window.getComputedStyle(obstacle, null).getPropertyValue("top")
  );
  console.log(ox);

  offsetX = Math.abs(dx - ox);
  offsetY = Math.abs(dy - oy);
  console.log(offsetX, offsetY);
  if (offsetX < 73 && offsetY < 52) {
    // gameOver.style.visibility = "visible";
    gameOver.innerHTML = "Game Over";
    obstacle.classList.remove("obstacleAni");
    audiogo.play();
    // audio.play();
    setTimeout(() => {
      audiogo.pause();
      audio.pause();
    }, 1000);
  } else if (offsetX < 145 && crose) {
    score += 1;
    updateScore(score);
    crose = false;
    setTimeout(() => {
      crose = true;
    }, 1000);
    setTimeout(() => {
      aniDur = parseFloat(
        window
          .getComputedStyle(obstacle, null)
          .getPropertyValue("animation-duration")
      );
      newDur = aniDur - 0.1;
      obstacle.style.animationDuration = newDur + "s";
    }, 500);
  }
}, 400);
function updateScore(score) {
  document.querySelector("#score").innerHTML = "Your Score: " + score;
}
