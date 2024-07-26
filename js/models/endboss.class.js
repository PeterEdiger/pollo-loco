/**
 * Class representing the Endboss, a type of MovableObject.
 * Handles the animations and states of the Endboss character.
 */
class Endboss extends MovableObject {

  /**
   * Constructs the Endboss object and initializes the necessary properties and animations.
   */
  constructor() {
    super().loadImage(this.IMAGES_WALKING[0]),
      this.fillImgCache(this.IMAGES_WALKING);
    this.fillImgCache(this.IMAGES_HURT);
    this.fillImgCache(this.IMAGES_ALERT);
    this.fillImgCache(this.IMAGES_DEAD);
    this.animate();
    this.speed = 0;
  }

  x = 2200;
  y = 145;
  width = 300;
  height = 300;

  deadInterval;
  walkingInterval;
  hurtIndex = 0;
  deadIndex = 0;
  walkInterval;
  hurtInterval;
  currentAnimation = null;
  endbossWalking = false;
  hurtAnimationIndex = 0;
  hitCounter = 0;

  offset = {
    left: 30,
    right: 30,
    top: 50,
    bottom: 10,
  };

  IMAGES_ALERT = [
    "./img/4_enemie_boss_chicken/2_alert/G5.png",
    "./img/4_enemie_boss_chicken/2_alert/G6.png",
    "./img/4_enemie_boss_chicken/2_alert/G7.png",
    "./img/4_enemie_boss_chicken/2_alert/G8.png",
    "./img/4_enemie_boss_chicken/2_alert/G9.png",
    "./img/4_enemie_boss_chicken/2_alert/G10.png",
    "./img/4_enemie_boss_chicken/2_alert/G11.png",
    "./img/4_enemie_boss_chicken/2_alert/G12.png",
  ];

  IMAGES_HURT = [
    "./img/4_enemie_boss_chicken/4_hurt/G21.png",
    "./img/4_enemie_boss_chicken/4_hurt/G22.png",
    "./img/4_enemie_boss_chicken/4_hurt/G23.png"
  ];

  IMAGES_WALKING = [
    "./img/4_enemie_boss_chicken/1_walk/G1.png",
    "./img/4_enemie_boss_chicken/1_walk/G2.png",
    "./img/4_enemie_boss_chicken/1_walk/G3.png",
    "./img/4_enemie_boss_chicken/1_walk/G4.png",
  ];

  IMAGES_ATTACK = [
    "./img/4_enemie_boss_chicken/3_attack/G13.png",
    "./img/4_enemie_boss_chicken/3_attack/G14.png",
    "./img/4_enemie_boss_chicken/3_attack/G15.png",
    "./img/4_enemie_boss_chicken/3_attack/G16.png",
    "./img/4_enemie_boss_chicken/3_attack/G17.png",
    "./img/4_enemie_boss_chicken/3_attack/G18.png",
    "./img/4_enemie_boss_chicken/3_attack/G19.png",
    "./img/4_enemie_boss_chicken/3_attack/G20.png",
  ];

  IMAGES_DEAD = [
    "./img/4_enemie_boss_chicken/5_dead/G24.png",
    "./img/4_enemie_boss_chicken/5_dead/G25.png",
    "./img/4_enemie_boss_chicken/5_dead/G26.png",
  ];


  /**
   * Initiates the walking animation and movement for the Endboss.
   */
  animate() {
    setInterval(() => {
      this.moveLeft();
    }, 1000 / 60);
    this.walkInterval = setInterval(() => {
      this.playAnimation(this.IMAGES_ALERT);
    }, 250);
    this.currentAnimation = 'walk';
  }


  /**
   * Plays the dead animation for the Endboss using the provided images.
   * @param {string[]} images - Array of image paths to be used in the dead animation.
   */
  deadAnimation(images) {
    this.speed = 0;
    this.deadInterval = setInterval(() => {
      if (this.deadIndex < this.IMAGES_DEAD.length) {
        this.deadIndex++;
        clearInterval(this.walkingInterval);
        clearInterval(this.hurtInterval);
        this.deathAnimation(images)
        ;
      }
    }, 400);
  }


  /**
   * Plays the dead animation for the object.
   * @param {Array} images - The images for the dead animation.
   */
  deathAnimation(images) {
    if (this.deadIndex < images.length) {
      clearInterval(this.walkingInterval);
      clearInterval(this.hurtInterval);
      this.img = this.imgCache[images[this.deadIndex]];
      this.deadIndex += 1;
    }else{
      this.img = this.imgCache[this.IMAGES_DEAD[2]]
      clearAllIntervals()
      setTimeout(() => {
        
        showWinScreen()
      }, 1100);
    }
    
  }


  /**
   * Plays the hurt animation for the Endboss using the provided images.
   * @param {string[]} images - Array of image paths to be used in the hurt animation.
   */
  hurtAnimation(images) {
    this.bossResumesWalking();
    this.speed = 0;
    setTimeout(() => {
      this.speed = 4;
    }, 1000);
    this.hurtInterval = setInterval(() => {
      if (this.hurtAnimationIndex < images.length) {
        clearInterval(this.walkingInterval);
        this.playAnimation(images);
        this.hurtAnimationIndex++;
      }
    }, 200);
  }


  
  /**
   * Sets a timout when the boss starts the walking animation again.
   *
   */
  bossResumesWalking() {
    setTimeout(() => {
      clearInterval(this.hurtInterval);
      this.walkInterval = setInterval(() => {
        this.playAnimation(this.IMAGES_WALKING);
      }, 250);
    }, 500);
  }


  /**
   * Resumes the previous animation of the Endboss.
   * Currently resumes the walking animation.
   */
  resumePreviousAnimation() {
    if (this.currentAnimation === 'hurt') {
      this.animate(); // Resume the walking animation or whatever the previous animation was
    }
  }
}
