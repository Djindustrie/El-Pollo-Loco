class MovableObject {
  x = 50;
  y = 340;
  img;
  height = 100;
  width = 100;
  speed = 0.15;
  imageCache = {};
  currentImage = 0;
  otherDirection = false;

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  /**
   *
   * @param {Array} arr - IMG/Image1.png ...
   */
  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }

  moveRight() {}

  moveLeft() {
    setInterval(() => {
      this.x -= this.speed;
    }, 1000 / 120);
  }

  playAnimation(images) {
    let i = this.currentImage % this.IMAGES_WALKING.length;
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }
}
