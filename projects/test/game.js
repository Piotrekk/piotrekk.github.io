'use strict';

var canvas = document.getElementById('canvas'),
  ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var GAME_SETTINGS = {
  FPS: 60,
  second: 1000,
  speed: 3,
  layoutRange: {
    left: 450,
    right: 550
  }
};

var GAME_DATA = {
  images: [],
  symbols: []
};

function Game() {
  var self = this;

  this.load = function() {
    self.loader = new gameLoader(self.init);
    self.loader.init();
  };

  this.init = function() {
    self.gameFlow = new gameFlow();
    self.gameFlow.init();
  }

}

function gameLoader(afterLoadingCallback) {
  var self = this;

  this.loading = true;
  this.afterLoadingCallback = afterLoadingCallback;

  this.init = function() {
    self.run();
    _fetchGameData();
  };

  this.run = function() {
    setInterval(function() {
      if (self.loading)
        self.update(),
        self.render();
      else
        return false;
    }, GAME_SETTINGS.second / GAME_SETTINGS.FPS);
  };

  this.update = function() {
    //console.log('update');
  };

  this.render = function() {
    ctx.fillStyle = 'red';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.save();

    ctx.fillStyle = '#000000';
    ctx.font = '60px Helvetica';
    ctx.textAling = 'center';
    ctx.fillText('Loading', canvas.width / 2, canvas.height / 2);

    ctx.save();
  };

  var _finishLoading = function() {
    self.loading = false;

    console.log('koniec loading');

    GAME_DATA.symbols = GAME_DATA.images.slice(0, 6);

    if (self.afterLoadingCallback && typeof self.afterLoadingCallback === 'function')
      afterLoadingCallback();
  };

  var _fetchGameData = function(finishLoading) {
    var http = new XMLHttpRequest();

    http.open('GET', 'gameData.json', true);

    http.onreadystatechange = function() {
      if (http.readyState == 4 && http.status == "200")
        //setTimeout(function() {
        _processGameData(http.responseText);
        //}, 50);
    };

    http.send(null);
  };

  var _processGameData = function(fetchedData) {
    var data = JSON.parse(fetchedData);

    var __processImages = function(dataArr, callback) {
      var image,
        imagesRemaining = dataArr.length;

      for (var i = 0; i < dataArr.length; i++) {
        image = new Image();
        image.src = dataArr[i].path;

        image.onload = function() {
          --imagesRemaining;

          if (imagesRemaining <= 0)
            callback();
        };

        GAME_DATA.images.push({
          name: dataArr[i].name,
          image: image
        });
      }
    };

    __processImages(data.images, _finishLoading);
  };
}

function gameFlow() {
  var self = this;

  this.init = function() {
    self.changer = new Changer();
    self.changer.init();

    self.playButton = new playButton(self.changer);
    self.playButton.init();

    self.run();
  }

  this.run = function() {
    setInterval(function() {
      self.update(),
      self.render();
    }, GAME_SETTINGS.second / GAME_SETTINGS.FPS);
  };

  this.update = function() {
    self.playButton.update();
    self.changer.update();
  }

  this.render = function() {
    ctx.save();
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(GAME_DATA.images[8].image, 0, 0, canvas.width, canvas.height);

    self.playButton.render();
    self.changer.render();
  }

}


function playButton(changer) {
  var self = this;

  this.$changer = changer;

  this.$button = {
    x: 100,
    y: 100,
    width: 100,
    height: 100
  };

  this.init = function() {
    console.log('playbutton init');
  }

  this.update = function() {
    //console.log('x');
  }

  this.render = function() {
    ctx.drawImage((
      self.$changer.randomizing
        ? getImageByName(GAME_DATA.images, 'playButtonDisabled').image
        : getImageByName(GAME_DATA.images, 'playButtonEnabled').image
    ), self.$button.x, self.$button.y, self.$button.width, self.$button.height);
    ctx.save();
  }

  canvas.addEventListener('click', function(e) {
    if (isMouseCollision(self.$button, e.offsetX, e.offsetY) && !self.$changer.randomizing)
      self.$changer.startRandomizing();
  });

}

function Changer() {
  var self = this;

  this.randomizing = false;
  this.symbols = [];
  this.maxSymbols = 50;
  this.currentSymbol = null;
  this.currentSymbolIndex = 0;
  self.frames = 0;

  this.$element = {
    x: 300,
    y: 100,
    width: 300,
    height: 500
  };

  this.init = function() {
    console.log('changer init');
  }

  this.update = function() {
    self.frames += 1;

    if (self.randomizing)
      _changeCurrentSymbol(self.frames);
  }

  this.render = function() {
    ctx.strokeRect(self.$element.x, self.$element.y, self.$element.width, self.$element.height);

    if (self.randomizing)
      ctx.drawImage(self.currentSymbol.image, self.$element.x, self.$element.y, self.$element.width, self.$element.height)
  }

  this.startRandomizing = function() {
    self.randomizing = true;

    console.log('start');

    self.symbols = _createRandomSymbolsArray();

    self.currentSymbol = self.symbols[0];
  }

  var _finishRandomizing = function(symbol) {
    self.randomizing = false;
    console.log('koniec');
    console.log(symbol);
  };

  var _createRandomSymbolsArray = function() {
    var symbols = [];

    for (var i = 0; i < self.maxSymbols; i++) {
      var prevSymbol = symbols[i - 1],
        newSymbol = GAME_DATA.symbols[ Math.floor(Math.random() * (GAME_DATA.symbols.length)) ];

      if (prevSymbol)
        while (prevSymbol.name === newSymbol.name) {
          newSymbol = GAME_DATA.symbols[ Math.floor(Math.random() * (GAME_DATA.symbols.length)) ];
        }

      symbols.push(newSymbol);
    }

    return symbols;
  };

  var _changeCurrentSymbol = function(frames) {
    if (frames % 10 === 0) {
      self.currentSymbolIndex += 1;

      if (self.symbols[self.currentSymbolIndex])
        self.currentSymbol = self.symbols[self.currentSymbolIndex];
      else
        _finishRandomizing(self.currentSymbol);
    }
  };

}



var getImageByName = function(array, name) {
  for (var i = 0; i < array.length; i++) {
    if (array[i].name === name)
      return array[i];
  }
};

var isMouseCollision = function(element, mouseX, mouseY) {
  if ((mouseX >= element.x && mouseX <= element.x + element.width)
    && (mouseY >= element.y && mouseY <= element.y + element.height))
    return true;
};




window.onload = function() {
  var game = new Game();
  game.load();
};
