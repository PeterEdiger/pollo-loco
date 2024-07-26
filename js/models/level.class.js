/**
 * Class representing a level.
 */
class Level {
  
  /**
   * Create a level.
   * @param {Array} enemies - The enemies in the level.
   * @param {Array} clouds - The clouds in the level.
   * @param {Array} backgrounds - The backgrounds in the level.
   * @param {Array} coins - The coins in the level.
   * @param {Array} bottles - The bottles in the level.
   */
  constructor(enemies, clouds, backgrounds, coins, bottles) {
    this.enemies = enemies;
    this.clouds = clouds;
    this.backgrounds = backgrounds;
    this.coins = coins;
    this.bottles = bottles;
  }

  levelEndX = 2000;

}
