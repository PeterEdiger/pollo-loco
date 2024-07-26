class Background extends MovableObject {

  /**
   * Create a background object.
   * @param {string} path - The path to the image.
   * @param {number} x - The initial x-coordinate.
   */
  constructor(path, x) {
    super().loadImage(path);
    this.x = x;
  }

  width = 720;
  x = 0;
  y = 0;
  height = 480;

}
