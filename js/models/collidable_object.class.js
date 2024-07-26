/**
 * Class representing a collidable object.
 * @extends DrawableObject
 */
class CollidableObject extends DrawableObject {
  
  /**
   * Create a collidable object.
   */
  constructor() {
    super();
  }

  /**
   * Draws a hitbox rectangle around objects.
   * @param {CanvasRenderingContext2D} ctx - The 2D context of the canvas.
   */
  drawFrame(ctx) {
    ctx.beginPath();
    ctx.lineWidth = "2";
    ctx.strokeStyle = "blue";
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = "2";
    ctx.strokeStyle = "red";
    ctx.rect(this.x + this.offset.left, this.y + this.offset.top,
      this.width - (this.offset.left + this.offset.right),
      this.height - (this.offset.top + this.offset.bottom));
    ctx.stroke();
  }
}
