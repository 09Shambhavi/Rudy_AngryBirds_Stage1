class Bird {
    constructor(x,y,w,h) {
      var rect_options = {
        density:1.5,
        friction: 1.0,
        restitution:0.5
      };
      this.body = Bodies.rectangle(x,y,w,h, rect_options);
      this.w = w;
      this.h = h;
      World.add(world, this.body);
    };
    display(){
      this.body.position.x = mouseX ;
      this.body.position.y = mouseY;
      push();
      translate(this.body.position.x,this.body.position.y);
      rotate(this.body.angle);
      fill('red')
      rectMode(CENTER)
      rect(0, 0, this.w,this.h);
      pop();
    };
  };
  