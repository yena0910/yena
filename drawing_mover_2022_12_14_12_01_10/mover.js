class Mover {
  constructor(x, y, m) {
    this.pos = createVector(x, y);
    //  this.vel = createVector();
    this.acc = createVector();
    this.m = m;
    this.t = 0;
    this.wallx = 1;
    this.wally = 1;
    this.path = [];
    this.length = 150;
    this.point = [];
    this.seed = [];
    // this.ell = 1;
    // this.vel2 = 0.02; 
    // this.acc2 = 0.02;
    // this.core = createVector(-0.02,-0.02);
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

    // this.ell += this.vel2;
    // this.vel2 += this.acc2;

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
    fill(0);
    circle(this.pos.x, this.pos.y, this.m);

    for (let i = 0; i < this.path.length - 2; i++) {
      line(
        this.path[i].x,
        this.path[i].y,
        this.path[i + 1].x,
        this.path[i + 1].y
      );
    }
  }
 
 
 branch() {
  
  //  let v = p5.Vector.random2D();
  //  v.mult(50);
  //  for(let i = 0; i < 100; i++) {
  //   push();
  //    if (this.seed.length > (5 * i) + 10 ) { 
  //      this.seed[5 * i].add(this.core);
  //      translate(this.seed[5 * i].x + v.x, this.seed[5 * i].y + v.y);
  //      rotate(10);
  //      ellipse(-v.x, -v.y, 10);
  //    }
  //   pop();
  // }
  




  for (let i = 0; i < 1000; i++) {
    if (this.seed.length > (10 * i) + 1 ) {
      this.point.push(new Branch(this.seed[10 * i].x, this.seed[10 * i].y));
      this.point[i].addForce();
      this.point[i].update();
      this.point[i].display();
     }
   }

 }
}
