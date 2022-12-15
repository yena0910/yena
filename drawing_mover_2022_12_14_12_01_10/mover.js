class Mover {
    constructor(x, y, m) {
      this.pos = createVector(x, y);
    //  this.vel = createVector();
      this.acc = createVector();
      this.m = m; 
      this.t = 0;
      this.wallx = 1;
      this.wally = 1;
    }
    
    applyForce(aForce) {
      let f = p5.Vector.div(aForce, this.m);
      this.acc.add(f);
    }
    
    update() {
      
      this.t = this.t + 0.01;
      let speedx = 20 * (noise(this.t) - 0.5) * this.wallx;
      let speedy = 20 * (noise(-this.t - 10) - 0.5) * this.wally;

      this.vel = createVector(speedx, speedy);
      this.vel.add(this.acc);
      this.pos.add(this.vel);
      this.acc.set(0, 0);
    }

    edge() {
        if(this.pos.y - this.m/2 < 0) {
            this.wally = this.wally * -1;
            this.pos.y = 0 + this.m/2;
        }
        if(this.pos.x - this.m/2 < 0) {
            this.wallx = this.wallx * -1;
            this.pos.x = 0 + this.m/2;
        }
        if(this.pos.y + this.m/2 > height) {
            this.wally = this.wally * -1;
            this.pos.y = height - this.m/2;
        }
        if(this.pos.x + this.m/2 > width) {
            this.wallx = this.wallx * -1;
            this.pos.x = width - this.m/2;
        }

    }



    
    show() {
      fill(0);
      circle(this.pos.x, this.pos.y, this.m);
    }
    
    show2(aCanvas) {
      aCanvas.noStroke();
      aCanvas.fill(155);
      aCanvas.circle(this.pos.x, this.pos.y, this.m);
    }
  }
  