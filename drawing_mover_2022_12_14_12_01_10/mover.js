class Mover {
    constructor(x, y, m) {
      this.pos = createVector(x, y);
    //  this.vel = createVector();
      this.acc = createVector();
      this.m = m; 
      this.t = 0;
    }
    
    applyForce(aForce) {
      let f = p5.Vector.div(aForce, this.m);
      this.acc.add(f);
    }
    
    update() {
      
      this.t = this.t + 0.1;
      let speedx = 5 * (noise(this.t) - 0.4);
      let speedy = 5 * (noise(-this.t + 10) - 0.4);

      this.vel = createVector(speedx, speedy * -1);
      this.vel.add(this.acc);
      this.pos.add(this.vel);
      this.acc.set(0, 0);


      

    //   if(speed>0.2) {
    //     speed = speed * -1 ;
    //   }

    //   if(speed>-0.2 && speed<0) {
    //     speed = speed * -1 ;
    //   }
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
  