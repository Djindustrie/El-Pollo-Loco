class MovableObject {
  x = 50;
  y = 350;
  img;
  height = 100;
  width = 100;

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  moveRight() {
    console.log("moveRight");
  }

  moveLeft() {}
}
