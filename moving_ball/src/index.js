import { Ball } from "./ball.js";
import { Block } from "./block";

class App {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");

    document.body.appendChild(this.canvas);

    window.addEventListener("resize", this.resize.bind(this), false);
    this.resize();

    this.ball = new Ball(this.stageWidth, this.stageHeight, 60, 10);
    this.block = new Block(700, 30, 300, 450);

    window.requestAnimationFrame(this.animation.bind(this));
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stageHeight * 2;
    this.ctx.scale(2, 2);
  }

  animation(t) {
    window.requestAnimationFrame(this.animation.bind(this));

    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
    this.block.draw(this.ctx);
    this.ball.draw(
      this.ctx,
      this.stageWidth,
      this.stageHeight,
      this.block
    );
  }
}

new App();
