
class Branch {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.ell = 0.0;
    this.vel = 20; 
    this.acc = 0.2;
    this.core = createVector(random(-2, 2),random(-2, 2));
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
    ellipse(0, 0, 3);
    pop();
  }
  
    
  
}
