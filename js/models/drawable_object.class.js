/**
 * Class representing a drawable object.
 */
class DrawableObject {

  constructor() {
    this.x = 200 + Math.random() * 1500;
  }


  height;
  width;
  img;
  imgCache = {};
  currentIndex = 0;
  x;
  y;

  offset = {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  };


  /**
 * @param {string} path needed path to create {src} for {img element}
 * Creates an HTML {img element}.
 * Adds a {.src property} to that {img element} 
 */
  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }


  /**
* @param {Array} array contains img paths
* Fills {ImgCache} with [key:path] ➔ [value: img element].
*/
  fillImgCache(array) {
    array.forEach(path => {
      let image = new Image();
      image.src = path;
      this.imgCache[path] = image;
    });
  }

}