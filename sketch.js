let ball;
let particle = [];
let work;

function setup() {
  createCanvas(800, 800);
  work = createP('2223038 최예나              작품명:기쁨             설명:제작자의 행복했을 때의 내면을 표현해보았다.');

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








