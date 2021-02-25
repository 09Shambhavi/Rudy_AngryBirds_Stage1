class Ground {
    constructor(x,y,w,h) {
      var rect_options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,w,h,rect_options);
      this.w = w;
      this.h = h;
      World.add(world, this.body);
    }
    display(){
      rectMode(CENTER);
      fill("green");
      rect(this.body.position.x,this.body.position.y, this.w, this.h);
    }
  };