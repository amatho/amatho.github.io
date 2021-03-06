var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var width = window.innerWidth;
var height = window.innerHeight;
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
var getRandRadius = getRoundRandFunc(width / 3, width / 6);
var getRandDeg = getRoundRandFunc(360);

function animateCircle(startX, startY, circles = 1) {
  var circleData = {};

  for (var i = 0; i < circles; i++) {
    circleData[i] = {};

    circleData[i].currentX = startX;
    circleData[i].currentY = startY;
    circleData[i].currentRadius = getRandRadius();
    circleData[i].color = 'hsla(' + getRandDeg() + ', 100%, 50%, 0.7)';

    ctx.fillStyle = circleData[i].color;
    ctx.beginPath();
    ctx.arc(circleData[i].currentX, circleData[i].currentY, circleData[i].currentRadius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();

    circleData[i].targetX = getRandX();
    circleData[i].targetY = getRandY();
    circleData[i].targetRadius = getRandRadius();

    console.log(i, 'Targets:', circleData[i].targetX, circleData[i].targetY, 'Radius:', circleData[i].targetRadius);
  }

  window.setInterval(function() {
    ctx.clearRect(0, 0, width, height);

    for (i = 0; i < circles; i++) {
      ctx.fillStyle = circleData[i].color;

      if ((circleData[i].targetX - circleData[i].currentX) > 0) {
        circleData[i].currentX += 1;
      } else if ((circleData[i].targetX - circleData[i].currentX) < 0) {
        circleData[i].currentX -= 1;
      }

      if ((circleData[i].targetY - circleData[i].currentY) > 0) {
        circleData[i].currentY += 1;
      } else if ((circleData[i].targetY - circleData[i].currentY) < 0) {
        circleData[i].currentY -= 1;
      }

      if ((circleData[i].targetRadius - circleData[i].currentRadius) > 0) {
        circleData[i].currentRadius += 1;
      } else if ((circleData[i].targetRadius - circleData[i].currentRadius) < 0) {
        circleData[i].currentRadius -= 1;
      }

      if (circleData[i].currentX === circleData[i].targetX && circleData[i].currentY === circleData[i].targetY && circleData[i].currentRadius === circleData[i].targetRadius) {
        circleData[i].targetX = getRandX();
        circleData[i].targetY = getRandY();
        circleData[i].targetRadius = getRandRadius();
        console.log(i, 'New targets:', circleData[i].targetX, circleData[i].targetY, circleData[i].targetRadius);
        circleData[i].color = 'hsla(' + getRandDeg() + ', 100%, 50%, 0.7)';
      }

      ctx.beginPath();
      ctx.arc(circleData[i].currentX, circleData[i].currentY, circleData[i].currentRadius, 0, 2 * Math.PI);
      ctx.fill();
      ctx.closePath();
    }
  }, 10);
}

animateCircle(getRandX(), getRandY(), 3);
