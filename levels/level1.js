
let level1;

/**
 * All movable and static objects of a level
 * Instatiation at level/level1.js
 */

function initLevel(){
  level1 = new Level(
    [
      new Chicken(),
      new Chicken(),
      new Chicken(),
      new Chicken(),
      new Chicken(),
      new Chicken(),
      new Chicken(),
      new Chicken(),
      new Chicken(),
      new Chicken(),
      new Chicken(),
    ],
  
    [
      new Clouds("./img/5_background/layers/4_clouds/1.png", 0),
      new Clouds("./img/5_background/layers/4_clouds/2.png", 720),
      new Clouds("./img/5_background/layers/4_clouds/1.png", 1350),
    ],
  
    [
      new Background("./img/5_background/layers/air.png", -719),
      new Background("./img/5_background/layers/3_third_layer/2.png", -719),
      new Background("./img/5_background/layers/2_second_layer/2.png", -719),
      new Background("./img/5_background/layers/1_first_layer/2.png", -719),
    
      new Background("./img/5_background/layers/air.png", 0),
      new Background("./img/5_background/layers/3_third_layer/1.png", 0),
      new Background("./img/5_background/layers/2_second_layer/1.png", 0),
      new Background("./img/5_background/layers/1_first_layer/1.png", 0),
    
      new Background("./img/5_background/layers/air.png", 719),
      new Background("./img/5_background/layers/3_third_layer/2.png", 719),
      new Background("./img/5_background/layers/2_second_layer/2.png", 719),
      new Background("./img/5_background/layers/1_first_layer/2.png", 719),
    
      new Background("./img/5_background/layers/air.png", 719 * 2),
      new Background("./img/5_background/layers/3_third_layer/1.png", 719 * 2),
      new Background("./img/5_background/layers/2_second_layer/1.png", 719 * 2),
      new Background("./img/5_background/layers/1_first_layer/1.png", 719 * 2),
    
      new Background("./img/5_background/layers/air.png", 719 * 3),
      new Background("./img/5_background/layers/3_third_layer/2.png", 719 * 3),
      new Background("./img/5_background/layers/2_second_layer/2.png", 719 * 3),
      new Background("./img/5_background/layers/1_first_layer/2.png", 719 * 3),
    ],
  
    [
      new Coins(), 
      new Coins(), 
      new Coins(), 
      new Coins(), 
      new Coins(), 
      new Coins(), 
      new Coins(), 
      new Coins(), 
      new Coins(), 
      new Coins(), 
      new Coins(), 
      new Coins(), 
    ],
  
    [
      new Bottle(),
      new Bottle(),
      new Bottle(),
      new Bottle(),
      new Bottle(),
      new Bottle(),
    ] 
    
  );

}
