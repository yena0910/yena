class Mover {
    constructor(x, y, m) {
      this.pos = createVector(x, y);
      this.vel = createVector(random(-5, 5), random(-5, 5));
      this.acc = createVector();
      this.m = m; 
    }
    
    applyForce(aForce) {
      let f = p5.Vector.div(aForce, this.m);
      this.acc.add(f);
    }
    
    update() {
      this.vel = createVector(random(-1, 1), random(-1, 1));
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
      aCanvas.fill(155);
      aCanvas.circle(this.pos.x, this.pos.y, this.m);
    }
  }
  