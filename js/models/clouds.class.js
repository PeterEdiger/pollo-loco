/**
 * Class representing a cloud object.
 * @extends MovableObject
 */
class Clouds extends MovableObject {
 
  /**
   * Create a cloud object.
   * @param {string} path - The path to the cloud image.
   * @param {number} x - The initial x-coordinate.
   */
  constructor(path, x) {
    super().loadImage(path);
    this.animate();
    this.x = x;
  }

  y = 15;
  width = 550;
  height = 200;

  /**
   * Animates the cloud by moving it to the left.
   */
  animate() {
    this.moveLeft(0.5);
  }
}
