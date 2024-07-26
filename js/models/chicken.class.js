/**
 * Class representing a chicken object.
 * @extends MovableObject
 */
class Chicken extends MovableObject {

  /**
   * Create a chicken object.
   */
  constructor() {
    super();
    this.loadImage("./img/3_enemies_chicken/chicken_normal/1_walk/1_w.png");
    this.fillImgCache(this.IMAGES_WALKING);
    this.x = 200 + Math.random() * 1800;
    this.animate();
  }

  width = 50;
  height = 50;
  y = 380;
  intervalNrMove = 0;
  intervalNrWalk = 0;

  IMAGES_WALKING = [
    "./img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
    "./img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
    "./img/3_enemies_chicken/chicken_normal/1_walk/3_w.png",
  ];

  IMAGES_DEAD = [
    "./img/3_enemies_chicken/chicken_normal/2_dead/dead.png"
  ];

  offset = {
    left: 1,
    right: 0,
    top: 0,
    bottom: 0,
  };

  /**
   * Rotates chicken images simulating moving feet.
   * Gives every instance a different random speed.
   * Calls the moveLeft method.
   */
  animate() {
    let interval1 = setInterval(() => {
      this.playAnimation(this.IMAGES_WALKING);
    }, 250);

    this.intervalNrWalk = interval1;
    this.speed = Math.random() * 0.7;
    let interval2 = setInterval(() => {
      this.moveLeft();
    }, 1000 / 60);
    this.intervalNrMove = interval2;
  }


  /**
   * Triggers the dead animation for the chicken.
   */
  enemieDeadAnimation() {
    this.loadImage("./img/3_enemies_chicken/chicken_normal/2_dead/dead.png");
  }
}
