class Branch {
    constructor(x, y) {
      this.pos = createVector(x, y);
      this.ell = 0.0;
      this.vel = 20; 
      this.acc = 0.2;
      this.core = createVector(random(-2, 2),random(-2, 2));
      this.color = color(255, random(155, 200), random(155, 200) );
    }
    
       addForce(aForce) {
       this.core.add(aForce);
     }
    
    update() {
       this.ell += this.vel;
       this.vel += this.acc;
       this.pos.add(this.core);
    }
      
    display() {
      push();
      translate(this.pos.x, this.pos.y);
      rotate(this.ell);
      stroke(this.color);
      fill(this.color);
      ellipse(0, 0, 10);
      pop();
    }
  
    isDead() {
      return this.lifespan < 0;
    } 
    
  }
  