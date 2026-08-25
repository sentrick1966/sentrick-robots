/* Sentrick Robots — small site helpers */
(function () {
  // Stamp the current year into any [data-year] element.
  var y = String(new Date().getFullYear());
  document.querySelectorAll('[data-year]').forEach(function (el) { el.textContent = y; });
  // Highlight the current page in the nav.
  var path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navlinks a').forEach(function (a) {
    var href = (a.getAttribute('href') || '').split('/').pop();
    if (href && href === path) a.classList.add('active');
  });
})();
