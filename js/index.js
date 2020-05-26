const UiSelectors = {
  pencilColorSelector: "pencil-color",
  canvasColorSelector: "background-color",
  pencilSizeSelector: "pencil-size",
  clearBtnSelector: "[data-clear-btn]",
  saveBtnSelector: "[data-save-btn]",
};

const lines = [];
let canvas;
const pencilColor = document.getElementById(UiSelectors.pencilColorSelector);
const canvasColor = document.getElementById(UiSelectors.canvasColorSelector);
const pencilSize = document.getElementById(UiSelectors.pencilSizeSelector);
const clearBtn = document.querySelector(UiSelectors.clearBtnSelector);
const saveBtn = document.querySelector(UiSelectors.saveBtnSelector);

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  background("#ffffff");
}

function draw() {
  if (mouseIsPressed) {
    strokeWeight(pencilSize.value);
    stroke(pencilColor.value);
    line(mouseX, mouseY, pmouseX, pmouseY);
    noFill();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight, [noRedraw]);
  background(canvasColor.value);
}

canvasColor.addEventListener("change", () => {
  background(canvasColor.value);
});

clearBtn.addEventListener("click", () => {
  clear();
  canvasColor.value = "#ffffff";
  pencilColor.value = "000000";
});
saveBtn.addEventListener("click", () => save("myPhoto.jpg"));
