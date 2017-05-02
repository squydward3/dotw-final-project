
//p5
var ground, bar, bar2, bg;
var flowers = [];
var howmany = 1;
var flag = true;
var flowerGroup;
var c = document.getElementById('canvas');

function setup() {

  // setTimeout(function() {
    var cv = createCanvas(windowWidth, windowHeight);
    cv.parent('#canvas');
  // }, 6000)

    setTimeout(delay, 6000);
    bar = createSprite(720, height*.9);
    bar.addImage(loadImage("img/bar1.png"));

    lake = createSprite(720, height*.95);
    lake.addImage(loadImage("img/lake.png"));


    flowerGroup = new Group();
}

function delay() {
}

function draw() {
  clear();

  //everytime a flower touches the ground
  //determine how many flower objects to push in the next batch
  if ((flag==true) && (howmany < 10)) {
    for (var i=0; i<howmany; i++) {
      flowers.push(new Multiply());
    }
    flag = false;
  }
  for (var i=0; i<flowers.length; i++) {
    flowers[i].move();
  }
  flowerGroup.overlap(flowerGroup, collide);
  drawSprites();
}

function collide(y) {
  y.changeAnimation('collide');
  y.animation.looping = false
}

function Multiply() {

    this.sprite = createSprite(random(0, width/2), random(0, 75))
    this.sprite.addAnimation("normal", "img/dummy1.png", "img/dummy1.png");
    this.sprite.addAnimation("poof", "img/dummy1.png", "img/dummy6.png");
    this.sprite.addAnimation("collide", "img/collide1.png", "img/collide8.png");

    flowerGroup.add(this.sprite);

    var speed = random(2, 6);

    this.move = function() {
      this.sprite.setSpeed(speed, random(0, 85));
      var posX = this.sprite.position.x;
      var posY = this.sprite.position.y;
      // console.log(posX, posY);

      if (this.sprite.overlap(lake)) {
        this.sprite.changeAnimation('poof');
        this.sprite.animation.looping = false;
      }

      this.sprite.overlap(bar, rm);

    }

}
function rm(x) {
  x.remove();
  howmany++;
  flag = true;
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
