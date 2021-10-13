var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var amountOfFallingArrays = 50;
var squareDimension = 16;
var fallingArrays = [];

function FallingArray(x, y) {
  this.x = x;
  this.y = y;
  this.letters = [];
  var amount = Math.floor(Math.random() * 30) + 5;
  for (var a = 0; a < amount; a++) {
    var charNum = Math.floor(Math.random() * 50) + 35;
    this.letters.push(String.fromCharCode(charNum));
  }
}

for (var a = 0; a < amountOfFallingArrays; a++) {
  var randomY = Math.floor(Math.random() * 10) + squareDimension;
  fallingArrays.push(new FallingArray(a * squareDimension, randomY));
}

for (var a = 0; a < 40; a++) {
  var randomX = Math.floor(Math.random() * 40) * squareDimension;
  var randomY = Math.floor(Math.random() * 10) * squareDimension * -1;
  fallingArrays.push(new FallingArray(randomX, randomY));
}

function cascadeData() {
  var w = document.getElementById("myCanvas").width;
  var h = document.getElementById("myCanvas").height;
  t = w / 400;
  ctx.clearRect(0, 0, w, h);
  for (var a = 0; a < fallingArrays.length; a++) {
    for (var b = 0; b < fallingArrays[a].letters.length; b++) {
      var color = "rgb(0,255,0)";
      if (b == 0) {
        ctx.fillStyle = "rgb(51,255,51)";
      } else {
        ctx.fillStyle = "rgb(0,128,0)";
      }
      //if(w<800)
      //ctx.font = "8px Courier";
      //} else {
      ctx.font = t + "em Courier";
      //}
      ctx.fillText(
        fallingArrays[a].letters[b],
        fallingArrays[a].x,
        fallingArrays[a].y + -1 * b * squareDimension
      );
    }
    fallingArrays[a].y += squareDimension;
    if (
      fallingArrays[a].y - fallingArrays[a].letters.length * squareDimension >
      h
    ) {
      var randomX = Math.floor(Math.random() * 40) * squareDimension;
      var randomY = Math.floor(Math.random() * 10) * squareDimension * -1;
      fallingArrays[a] = new FallingArray(randomX, randomY);
    }
  }
}

setInterval(cascadeData, 100);

var movietext = [
  "PROJECT MANAGEMENT",
  "MINING ENGINEERING",
  "CONSULTING",
  "TIME AND MOTION STUDIES",
  "'BIG DATA' ANALYTICS",
  "ANCILLARY UTILISATION",
  "DRILL & BLAST - QA/QC",
  "DIGITISED SOLUTIONS",
  "WEBSITE & APP DEVELOPMENT",
];

var textpos = 0;
function cascadeText() {
  var str = movietext[textpos];
  document.getElementById("movietext").innerHTML = str;
  if (textpos == 8) {
    textpos = 0;
  } else {
    textpos = textpos + 1;
  }
}
setTimeout(setInterval(cascadeText, 1000), 2000);

var colortext = ["#99FF99", "#33FF33", "#00CC00", "#009900"];
var colorpos = 0;
function colorText() {
  var w = document.getElementById("myCanvas").width;
  var s = w / 50;
  var hex = colortext[colorpos];
  document.getElementById("movietext").style.color = hex;
  document.getElementById("movietext").style.fontSize = "2vm";
  document.getElementById("movietext").style.letterSpacing = s;
  if (colorpos == 3) {
    colorpos = 0;
  } else {
    colorpos = colorpos + 1;
  }
}
setInterval(colorText, 100);

function showMenu() {
  var m = (document.getElementById("menu").style.display = "block");
}

function hideMenu() {
  var m = (document.getElementById("menu").style.display = "none");
}

function openPage(id) {
  if (id == "haulsmart") {
    window.open("https://www.haulsmart.com");
  } else {
    alert("Stay Tuned");
  }
}

function downloadResume() {}
