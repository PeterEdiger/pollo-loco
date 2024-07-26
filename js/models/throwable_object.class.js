/**
 * Class representing a throwable object.
 * @extends MovableObject
 */
class ThrowableObject extends MovableObject {
  
  /**
   * Create a throwable object.
   * @param {number} x - The initial x-coordinate.
   * @param {number} y - The initial y-coordinate.
   */
  constructor(x, y) {
    super();
    this.x = x;
    this.y = y;
    this.width = 60;
    this.height = 80;
    this.throw();
    this.loadImage("./img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png");
    this.fillImgCache(this.IMAGES_BOTTLE_ROTATE);
  }

  IMAGES_BOTTLE_ROTATE = [
    "./img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png",
    "./img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png",
    "./img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png",
    "./img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png",
  ];

  /**
   * Throws the object, applying gravity and animation.
   */
  throw() {
    this.speedY = 30;
    this.applyGravity();
    setInterval(() => {
      this.playAnimation(this.IMAGES_BOTTLE_ROTATE);
    }, 1000 / 13);
    setInterval(() => {
      this.x += 3.5;
    }, 1000 / 60);
  }
}
