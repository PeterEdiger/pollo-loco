/**
 * Class representing a movable object.
 * @extends CollidableObject
 */
class MovableObject extends CollidableObject {

  /**
   * Create a movable object.
   */
  constructor() {
    super();
  }

  x;
  y;
  height;
  width;
  img;
  speed;
  otherDirection = false;
  currentIndex = 0;
  speedY = 0;
  offsetY = 0;
  acceleration = 4;
  energy = 100;
  lastHit = 0;


  /**
   * Simulates gravity for objects.
   */
  applyGravity() {
    setInterval(() => {
      if (this.isAboveGround() || this.speedY > 0) {
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
        if (this.y === 226) {
          this.y = 244;
        }
      }
    }, 1000 / 10);
  }


  /**
   * Threshold definition of y-axis for an object being on the ground.
   * @returns {boolean} True if the object is above the ground.
   */
  isAboveGround() {
    return this instanceof ThrowableObject || this.y < 244;
  }


  /**
   * Fills image cache with image elements.
   * @param {Array} array - Contains image paths.
   */
  fillImgCache(array) {
    array.forEach(path => {
      let image = new Image();
      image.src = path;
      this.imgCache[path] = image;
    });
  }


  /**
   * Moves the object to the right.
   */
  moveRight() {
    this.x += this.speed;
  }


  /**
   * Moves the object to the left.
   */
  moveLeft() {
    this.x -= this.speed;
  }


  /**
   * Makes the object jump.
   */
  jump() {
    this.speedY = 30;
  }


  /**
   * Makes the object jump from a chicken.
   */
  jumpFromChicken() {
    this.speedY = 22;
  }


  /**
   * Plays the dead animation for the object.
   * @param {Array} images - The images for the dead animation.
   */
  deadAnimation(images) {
    if (this.dyingIndex < images.length) {
      this.img = this.imgCache[images[this.dyingIndex]];
      this.dyingIndex += 1;
    }
  }


  jumpUpAnimation(images) {
    if (this.jumpUpIndex < images.length) {
      this.img = this.imgCache[images[this.jumpUpIndex]];
      this.jumpUpIndex += 1;
    }
  }


  jumpDownAnimation(images) {
    if (this.jumpDownIndex < images.length) {
      this.img = this.imgCache[images[this.jumpDownIndex]];
      this.jumpDownIndex += 1;
    }
  }


  /**
   * Repeats changing images of an object to simulate animation.
   * @param {Array} images - The images that will animate moves of an object.
   */
  playAnimation(images) {
    let i = this.currentIndex % images.length;
    this.currentIndex = i;
    this.img = this.imgCache[images[this.currentIndex]];
    this.currentIndex += 1;
  }


  /**
   * Checks if two specified spans are intersecting.
   * @param {number} pointA - The start point of span 1.
   * @param {number} pointB - The end point of span 1.
   * @param {number} pointC - The start point of span 2.
   * @param {number} pointD - The end point of span 2.
   * @returns {boolean} True if the spans intersect.
   */
  spanIntersection(pointA, pointB, pointC, pointD) {
    return pointA < pointD && pointB > pointC;
  }


  /**
   * Checks if the hero frame and the object frame are intersecting.
   * Resolves to true when the x-spans and the y-spans are colliding.
   * @param {MovableObject} obj - The object to check collision with.
   * @returns {boolean} True if the objects are colliding.
   */
  isColliding(obj) {
    return this.spanIntersection(
      this.x + this.offset.left,
      this.x + this.width - this.offset.right,
      obj.x + obj.offset.left,
      obj.x + obj.width - obj.offset.right
    ) && this.spanIntersection(
      this.y + this.offset.top,
      this.y + this.height - this.offset.bottom,
      obj.y + obj.offset.top,
      obj.y + obj.height - obj.offset.bottom
    );
  }


  /**
   * Checks if the hero is above a chicken.
   * @param {MovableObject} obj - The chicken object.
   * @returns {boolean} True if the hero is above the chicken.
   */
  isAboveChicken(obj) {
    return this.spanIntersection(
      this.x + this.offset.left,
      this.x + this.width - this.offset.right,
      obj.x + obj.offset.left,
      obj.x + obj.width - obj.offset.right
    ) && this.spanIntersection(
      this.y + this.height - this.offset.bottom,
      this.y + this.height - this.offset.bottom + 12,
      obj.y - 12,
      obj.y
    );
  }


  /**
   * Reduces the object's energy by 5. Sets energy to 0 if below 0.
   */
  hit() {
    this.energy -= 5;
    if (this.energy < 0) {
      this.energy = 0;
    } else {
      this.lastHit = new Date().getTime();
    }
  }


  /**
   * Checks if the object is hurt.
   * @returns {boolean} True if the object was hit in the last 0.5 seconds.
   */
  isHurt() {
    let timePassed = new Date().getTime() - this.lastHit;
    timePassed = timePassed / 1000;
    return timePassed < 0.5;
  }

  
  /**
   * Checks if the object is dead.
   * @returns {boolean} True if the object's energy is 0.
   */
  isDead() {
    return this.energy === 0;
  }
}
