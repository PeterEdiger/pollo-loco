/**
 * Class representing an endboss bar object.
 * @extends DrawableObject
 */
class EndbossBar extends DrawableObject{

  /**
   * Create an endboss bar object.
   * @param {number} y - The initial y-coordinate.
   */
  constructor(y) {
    super();
    this.y = y;
    this.width = 100;
    this.height = 30;
    this.loadImage(this.IMAGES[0]);
  }

  IMAGES = [
    "./img/7_statusbars/2_statusbar_endboss/green/green100.png",
    "./img/7_statusbars/2_statusbar_endboss/green/green80.png",
    "./img/7_statusbars/2_statusbar_endboss/green/green60.png",
    "./img/7_statusbars/2_statusbar_endboss/green/green40.png",
    "./img/7_statusbars/2_statusbar_endboss/green/green20.png",
    "./img/7_statusbars/2_statusbar_endboss/green/green0.png",
  ];

}
