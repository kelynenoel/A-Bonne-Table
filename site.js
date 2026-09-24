// Play the kitchen clips only while they're on screen.
// If someone prefers reduced motion, show the still image and give them play controls instead.
(function () {
  var videos = document.querySelectorAll('video.loop');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduce || !('IntersectionObserver' in window)) {
    videos.forEach(function (v) { v.controls = true; });
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      var v = e.target;
      if (e.isIntersecting) {
        if (v.preload === 'none') v.preload = 'auto';
        var p = v.play();
        if (p && p.catch) p.catch(function () { v.controls = true; });
      } else {
        v.pause();
      }
    });
  }, { threshold: 0.35 });

  videos.forEach(function (v) { io.observe(v); });
})();

var yr = document.getElementById('yr');
if (yr) yr.textContent = new Date().getFullYear();

// Inquiry form: send people to the thank-you page after submitting,
// and preselect the service when they click "Ask about ..." in Services.
(function () {
  var next = document.getElementById('next-url');
  if (next) next.value = new URL('thanks.html', window.location.href).href;

  var select = document.getElementById('f-service');
  document.querySelectorAll('[data-service]').forEach(function (link) {
    link.addEventListener('click', function () {
      if (select) select.value = link.getAttribute('data-service');
    });
  });
})();
