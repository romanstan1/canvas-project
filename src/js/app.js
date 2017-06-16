
$(document).ready(() => {
  const canvas = document.getElementById('canvas');
  canvas.width = canvas.scrollWidth;
  canvas.height = canvas.scrollHeight;

  const ctx = canvas.getContext('2d');

  //const rectangle = {x: 0, y: 0, width: 100, height: 100};

  //
  // function update() {
  //   ctx.clearRect(0, 0, canvas.width, canvas.height);
  //
  //   rectangle.x += 1;
  //   rectangle.y += 1;
  //
  //   ctx.fillStyle = 'dodgerblue';
  //   ctx.fillRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
  //   ctx.fillRect(rectangle.x, rectangle.y + 200, rectangle.width, rectangle.height);
  //
  //   //setTimeout(update, 20);
  //   window.requestAnimationFrame(update);
  // }
  //
  // update();

  function Animation() {
  //const Animation = function() {
    this.rectangles = [
      {x: 0, y:   0, width: 100, height: 100, color: 'red',   speedX: 1},
      {x: 0, y: 100, width: 100, height: 100, color: 'green', speedX: 2},
      {x: 0, y: 200, width: 100, height: 100, color: 'blue',  speedX: 3},
    ];
    this.lastAnimationTime = 0;
  }

  //console.log(animation());

  // const animation1 = new Animation();
  // const animation2 = new Animation();
  // const animation3 = new Animation();

  Animation.prototype.update = function() {
    ctx.clearRect(0, 0 , canvas.width, canvas.height);

    console.log(this.rectangles);
    this.rectangles.forEach( rectangle => {
      ctx.fillStyle = rectangle.color;
      ctx.fillRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
      rectangle.x += rectangle.speedX;
    });
    window.requestAnimationFrame(this.update.bind(this));
  };

  const animationOne = new Animation();
  animationOne.update();

  //console.log(return Animation);
  //console.log(animation1.toString());

});
