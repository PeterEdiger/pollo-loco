/**
 * Class representing a bottles bar object.
 * @extends DrawableObject
 */
class BottlesBar extends DrawableObject {

  /**
   * Create a bottles bar object.
   * @param {number} x - The initial x-coordinate.
   * @param {number} y - The initial y-coordinate.
   */
  constructor(x, y) {
    super();
    this.x = x;
    this.y = y;
    this.width = 100;
    this.height = 30;
    this.loadImage(this.IMAGES[0]);
  }

  IMAGES = [
    "./img/7_statusbars/1_statusbar/3_statusbar_bottle/green/0.png",
    "./img/7_statusbars/1_statusbar/3_statusbar_bottle/green/20.png",
    "./img/7_statusbars/1_statusbar/3_statusbar_bottle/green/40.png",
    "./img/7_statusbars/1_statusbar/3_statusbar_bottle/green/60.png",
    "./img/7_statusbars/1_statusbar/3_statusbar_bottle/green/80.png",
    "./img/7_statusbars/1_statusbar/3_statusbar_bottle/green/100.png"
  ];

}
