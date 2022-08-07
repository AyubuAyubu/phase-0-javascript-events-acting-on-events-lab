// Your code here
const dodger = document.getElementById("dodger");
dodger.style.background = "#FF69B4";



function moveDodgerLeft() {
  let leftDistance = parseInt(dodger.style.left.replace("px", ""));
  if (leftDistance > 0) {
    dodger.style.left = leftDistance - 1 + "px";
  }
}
function moveDodgerRight() {
  let rightDistance = parseInt(dodger.style.left.replace("px", ""));
  if (rightDistance< 360) {
    dodger.style.left = rightDistance + 1 + "px";
  }
}

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }else if (e.key === "ArrowRight") {
        moveDodgerRight();
      }
  });
  