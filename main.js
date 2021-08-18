const body = document.querySelector("body");
const visor = document.querySelector(".calc-visor");
const buttons = document.querySelectorAll(".calc-btn");
const themeSelector = document.querySelector(".theme-selector");
let firstOp = 0,
  secondOp = 0,
  result = 0,
  op,
  finished = false;

for (const item of buttons) {
  item.addEventListener("click", addVisor);
}
if (body.classList.contains("theme-1")) {
  themeSelector.classList.remove("theme-position-2");
  themeSelector.classList.remove("theme-position-3");
  themeSelector.classList.add("theme-position-1");
}

themeSelector.addEventListener("click", function () {
  if (body.classList.contains("theme-1")) {
    themeSelector.classList.remove("theme-position-1");
    themeSelector.classList.remove("theme-position-3");
    themeSelector.classList.add("theme-position-2");
    body.classList.remove("theme-1");
    body.classList.remove("theme-3");
    body.classList.add("theme-2");
  } else if(body.classList.contains("theme-2")){
    themeSelector.classList.remove("theme-position-1");
    themeSelector.classList.remove("theme-position-2");
    themeSelector.classList.add("theme-position-3");
    body.classList.remove("theme-1");
    body.classList.remove("theme-2");
    body.classList.add("theme-3");
  } else{
    themeSelector.classList.remove("theme-position-3");
    themeSelector.classList.remove("theme-position-2");
    themeSelector.classList.add("theme-position-1");
    body.classList.remove("theme-3");
    body.classList.remove("theme-2");
    body.classList.add("theme-1");
  }

});

function addVisor(event) {
  if (event.target.dataset.value === "del") {
    if (finished) {
      zerarTela();
      return;
    }
    visor.textContent = visor.textContent.substr(
      0,
      visor.textContent.length - 1
    );
    return;
  }

  finished = false;

  if (event.target.dataset.value === "reset") {
    zerarTela();
    zerar();
    return;
  }
  if (event.target.dataset.value === "sum") {
    firstOp = parseFloat(visor.textContent, 10);
    zerarTela();
    op = "+";
    return;
  }
  if (event.target.dataset.value === "subt") {
    firstOp = parseFloat(visor.textContent, 10);
    zerarTela();
    op = "-";
    return;
  }
  if (event.target.dataset.value === "divis") {
    firstOp = parseFloat(visor.textContent, 10);
    zerarTela();
    op = "/";
    return;
  }
  if (event.target.dataset.value === "mult") {
    firstOp = parseFloat(visor.textContent, 10);
    zerarTela();
    op = "x";
    return;
  }
  if (event.target.dataset.value === "eq") {
    secondOp = parseFloat(visor.textContent, 10);
    if (op === "+") {
      result = firstOp + secondOp;
    } else if (op === "-") {
      result = firstOp - secondOp;
    } else if (op === "x") {
      result = firstOp * secondOp;
    } else {
      result = firstOp / secondOp;
    }
    visor.textContent = result.toString();
    zerar();
    finished = true;
    return;
  }
  if (visor.textContent.length > 10) {
    alert("Atingiu limite de caracteres");
    return;
  }
  visor.textContent += event.target.dataset.value;
}

function zerar() {
  firstOp = 0;
  secondOp = 0;
}
function zerarTela() {
  visor.textContent = "";
}
