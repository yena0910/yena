let movers = [];
let canvas2;

function setup() {
  createCanvas(300, 300);
  canvas2 = createGraphics(300, 300);
  

  for (let i=0; i<3; i++) {
    let m = new Mover(random(50)+150, random(20)+200, random(4, 9));
    movers.push(m);
  }
  
}

function draw() {
  background(220);
  image(canvas2, 0, 0);
  let mousePos = createVector(mouseX, mouseY);
  
  for (let i=0; i<movers.length; i++) {
    let m = movers[i];
    m.update();
    m.show();
    m.show2(canvas2);
    
    if (mouseIsPressed) {
      let f = p5.Vector.sub(mousePos, m.pos);
      // let f = p5.Vector.sub(m.pos, mousePos);
      f.mult(0.01);
      m.applyForce(f);
    }
  }

}




class Mover {
  constructor(x, y, m) {
    this.pos = createVector(x, y);
    this.vel = createVector();
    this.acc = createVector();
    this.m = m; 
  }
  
  applyForce(aForce) {
    let f = p5.Vector.div(aForce, this.m);
    this.acc.add(f);
  }
  
  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }
  
  show() {
    fill(0);
    circle(this.pos.x, this.pos.y, this.m);
  }
  
  show2(aCanvas) {
    aCanvas.noStroke();
    aCanvas.fill(250, 100, 0, 100);
    aCanvas.circle(this.pos.x, this.pos.y, this.vel.mag()*5);
  }
}
