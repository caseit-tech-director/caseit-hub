let points = [];
const MAX_POINT = 10;
const WALKER_MAX_SPEED = 0.1;

function setup(ctx, canvasElm) {
  // init here
  // populate the points
  points = createPointWalkers(canvasElm);
}

function createPointWalkers(canvasElm) {
  let points = [];
  for (let i = 0; i < MAX_POINT; i++) {
    points.push(new Walker(canvasElm.width, canvasElm.height));
  }
  return points;
}

let timeout;
function onResize(ctx, canvasElm) {
  // reset all the points when resize action end
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    points = createPointWalkers(canvasElm);
  }, 100);
}

function draw(ctx, frameCount, canvasElm) {
  // clear the canvas
  ctx.clearRect(0, 0, canvasElm.width, canvasElm.height);
  // update here
  for (let i = 0; i < points.length; i++) {
    points[i].update(canvasElm.width, canvasElm.height);
  }

  // setup colors
  ctx.fillStyle = "rgb(196, 52, 52)";
  ctx.strokeStyle = "#EEE";

  let currentPoint, prevPoint;
  for (let i = 0; i < points.length; i++) {
    currentPoint = points[i];
    prevPoint = points[i - 1];

    if (prevPoint) {
      // draw the linking line if there is a prev point
      ctx.beginPath();
      ctx.moveTo(prevPoint.x, prevPoint.y);
      ctx.lineTo(currentPoint.x, currentPoint.y);
      ctx.stroke();
    }
  }

  // render caseit dot on top
  for (let i = 0; i < points.length; i++) {
    currentPoint = points[i];
    // draw caseit dot
    ctx.beginPath();
    ctx.arc(currentPoint.x, currentPoint.y, 4, 0, 2 * Math.PI);
    ctx.fill();
  }
}

class Walker {
  constructor(canvasWidth, canvasHeight) {
    // randomise the initial value
    this.x = getRandom(0, canvasWidth);
    this.y = getRandom(0, canvasHeight);
    this.velx = getRandom(-WALKER_MAX_SPEED, WALKER_MAX_SPEED);
    this.vely = getRandom(-WALKER_MAX_SPEED, WALKER_MAX_SPEED);
  }

  update(canvasWidth, canvasHeight) {
    // change direction if hit bound
    if (this.x > canvasWidth && this.velx > 0) this.velx *= -1;
    if (this.x < 0 && this.velx < 0) this.velx *= -1;
    if (this.y > canvasHeight && this.vely > 0) this.vely *= -1;
    if (this.y < 0 && this.vely < 0) this.vely *= -1;

    // update here
    this.x += this.velx;
    this.y += this.vely;
  }

  draw(ctx) {}
}

function getRandom(min, max) {
  return Math.random() * (max - min + 1) + min;
}

export { setup, draw, onResize };
