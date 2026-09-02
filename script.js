(function () {
  var logo = document.getElementById('logo');
  if (!logo) return;

  function start() {
    // rAF so the initial scale(0) is painted before the animation begins
    requestAnimationFrame(function () {
      logo.classList.add('animate');
    });
  }

  if (logo.complete) {
    start();
  } else {
    logo.addEventListener('load', start, { once: true });
    logo.addEventListener('error', start, { once: true });
  }
})();
