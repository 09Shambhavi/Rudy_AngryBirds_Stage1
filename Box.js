class Box {
  constructor(x,y,w,h) {
    var rect_options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.body = Bodies.rectangle(x,y,w,h,rect_options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }
  display(){
    push();
    translate(this.body.position.x,this.body.position.y);
    rotate(this.body.angle);
    fill('brown')
    rectMode(CENTER)
    rect(0, 0, this.w,this.h);
    pop();
  }
};
