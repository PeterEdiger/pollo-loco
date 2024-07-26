/**
 * Class representing the game world.
 */
class World {

  /**
   * Constructs the World object and initializes the canvas, keyboard, and game elements.
   * @param {HTMLCanvasElement} canvas - The canvas element where the game is rendered.
   * @param {object} keyboard - The keyboard input handler.
   */
  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.run();
  }


  canvas;
  keyboard;
  camera_x;
  ctx;
  y;
  level = level1;
  character = new Character();
  enemies = level1.enemies;
  clouds = level1.clouds;
  coins = level1.coins;
  bottles = level1.bottles;
  backgrounds = level1.backgrounds;
  statusBarHealth = new HealthBar(-100, 20);
  statusBarCoins = new CoinsBar(-100, 50);
  statusBarBottles = new BottlesBar(-100, 80);
  statusBarEndboss = new EndbossBar(20);
  endboss = new Endboss();
  throwableObjects = [];
  bottlesAvailableIndex = 1;
  endBossDyeIndex = 1;
  throwBottleStamp;
  gotStamp = false;
  firstBottle = true;


  /**
   * Assigns the world context to the character.
   */
  setWorld() {
    this.character.world = this;
  }


  /**
   * Initiates the game loop by setting up collision and object check intervals.
   */
  run() {
    setInterval(() => {
      this.checkCollisions();
      this.checkThrowObjects();
    }, 100);
  }


/**
 * Checks if a throwable object is thrown and updates the bottle status bar.
 * If the 'd' key is pressed, a new throwable object is created and added to the array.
 */
checkThrowObjects() {
  this.updateThrowBottleStampAndCheckKey();
}


/**
 * Updates the throw bottle stamp if not already set and checks if the 'd' key is pressed to create a new throwable object.
 */
updateThrowBottleStampAndCheckKey() {
  if (!this.gotStamp) {
    this.throwBottleStamp = new Date().getTime();
  }
  if (this.keyboard.d && this.bottlesAvailableIndex >= 0) {
    this.gotStamp = true;
    this.throwBottleIfReady();
  }
}


/**
 * Creates and throws a new bottle if the cooldown period has passed or if it's the first bottle.
 */
throwBottleIfReady() {
  if ((new Date().getTime() - this.throwBottleStamp) > 1000 || this.firstBottle) {
    this.firstBottle = false;
    let bottleBarImages = this.statusBarBottles.IMAGES;
    let bottle = new ThrowableObject(this.character.x, this.character.y);
    this.throwableObjects.push(bottle);
    this.statusBarBottles.loadImage(bottleBarImages[this.bottlesAvailableIndex]);
    this.bottlesAvailableIndex -= 1;
    this.gotStamp = false;
  }
}


/**
 * Checks if Endboss runs through hero. 
 */
checkBossRunThroughHero(){
  if(this.endboss.x + this.endboss.width < this.character.x){
    showLostScreen()
    this.character.stopAllAudio()
    clearAllIntervals()
    document.querySelector('.audio-button-holder').classList.add('d-none');
  }
}

  /**
   * Adds the endboss status bar to the canvas when the character is past a certain point.
   */
  checkStatusBarEndBoss() {
    if (this.character.x > 100) {
      this.addToCanvas(this.statusBarEndboss);
    }
  }


  /**
   * Checks for collisions between objects.
   */
  checkCollisions() {
    this.collisionHeroVsEnemy();
    this.collisionHeroVsCoins();
    this.collisionHeroVsBottles();
    this.collisionBottleVsEndBoss();
    this.collisionHeroVsEndboss();
    this.checkHeroAboveEnemy();
    this.checkBossRunThroughHero();
  }


  /**
   * Checks for collisions between the character and enemies.
   * Handles character jumping on enemies and getting hit.
   */
  collisionHeroVsEnemy() {
    this.level.enemies.forEach((enemy) => {
      if (this.character.isColliding(enemy)) {
        if (this.character.y + this.character.offset.top + this.character.height === enemy.y) {
        }
        this.character.hit();
        this.statusBarHealth.setPercentage(this.character.energy);
      }
    });
  }


  /**
   * Checks if hero is above the enemy.
   *
   */
  checkHeroAboveEnemy() {
    this.level.enemies.forEach((enemy, index) => {
      if (this.character.isAboveChicken(enemy) && this.character.speedY < 20) {
        clearInterval(enemy.intervalNrWalk);
        clearInterval(enemy.intervalNrMove);
        this.character.jumpFromChicken();
        this.enemies[index].enemieDeadAnimation();
        setTimeout(() => {
          this.enemies.splice(index, 1);
        }, 400);
      }
    });
  }


  coinImgIndex = 1;
  /**
   * Checks for collisions between the character and coins.
   * Updates the coin status bar and removes collected coins from the array.
   */
  collisionHeroVsCoins() {
    this.level.coins.forEach((coin, index) => {
      if (this.character.isColliding(coin)) {
        let coinBarImages = this.statusBarCoins.IMAGES;
        this.statusBarCoins.loadImage(coinBarImages[this.coinImgIndex]);
        if (this.coinImgIndex < 5) {
          this.coinImgIndex += 1;
        }
        this.level.coins.splice(index, 1);
      }
    });
  }


  /**
   * Checks for collisions between the character and bottles.
   * Updates the bottle status bar and removes collected bottles from the array.
   */
  collisionHeroVsBottles() {
    this.level.bottles.forEach((element, index) => {
      if (this.character.isColliding(element)) {
        let bottleBarImages = this.statusBarBottles.IMAGES;
        this.statusBarBottles.loadImage(bottleBarImages[this.bottlesAvailableIndex + 1]);
        if (this.bottlesAvailableIndex < 4) {
          this.bottlesAvailableIndex += 1;
          this.level.bottles.splice(index, 1);
        }
      }
    });
  }


  /**
   * Checks for collisions between throwable objects and the endboss.
   * Updates the endboss status bar and handles the endboss getting hit.
   */
  collisionBottleVsEndBoss() {
    this.throwableObjects.forEach((bottle, index) => {
      if (this.endboss.isColliding(bottle)) {
        this.handleEndbossHit(index);
      }
    });
  }


  /**
   * Handles the actions to be taken when the endboss is hit by a throwable object.
   * @param {number} bottleIndex - The index of the bottle that hit the endboss.
   */
  handleEndbossHit(bottleIndex) {
    this.endboss.hurtAnimationIndex = 0;
    let statusBarImgs = this.statusBarEndboss.IMAGES;
    this.statusBarEndboss.loadImage(statusBarImgs[this.endBossDyeIndex]);
    this.endBossDyeIndex++;
    if (this.endBossDyeIndex === this.statusBarEndboss.IMAGES.length ) {
      this.handleEndbossDefeated();
    }
    this.throwableObjects.splice(bottleIndex, 1);
    this.character.bottleHitSound.play();
    this.endboss.hurtAnimation(this.endboss.IMAGES_HURT);
    clearInterval(this.endboss.walkInterval);
  }


  /**
   * Handles the actions to be taken when the endboss is defeated.
   */
  handleEndbossDefeated() {
    this.endboss.deadAnimation(this.endboss.IMAGES_DEAD);
    this.endboss.speed = 0;
    setTimeout(() => {
      document.querySelector('.audio-button-holder').classList.add('d-none');
      this.character.stopAllAudio();
    }, 700);
  }


  /**
   * Checks for collisions between the character and the endboss.
   * Handles the character getting hit by the endboss.
   */
  collisionHeroVsEndboss() {
    if (this.character.isColliding(this.endboss)) {
      this.character.hit();
      this.statusBarHealth.setPercentage(this.character.energy);
    }
  }


  /**
   * Clears the canvas and redraws all game objects.
   * Uses requestAnimationFrame to render the next frame.
   */
  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.translate(-this.camera_x, 0);
    this.addObjectsToMap(this.level.backgrounds);
    this.addToCanvas(this.endboss);
    this.addObjectsToMap(this.level.coins);
    this.addObjectsToMap(this.level.bottles);
    this.addToCanvas(this.character);
    this.addObjectsToMap(this.level.enemies);
    this.addObjectsToMap(this.throwableObjects);
    this.addObjectsToMap(this.level.clouds);
    this.addToCanvas(this.statusBarHealth);
    this.addToCanvas(this.statusBarCoins);
    this.addToCanvas(this.statusBarBottles);
    this.checkStatusBarEndBoss();
    this.ctx.translate(this.camera_x, 0);
    let self = this;
    requestAnimationFrame(() => { self.draw(); });
  }


  /**
   * Adds objects to the canvas.
   * @param {Array} objects - An array of objects to be drawn on the canvas.
   */
  addObjectsToMap(objects) {
    objects.forEach(o => {
      this.addToCanvas(o);
    });
  }


  /**
   * Adds a movable object to the canvas and draws a frame around it.
   * @param {object} mo - The movable object to be added to the canvas.
   */
  addToCanvas(mo) {
    if (mo.otherDirection) {
      this.ctx.save();
      this.ctx.translate(mo.width, 0);
      this.ctx.scale(-1, 1);
      mo.x = mo.x * -1;
    }
    try {
      this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
    } catch (error) {
      this.logErrorMessages()
    }
    if (mo.otherDirection) {
      mo.x = mo.x * -1;
      this.ctx.restore();
    }
  }


  /**
   * Logs Specific error messages
   */
  logErrorMessages(){
    console.warn("Error loading image", error);
    console.log("Could not load image", mo.img.src);
  }


  /**
   * Draws a frame for all instances in an array of objects.
   * @param {Array} objectsArray - The array of objects whose frames are to be drawn.
   */
  drawFrameAllInstances(objectsArray) {
    objectsArray.forEach(obj => {
      obj.drawFrame(this.ctx);
    });
  }

}
