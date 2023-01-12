const div = document.querySelectorAll("div");
var nextIsX = true;
var nextIsO = false;
var winner = "";
var playsX = [];
var playsO = [];
div.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    playsX = [];
    playsO = [];
    if (nextIsX) {
      btn.innerHTML = "X";
      nextIsX = false;
      nextIsO = true;
    } else {
      btn.innerHTML = "O";
      nextIsX = true;
      nextIsO = false;
    }
    div.forEach((btn, pos) => {
      if (btn.innerHTML == "O") {
        console.log(`Bola na ${pos}ª div`);
        playsO.push(pos);
      }
      if (btn.innerHTML === "X") {
        console.log(`X na ${pos}ª div`);
        playsX.push(pos);
      }
    });
    if (
      (playsO.includes(0) && playsO.includes(1) && playsO.includes(2)) ||
      (playsO.includes(3) && playsO.includes(4) && playsO.includes(5)) ||
      (playsO.includes(6) && playsO.includes(7) && playsO.includes(8))
    ) {
        alert('jhkhj')
    } else if (
      (playsO.includes(0) && playsO.includes(3) && playsO.includes(6)) ||
      (playsO.includes(1) && playsO.includes(4) && playsO.includes(7)) ||
      (playsO.includes(2) && playsO.includes(5) && playsO.includes(8))
    ) {
        alert("jhkwwhj");
    } else if (
      (playsO.includes(0) && playsO.includes(4) && playsO.includes(8)) ||
      (playsO.includes(6) && playsO.includes(4) && playsO.includes(5))
    ) {
        alert('Ganhou na diagonal')
    }
    console.log(playsX);
  });
});
