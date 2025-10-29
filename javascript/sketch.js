let canvas; 

//// Drawing Canvas  

let r = 20;
let k = 15;
let m = 5;

function setup() {
  canvas = createCanvas(800, 800);
  
  // Paint the background once.
  canvas.parent('splash');
  background(255);
  
  //interface Button set up
  saveImageBtn = createButton("Save");
  saveImageBtn.position(10, 10 );
  saveImageBtn.mousePressed(saveAsCanvas);
  
  myColor = color(133, 176, 237, 60); 

}

//Drawing 

function draw () { 
  noStroke(0);
      fill(myColor)

      ellipse(mouseX, mouseY, r + m + m, r + m);
      triangle(mouseX + k, mouseY - r, mouseX + k, mouseY, mouseX, mouseY - m);
      triangle(mouseX - k, mouseY - r, mouseX - k, mouseY, mouseX, mouseY - m);
  
}

function mousePressed() {
  // When the mouse is pressed, change to a random color
  myColor = color(random(255), random(255), random(255), 60);
}
 
function saveAsCanvas() {
  save("cat_drawing.png");
}

