var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var width = innerWidth;
var height = innerHeight;
canvas.width = width;
canvas.height = height;

function getRoundRandFunc(max, min) {
  if (min) {
    return function() {
      return Math.round((Math.random() * (max - min)) + min);
    }
  } else {
    return function() {
      return Math.round(Math.random() * max);
    };
  }
}

var getRandX = getRoundRandFunc(width);
var getRandY = getRoundRandFunc(height);

var flags = {
  norway: {
    ratio: {
      width: 22,
      height: 16
    },
    unit: 5,
    red: '#ed2939',
    blue: '#002664',
    white: '#ffffff'
  }
};

function drawNorway() {
  var x = getRandX();
  var y = getRandY();

  var fUnit = 5;
  var fWidth = 22;
  var fHeight = 16;
  var fRed = '#ed2939';
  var fBlue = '#002664';
  var fWhite = '#ffffff';

  ctx.fillStyle = fRed;
  ctx.fillRect(x, y, fWidth * fUnit, fHeight * fUnit);

  ctx.fillStyle = fWhite;
  ctx.fillRect(x, y + fUnit * 6, fWidth * fUnit, fUnit * 4);
  ctx.fillRect(x + fUnit * 6, y, fUnit * 4, fHeight * fUnit);

  ctx.fillStyle = fBlue;
  ctx.fillRect(x, y + fUnit * 7, fWidth * fUnit, fUnit * 2);
  ctx.fillRect(x + fUnit * 7, y, fUnit * 2, fHeight * fUnit);
}

function drawSweden() {
  var x = getRandX();
  var y = getRandY();

  var fUnit = 8;
  var fWidth = 16;
  var fHeight = 10;
  var fBlue = '#005293';
  var fYellow = '#fecB00';

  ctx.fillStyle = fBlue;
  ctx.fillRect(x, y, fWidth * fUnit, fHeight * fUnit);

  ctx.fillStyle = fYellow;
  ctx.fillRect(x, y + fUnit * 4, fWidth * fUnit, fUnit * 2);
  ctx.fillRect(x + fUnit * 5, y, fUnit * 2, fHeight * fUnit);
}

drawNorway();
var interval = setInterval(drawNorway, 1000);

document.body.addEventListener('click', function(evt) {
  clearInterval(interval);
  ctx.clearRect(0, 0, width, height);
  drawSweden();
  inerval = setInterval(drawSweden, 1000);
});
