var text = null;
var spot = null;
var box = null;
var boxProperty = "";

///window.onload = init;
init();

function init() {
  text = document.getElementById("tsb-text");
  spot = document.getElementById("tsb-spot");
  box = document.getElementById("tsb-box");

  if (typeof box.style.webkitBoxShadow == "string") {
    boxProperty = "webkitBoxShadow";
  } else if (typeof box.style.MozBoxShadow == "string") {
    boxProperty = "MozBoxShadow";
  } else if (typeof box.style.boxShadow == "string") {
    boxProperty = "boxShadow";
  }

  if (text && spot && box) {
    document.getElementById("text-shadow-box").onmousemove = onMouseMove;

    document.getElementById("text-shadow-box").ontouchmove = function(e) {
      e.preventDefault();
      e.stopPropagation();
      onMouseMove({
        clientX: e.touches[0].clientX,
        clientY: e.touches[0].clientY
      });
    };
  }

  onMouseMove({ clientX: 300, clientY: 200 });
}

function onMouseMove(e) {
  var xm = e.clientX - 300;
  var ym = e.clientY - 175;
  var d = Math.round(Math.sqrt(xm * xm + ym * ym) / 5);
  text.style.textShadow = -xm + "px " + -ym + "px " + (d + 10) + "px black";

  if (boxProperty) {
    box.style[boxProperty] = "0 " + -ym + "px " + (d + 30) + "px black";
  }

  xm = e.clientX - 600;
  ym = e.clientY - 450;
  spot.style.backgroundPosition = xm + "px " + ym + "px";
}
