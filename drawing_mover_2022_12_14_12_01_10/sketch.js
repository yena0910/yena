let ball;


function setup() {
  createCanvas(800, 800);
  canvas2 = createGraphics(800, 800);
  ball = new Mover(width / 2, height / 2, 3);
  
}

function draw() {
  background(0);

  ball.update();
  ball.show();
  ball.edge();
  ball.branch();

}









