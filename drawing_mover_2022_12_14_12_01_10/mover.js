class Mover {
  constructor(x, y, m) {
    this.pos = createVector(x, y);
    //  this.vel = createVector();
    this.acc = createVector();
    this.m = m;
    this.t = random(-100, 100);
    this.wallx = 1;
    this.wally = 1;
    this.path = [];
    this.length = 50;
    this.point = [];
    this.seed = [];
    let branch;

    
  }

  applyForce(aForce) {
    let f = p5.Vector.div(aForce, this.m);
    this.acc.add(f);
  }

  update() {
    this.t = this.t + 0.01;
    let speedx = 20 * (noise(this.t) - 0.5) * this.wallx;
    let speedy = 20 * (noise(this.t - 10) - 0.5) * this.wally;

    this.vel = createVector(speedx, speedy);
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);

    this.path.push(this.pos.copy());
    if (this.path.length > this.length) {
      this.path.splice(0, 1);
    }

    this.seed.push(this.pos.copy());
      if (this.seed.length > this.length) {
        this.seed.splice(0, 1);
      }
  }

  edge() {
    if (this.pos.y - this.m / 2 < 0) {
      this.wally = this.wally * -1;
      this.pos.y = 0 + this.m / 2;
    }
    if (this.pos.x - this.m / 2 < 0) {
      this.wallx = this.wallx * -1;
      this.pos.x = 0 + this.m / 2;
    }
    if (this.pos.y + this.m / 2 > height) {
      this.wally = this.wally * -1;
      this.pos.y = height - this.m / 2;
    }
    if (this.pos.x + this.m / 2 > width) {
      this.wallx = this.wallx * -1;
      this.pos.x = width - this.m / 2;
    }
  }

  show() {
    stroke(255);
    fill(255);
    circle(this.pos.x, this.pos.y, this.m);

    for (let i = 0; i < this.path.length - 2; i++) {
      stroke(255);
      fill(255);
      line(
        this.path[i].x,
        this.path[i].y,
        this.path[i + 1].x,
        this.path[i + 1].y
      );
    }
  }
 
 
 branch() {
  for (let i = 0; i < 5; i++) {
    if (this.seed.length > (10 * i) + 1 ) {
      this.point.push(new Branch(this.seed[10 * i].x, this.seed[10 * i].y));
     }
   }
   for (let point of this.point) {
    point.addForce();
    point.update();
    point.display();
  }
  if (this.point.length > this.length) {
    this.point.splice(0, 5);

  }
 }
}

