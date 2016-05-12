'use strict';

var canvas = document.getElementById('canvas'),
  ctx = canvas.getContext('2d'),
  timerElement = document.getElementById('timer');

var shipImage = new Image();
shipImage.src = 'ship.png';

var bulletImage = new Image();
bulletImage.src = 'bullet.png';

canvas.width = 500;
canvas.height = 500;

function Ship() {
  var self = this;

  this.width = 20;
  this.height = 20;

  this.x = 240;
  this.y = 440;

  this.init = function() {
    this.render();
  }

  this.render = function() {
    ctx.save();
    ctx.drawImage(shipImage, self.x, self.y, self.width, self.height);
  }

  this.shoot = function(bullets) {
    self.arrow = new Arrow(self.x, bullets);
    self.arrow.init();
    self.isShoot = self.arrow.returnBullet();
  }

  this.returnShoot = function() {
    return self.isShoot;
  }
}

function Bullets() {
  var self = this;

  this.width = 20;
  this.height = 20;

  this.x = 100;
  this.y = -100;

  this.bulletsArr = [];
  this.times = 1;

  this.init = function() {
    self.generateBullets(self.times);
    self.render();
  }

  this.render = function() {
    _.each(self.bulletsArr, function(bullet) {
      ctx.save();
      ctx.drawImage(bulletImage, bullet.x, bullet.y, bullet.width, bullet.height);
    });
  }

  this.update = function(frames, ship, bulletTodelete) {
    if (frames % 20 === 0 && frames !== 0) {
      self.generateBullets(self.times);
    }

    // remove not visible bullets
    _.remove(self.bulletsArr, function(bullet) {
      return bullet.y > canvas.height + 40;
    });

    _.each(self.bulletsArr, function(bullet) {
      bullet.y += 20;
    });

    // remove shooted bullet
    if (bulletTodelete) {
      _.remove(self.bulletsArr, function(bullet) {
        return bulletTodelete == bullet;
      });
    }
  }

  this.generateBullets = function(times) {
    for (var i = 1; i <= times; i++) {

      var bullet = {
        x: getRandomNumber(0, canvas.width / 20, self.width),
        y: getRandomNumber(-200 / 20, 0, self.width),
        width: self.width,
        height: self.height
      };

      self.bulletsArr.push(bullet);
    }

    self.times += 1;
  }

  this.checkShipCollision = function(ship) {
    var isCollision;

    _.forEach(self.bulletsArr, function(bullet) {
      if (bullet.x === ship.x && bullet.y === ship.y) {
        isCollision = true;
      }
    });

    return isCollision;
  };

  var getRandomNumber = function(min, max, width, range) {
    return (Math.floor(Math.random() * (max - min + 1) + min) * width);
  };

}

function Arrow(shipX, bullets) {
  var self = this;

  this.shipX = shipX;
  this.bullets = bullets;

  this.width = 5;
  this.height = 20;
  this.shipYMargin = 80; // margin from bottom to ship y-coordinates
  this.centerShipArrow = 8; // 8 pixels to center 5px arrow in ship

  this.init = function() {
    self.render();
  }

  this.render = function() {
    var arrowY,
      arrowHeight;

    var closestBullet = _.maxBy(_.filter(self.bullets, function(bullet) {
      return self.shipX === bullet.x;
    }), 'y');

    if (closestBullet) {
      arrowY = closestBullet.y + 20;
      arrowHeight = canvas.height - (this.shipYMargin + arrowY) + this.height;
    } else {
      arrowY = 0;
      arrowHeight = canvas.height - this.shipYMargin + this.height;
    }

    if (arrowY < (canvas.height - this.shipYMargin)) { // can't shoot to the bottom
      ctx.fillRect(self.shipX + self.centerShipArrow, arrowY, self.width, arrowHeight);

      if (closestBullet) self.bulletToReturn = closestBullet;
    }

  }

  this.returnBullet = function() {
    if (self.bulletToReturn) return self.bulletToReturn;
  }

}

function Timer($timer) {
  var self = this;

  this.seconds = 0;

  this.init = function() {
    var $timer = '<h1 id="timer">0:00</h1>';
    document.body.insertAdjacentHTML('afterbegin', $timer);
    self.$timer = document.getElementById('timer');

    self.updateTime();
  }

  this.updateTime = function() {
    setTimeout(function() {
      var timeToDisplay =  (self.seconds > 60 ? '1' : '0') + ':' + (self.seconds < 10 || self.seconds > 60 ? '0' : '') + (self.seconds < 60 ? self.seconds : self.seconds - 60);
      if (self.$timer) self.$timer.innerHTML = timeToDisplay;

      self.seconds += 1;
      self.updateTime();
    }, 1000);
  }

  this.stop = function() {
    self.$timer = null;
  }

}

function GameEngine() {
  var self = this;

  this.frames = 0;

  this.bulletTodelete = null;

  this.init = function() {
    self.ship = new Ship();
    self.ship.init();

    self.bullets = new Bullets();
    self.bullets.init();

    self.timer = new Timer();
    self.timer.init();

    self.frame();

    self.controlls();
  }

  this.update = function() {
    self.bullets.update(self.frames, self.ship, self.bulletTodelete);
    self.isCollision = self.bullets.checkShipCollision(self.ship);

    if (self.isCollision) {
      self.timer.stop();
    }
  }

  this.render = function() {
    ctx.save();
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    self.ship.render();
    self.bullets.render();
  }

  this.frame = function() {
    self.update();
    self.render();

    if (!self.isCollision) setTimeout(self.frame, 60);

    self.frames += 1;
  }

  this.controlls = function() {
    window.addEventListener('keydown', function(event) {
      var key = event.keyCode || event.charCode;

      switch (key) {
        case (65):
          self.ship.x -= 20;
          break;
        case 68:
          self.ship.x += 20;
          break;
        case (37):
          self.ship.x -= 20;
          break;
        case 39:
          self.ship.x += 20;
          break;
        case 32:
          if (!self.isCollision)
            self.ship.shoot(self.bullets.bulletsArr);
            self.bulletTodelete = self.ship.returnShoot();
          break;
      }
    });
  }
}

(new GameEngine()).init();
