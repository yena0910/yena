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
    // this.seed = [];
  }

  applyForce(aForce) {
    let f = p5.Vector.div(aForce, this.m);
    this.acc.add(f);
  }

  update() {
    this.t = this.t + 0.01;
    let speedx = 20 * (noise(this.t) - 0.5) * this.wallx;
    let speedy = 20 * (noise(this.t - 10) - 0.5) * this.wally;

    let speed2x = 5 * (noise(this.t + 700) - 0.5) * this.wallx;
    let speed2y = 5 * (noise(this.t - 100) - 0.5) * this.wally;

    this.vel = createVector(speedx, speedy);
    this.vel2 = createVector(speed2x, speed2y);
    this.vel.add(this.acc);
    this.vel2.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);

    this.path.push(this.pos.copy());
    if (this.path.length > this.length) {
      this.path.splice(0, 1);
    }

    // this.seed.push(this.pos.copy());
    //  if (this.seed.length > 150) {
    //    this.seed.splice(0, 30);
    //  }
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


    if (this.path.length > 15) {
      this.path[10].add(this.vel2);
      circle(this.path[10].x, this.path[10].y, 1);
      }
    }
  }

