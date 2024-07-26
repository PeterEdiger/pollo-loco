/**
 * Class representing a bottle object.
 * @extends CollidableObject
 */
class Bottle extends CollidableObject {

  /**
   * Create a bottle object.
   */
  constructor() {
    super();
    this.loadImage("./img/6_salsa_bottle/1_salsa_bottle_on_ground.png");
  }

  width = 50; 
  height = 50;
  y = 375;

  offset = {
    left: 20,
    right: 10,
    top: 5,
    bottom: 5,
  };
}
