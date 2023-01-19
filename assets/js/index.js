const div = document.querySelectorAll(".area");
var nextIsX = true;
var nextIsO = false;
var winner = "";
var playsX = [];
var playsO = [];
function reiniciar() {
  document.getElementById("winner").innerHTML = "";
  document.getElementById("content").style.display = "grid";
  winner = "";
  div.forEach((btn) => {
    btn.innerHTML = "";
    btn.style.backgroundColor = "black";
  });
}
div.forEach((btn) => {
  btn.addEventListener(
    "click",
    (clique = (event) => {
      playsX = [];
      playsO = [];
      if (nextIsX && btn.innerHTML == "") {
        btn.innerHTML = "X";
        nextIsX = false;
        nextIsO = true;
      } else if (nextIsO && btn.innerHTML == "") {
        btn.innerHTML = "O";
        nextIsX = true;
        nextIsO = false;
      }
      div.forEach((btn, pos) => {
        if (btn.innerHTML == "O") {
          playsO.push(pos);
        }
        if (btn.innerHTML === "X") {
          playsX.push(pos);
        }
      });
      if (
        (playsX.includes(0) && playsX.includes(1) && playsX.includes(2)) ||
        (playsX.includes(3) && playsX.includes(4) && playsX.includes(5)) ||
        (playsX.includes(6) && playsX.includes(7) && playsX.includes(8))
      ) {
        winner = "X";
        win();
        if (
          (playsX.includes(0) && playsX.includes(1) && playsX.includes(2)) ==
          true
        ) {
          div[0].style.backgroundColor = "green";
          div[1].style.backgroundColor = "green";
          div[2].style.backgroundColor = "green";
        } else if (
          (playsX.includes(3) && playsX.includes(4) && playsX.includes(5)) ==
          true
        ) {
          div[3].style.backgroundColor = "green";
          div[4].style.backgroundColor = "green";
          div[5].style.backgroundColor = "green";
        } else {
          div[6].style.backgroundColor = "green";
          div[7].style.backgroundColor = "green";
          div[8].style.backgroundColor = "green";
        }
      } else if (
        (playsX.includes(0) && playsX.includes(3) && playsX.includes(6)) ||
        (playsX.includes(1) && playsX.includes(4) && playsX.includes(7)) ||
        (playsX.includes(2) && playsX.includes(5) && playsX.includes(8))
      ) {
        winner = "X";
        win();
        if (
          (playsX.includes(0) && playsX.includes(3) && playsX.includes(6)) ==
          true
        ) {
          div[0].style.backgroundColor = "green";
          div[3].style.backgroundColor = "green";
          div[6].style.backgroundColor = "green";
        } else if (
          (playsX.includes(1) && playsX.includes(4) && playsX.includes(7)) ==
          true
        ) {
          div[1].style.backgroundColor = "green";
          div[4].style.backgroundColor = "green";
          div[7].style.backgroundColor = "green";
        } else {
          div[2].style.backgroundColor = "green";
          div[5].style.backgroundColor = "green";
          div[8].style.backgroundColor = "green";
        }
      } else if (
        (playsX.includes(0) && playsX.includes(4) && playsX.includes(8)) ||
        (playsX.includes(2) && playsX.includes(4) && playsX.includes(6))
      ) {
        winner = "X";
        win();
        if (
          (playsX.includes(0) && playsX.includes(4) && playsX.includes(8)) ==
          true
        ) {
          div[0].style.backgroundColor = "green";
          div[4].style.backgroundColor = "green";
          div[8].style.backgroundColor = "green";
        } else {
          div[2].style.backgroundColor = "green";
          div[4].style.backgroundColor = "green";
          div[6].style.backgroundColor = "green";
        }
      }
      if (
        (playsO.includes(0) && playsO.includes(1) && playsO.includes(2)) ||
        (playsO.includes(3) && playsO.includes(4) && playsO.includes(5)) ||
        (playsO.includes(6) && playsO.includes(7) && playsO.includes(8))
      ) {
        winner = "O";
        win();
        if (
          (playsO.includes(0) && playsO.includes(1) && playsO.includes(2)) ==
          true
        ) {
          div[0].style.backgroundColor = "green";
          div[1].style.backgroundColor = "green";
          div[2].style.backgroundColor = "green";
        } else if (
          (playsO.includes(3) && playsO.includes(4) && playsO.includes(5)) ==
          true
        ) {
          div[3].style.backgroundColor = "green";
          div[4].style.backgroundColor = "green";
          div[5].style.backgroundColor = "green";
        } else {
          div[6].style.backgroundColor = "green";
          div[7].style.backgroundColor = "green";
          div[8].style.backgroundColor = "green";
        }
      } else if (
        (playsO.includes(0) && playsO.includes(3) && playsO.includes(6)) ||
        (playsO.includes(1) && playsO.includes(4) && playsO.includes(7)) ||
        (playsO.includes(2) && playsO.includes(5) && playsO.includes(8))
      ) {
        winner = "O";
        win();
        if (
          (playsO.includes(0) && playsO.includes(3) && playsO.includes(6)) ==
          true
        ) {
          div[0].style.backgroundColor = "green";
          div[3].style.backgroundColor = "green";
          div[6].style.backgroundColor = "green";
        } else if (
          (playsO.includes(1) && playsO.includes(4) && playsO.includes(7)) ==
          true
        ) {
          div[1].style.backgroundColor = "green";
          div[4].style.backgroundColor = "green";
          div[7].style.backgroundColor = "green";
        } else {
          div[2].style.backgroundColor = "green";
          div[5].style.backgroundColor = "green";
          div[8].style.backgroundColor = "green";
        }
      } else if (
        (playsO.includes(0) && playsO.includes(4) && playsO.includes(8)) ||
        (playsO.includes(2) && playsO.includes(4) && playsO.includes(6))
      ) {
        winner = "O";
        win();
        if (
          (playsO.includes(0) && playsO.includes(4) && playsO.includes(8)) ==
          true
        ) {
          div[0].style.backgroundColor = "green";
          div[4].style.backgroundColor = "green";
          div[8].style.backgroundColor = "green";
        } else {
          div[2].style.backgroundColor = "green";
          div[4].style.backgroundColor = "green";
          div[6].style.backgroundColor = "green";
        }
      }
    })
  );
});
function win() {
  if (winner != "") {
    div.forEach((btn) => {
      setTimeout(function () {
        reiniciar();
      }, 0850);
    });
  }
}
