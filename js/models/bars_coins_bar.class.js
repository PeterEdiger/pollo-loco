class CoinsBar extends DrawableObject{
  
  constructor(x, y) {
    super();
    this.x = x;
    this.y = y;
    this.width = 100;
    this.height = 30;
    this.loadImage(this.IMAGES[0])
  }

  IMAGES = [
    "./img/7_statusbars/1_statusbar/1_statusbar_coin/green/0.png",
    "./img/7_statusbars/1_statusbar/1_statusbar_coin/green/20.png",
    "./img/7_statusbars/1_statusbar/1_statusbar_coin/green/40.png",
    "./img/7_statusbars/1_statusbar/1_statusbar_coin/green/60.png",
    "./img/7_statusbars/1_statusbar/1_statusbar_coin/green/80.png",
    "./img/7_statusbars/1_statusbar/1_statusbar_coin/green/100.png",
  ];

}