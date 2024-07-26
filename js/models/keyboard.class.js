/**
 * Class representing a keyboard input handler.
 */
class Keyboard {

  /**
   * Create a keyboard input handler.
   */
  constructor() {
    this.bindBtnsPressEvents();
  }

  left = false;
  right = false;
  up = false;
  down = false;
  space = false;
  d = false;

  /**
   * Binds touch events to the action buttons.
   */
  bindBtnsPressEvents() {
    document.getElementById("action-btn-right").addEventListener("touchstart", (e) => {
      e.preventDefault();
      this.right = true;
    });
    document.getElementById("action-btn-right").addEventListener("touchend", (e) => {
      e.preventDefault();
      this.right = false;
    });
    document.getElementById("action-btn-left").addEventListener("touchstart", (e) => {
      e.preventDefault();
      this.left = true;
    });
    document.getElementById("action-btn-left").addEventListener("touchend", (e) => {
      e.preventDefault();
      this.left = false;
    });
    document.getElementById("action-btn-up").addEventListener("touchstart", (e) => {
      e.preventDefault();
      this.up = true;
    });
    document.getElementById("action-btn-up").addEventListener("touchend", (e) => {
      e.preventDefault();
      this.up = false;
    });
    document.getElementById("action-btn-throw").addEventListener("touchstart", (e) => {
      e.preventDefault();
      this.d = true;
    });
    document.getElementById("action-btn-throw").addEventListener("touchend", (e) => {
      e.preventDefault();
      this.d = false;
    });
  }
}
