(function (e, t) {
  var s = [];

  function c() {
    return "rgb(" + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + ")";
  }

  function i(css) {
    var style = t.createElement("style");
    style.type = "text/css";
    style.appendChild(t.createTextNode(css));
    t.head.appendChild(style);
  }

  function o(evt) {
    var heart = t.createElement("div");
    heart.className = "heart";
    s.push({
      el: heart,
      x: evt.clientX - 5,
      y: evt.clientY - 5,
      scale: 1,
      alpha: 1,
      color: c()
    });
    t.body.appendChild(heart);
  }

  function n() {
    e.onclick = function (evt) { o(evt); };
  }

  function r() {
    for (var j = 0; j < s.length; j++) {
      if (s[j].alpha <= 0) {
        t.body.removeChild(s[j].el);
        s.splice(j, 1);
        continue;
      }
      s[j].y--;
      s[j].scale += 0.004;
      s[j].alpha -= 0.013;
      s[j].el.style.cssText =
        "left:" + s[j].x + "px; top:" + s[j].y + "px; opacity:" + s[j].alpha +
        "; transform: scale(" + s[j].scale + ") rotate(45deg); background:" + s[j].color +
        "; position: fixed; width:10px; height:10px; z-index:9999;";
    }
    requestAnimationFrame(r);
  }

  e.requestAnimationFrame = e.requestAnimationFrame ||
    function (cb) { setTimeout(cb, 1000 / 60); };

  i(".heart{position:fixed;width:10px;height:10px;transform:rotate(45deg);} .heart:before,.heart:after{content:'';width:inherit;height:inherit;background:inherit;border-radius:50%;position:fixed;} .heart:before{left:-5px;} .heart:after{top:-5px;}");
  n();
  r();
})(window, document);
