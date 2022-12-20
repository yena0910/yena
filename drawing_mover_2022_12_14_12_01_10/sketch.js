let ball;
let particle = [];

function setup() {
  createCanvas(800, 800);

  for(let i = 0; i < 10; i++) {
  particle.push(new Mover(random(0, width),random(0, height), 3))
  }
}

function draw() {
  background(0);

  for (let ball of particle) {
    ball.update();
    ball.show();
    ball.edge();
    ball.branch();
  }


}








