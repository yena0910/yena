
let canvas2;
let ball;



function setup() {
  createCanvas(800, 800);
  canvas2 = createGraphics(800, 800);
  ball = new Mover(width/2, height/2, 3);
  
}





function draw() {
  background(220);
  image(canvas2, 0, 0);
  let mousePos = createVector(mouseX, mouseY);

  
    
   ball.update();
   ball.show();
  // ball.show2(canvas2);
   ball.edge();
  }









