'use strict';

var canvas = document.getElementById('canvas'),
  ctx = canvas.getContext('2d');

var canvasDefaults = {
  width: 960,
  height: 530
};

var setCanvasDimensions = function() {
  var windowWidth = window.innerWidth,
    windowHeight = window.innerHeight;

  if (windowWidth >= 1000){
    canvas.width = 960;
    canvas.height = 530;
  } else {
    canvasDefaults.width = canvas.width = windowWidth * 0.9;
    canvasDefaults.height = canvas.height = windowWidth * 0.9 * 0.55;
  }
};

setCanvasDimensions();

var GAME_SETTINGS = {
  FPS: 60,
  FPSymbol: 10,
  second: 1000
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

  this.tableDefaults = {
    xArr:  _generateAxisTable(canvasDefaults.width),
    yArr: _generateAxisTable(canvasDefaults.height)
  }

  this.$table = {
    tableArr: _createTable(self.tableDefaults.xArr, self.tableDefaults.yArr),
    squaresToRender: [],
    canAnimate: true,
    update: function() {
      if (this.tableArr.length)
        for (var i = 0; i < 30; i++) {
          var randomIndex = [ Math.floor(Math.random() * (this.tableArr.length)) ];
          this.squaresToRender.push(this.tableArr[randomIndex]);

          this.tableArr.splice(randomIndex, 1);
        }
      else
        this.canAnimate = false;
    },
    draw: function() {
      for (var i = 0; i < this.squaresToRender.length; i++) {
        if (!this.squaresToRender[i]) return false;

        ctx.fillStyle = '#d27eab';
        ctx.fillRect(this.squaresToRender[i].x, this.squaresToRender[i].y, 10, 10);
        ctx.save();
      }
    }
  }

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
    self.$table.update();
  };

  this.render = function() {
    ctx.fillStyle = '#d78566';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.save();

    ctx.fillStyle = '#000000';
    ctx.font = '80px Helvetica';
    //ctx.textAling = 'center';
    ctx.fillText('Loading', calculateDimension(0.3520, canvasDefaults.width), calculateDimension(0.5350, canvasDefaults.height));
    ctx.save();

    self.$table.draw();
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
      //if (http.readyState == 4 && http.status == "200")
        //setTimeout(function() {
        //_processGameData(http.responseText);
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

  function _generateAxisTable(num) {
    var arr = [];

    while (num) {
      arr.push(num);
      num -= 10;
    }

    return arr;
  };

  function _createTable(xArr, yArr) {
    var table = [];

    for (var x = 0; x < xArr.length; x++) {
      for (var y = 0; y < yArr.length; y++) {
        table.push({
          x: x * 10,
          y: y * 10
        })
      }
    }

    return table;
  }
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
    x: calculateDimension(0.8479, canvasDefaults.width),
    y: calculateDimension(0.3924, canvasDefaults.height),
    width: calculateDimension(0.125, canvasDefaults.width),
    height: calculateDimension(0.2264, canvasDefaults.height)
  };

  this.init = function() {

  }

  this.update = function() {
    //console.log('x');
  }

  this.render = function() {
    ctx.drawImage((
      self.$changer.randomizing || !self.$changer.selectedData.isSymbolSelected
        ? getImageByName(GAME_DATA.images, 'playButtonDisabled').image
        : getImageByName(GAME_DATA.images, 'playButtonEnabled').image
    ), self.$button.x, self.$button.y, self.$button.width, self.$button.height);
    ctx.save();
  }

  canvas.addEventListener('click', function(e) {
    if (isMouseCollision(self.$button, e.offsetX, e.offsetY)
      && !self.$changer.randomizing
      && self.$changer.selectedData.isSymbolSelected)
      self.$changer.startRandomizing();
  });

}

function Changer() {
  var self = this;

  this.randomizing = false;
  this.symbols = [];
  this.maxSymbols = 30;
  this.currentSymbol = null;
  this.currentSymbolIndex = 0;
  this.frames = 0;

  this.timerData = {
    second: 5,
    defaults: '00:00',
    draw: function(second) {
      ctx.fillStyle = '#fef81e';
      ctx.font = calculateDimension(0.1132, canvasDefaults.height) + 'px Helvetica';
      ctx.textAling = 'center';
      ctx.fillText('00:0' + self.timerData.second, calculateDimension(0.3687, canvasDefaults.width), calculateDimension(0.1509, canvasDefaults.height));
      ctx.save();
    },
    drawDefault: function() {
      ctx.fillStyle = '#fef81e';
      ctx.font = calculateDimension(0.1132, canvasDefaults.height) + 'px Helvetica';
      ctx.textAling = 'center';
      ctx.fillText(self.timerData.defaults, calculateDimension(0.3687, canvasDefaults.width), calculateDimension(0.1509, canvasDefaults.height));
      ctx.save();
    }
  };

  this.$symbol = {
    x: calculateDimension(0.325, canvasDefaults.width),
    y: calculateDimension(0.3547, canvasDefaults.height),
    width: calculateDimension(0.2447, canvasDefaults.width),
    height: calculateDimension(0.2924, canvasDefaults.height)
  };

  this.$arrow = {
    x: calculateDimension(0.8927, canvasDefaults.width),
    y: calculateDimension(calculateRatio(140, canvasDefaults.height), canvasDefaults.height),
    minX: 140,
    maxX: 160,
    width: calculateDimension(0.0343, canvasDefaults.width),
    height: calculateDimension(0.0792, canvasDefaults.height),
    speed: 1,
    direction: 'down',
    update: function() {
      if (this.y == calculateDimension(calculateRatio(160, canvasDefaults.height), canvasDefaults.height)) this.direction = 'up';
      else if (this.y == calculateDimension(calculateRatio(140, canvasDefaults.height), canvasDefaults.height)) this.direction = 'down';

      if (this.direction == 'down') this.y += this.speed;
      else if (this.direction == 'up') this.y -= this.speed;
    },
    draw: function() {
      ctx.drawImage(
        getImageByName(GAME_DATA.images, 'arrow').image
      , this.x, this.y, this.width, this.height)
    }
  }

  this.selectedData = {
    symbol: null,
    isSymbolSelected: false
  };

  this.init = function() {

  }

  this.update = function() {
    if (self.randomizing)
      self.frames += 1,
      _changeCurrentSymbol(self.frames);

    if (self.selectedData.isSymbolSelected && !self.randomizing)
      self.$arrow.update();
  }

  this.render = function() {
    if (self.randomizing)
      ctx.drawImage(self.currentSymbol.image, self.$symbol.x, self.$symbol.y, self.$symbol.width, self.$symbol.height),
      self.timerData.draw();
    else
      self.timerData.drawDefault();

    if (self.selectedData.isSymbolSelected && !self.randomizing)
      self.$arrow.draw();
  }

  this.startRandomizing = function() {
    self.randomizing = true;

    self.symbols = _createRandomSymbolsArray();

    self.currentSymbol = self.symbols[0];
  }

  var $select = document.getElementById('select-symbol');
  $select.addEventListener('change', function(e) {
    self.selectedData.symbol = $select.value;
    self.selectedData.isSymbolSelected = true;
  });

  var _finishRandomizing = function(symbol) {
    self.randomizing = false;
    _resetDefaults();
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
    if (frames % 60 === 0) {
      self.timerData.second -= 1;
    }

    if (frames % GAME_SETTINGS.FPSymbol === 0) {
      self.currentSymbolIndex += 1;

      if (self.symbols[self.currentSymbolIndex])
        self.currentSymbol = self.symbols[self.currentSymbolIndex];
      else
        _finishRandomizing(self.currentSymbol);
    }
  };

  var _resetDefaults = function() {
    self.symbols = [];
    self.currentSymbol = null;
    self.currentSymbolIndex = 0;

    self.timerData.second = 5;

    self.selectedData = {
      symbol: null,
      isSymbolSelected: false
    };
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

var calculateDimension = function(ratio, elem) {
  return Math.floor(elem * ratio);
};

var calculateRatio = function(counter, denominator) {
  return counter / denominator;
};

window.onload = function() {
  var game = new Game();
  game.load();
};
