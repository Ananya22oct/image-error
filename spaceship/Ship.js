class Ship{
    constructor(x,shipImage){
      this.x=x;
      this.y=350;
      this.width=20;
      this.height=30;
      this.image=shipImage;
    }

    display(){
        imageMode(CENTER);
        image(this.image,this.x,this.y,this.width,this.height);
}

   
   

}