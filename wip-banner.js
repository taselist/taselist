(function () {
  var banner = document.querySelector('.wip-banner');
  if (!banner) return;

  var unit = 'WIP     ';
  // Fill at least 2x the screen width with text
  var count = Math.ceil((window.innerWidth * 2) / 60) + 10;
  var chunk = '';
  for (var i = 0; i < count; i++) chunk += unit;

  var track = document.createElement('span');
  track.className = 'wip-half';
  track.textContent = chunk;
  banner.innerHTML = '';

  var wrap = document.createElement('div');
  wrap.className = 'wip-track';
  wrap.appendChild(track);
  var clone = track.cloneNode(true);
  wrap.appendChild(clone);
  banner.appendChild(wrap);

  // Measure one half's width and set the animation distance
  var w = track.offsetWidth;
  wrap.style.setProperty('--scroll-w', '-' + w + 'px');
})();
