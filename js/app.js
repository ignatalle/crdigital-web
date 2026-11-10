// Selector "¿Dónde está hoy tu negocio?" y calculadora de horas.
(function () {
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role="tab"].opt'));
  function elegir(tab) {
    tabs.forEach(function (t) {
      var sel = t === tab;
      t.setAttribute('aria-selected', sel ? 'true' : 'false');
      t.tabIndex = sel ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !sel;
    });
  }
  tabs.forEach(function (t, i) {
    t.tabIndex = i === 0 ? 0 : -1;
    t.addEventListener('click', function () { elegir(t); });
    t.addEventListener('keydown', function (e) {
      var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!d) return;
      e.preventDefault();
      var n = tabs[(i + d + tabs.length) % tabs.length];
      n.focus(); elegir(n);
    });
  });

  var horas = document.getElementById('horas');
  var personas = document.getElementById('personas');
  if (!horas || !personas) return;
  var fmt = new Intl.NumberFormat('es-AR');
  function calcular() {
    var h = Number(horas.value), p = Number(personas.value);
    var anual = h * p * 48;
    var jornadas = Math.round(anual / 8);
    document.getElementById('horas-v').textContent = h;
    document.getElementById('personas-v').textContent = p;
    document.getElementById('res-horas').textContent = fmt.format(anual) + ' h';
    document.getElementById('res-texto').textContent =
      'por año, unas ' + fmt.format(jornadas) + ' jornadas de 8 horas.';
  }
  horas.addEventListener('input', calcular);
  personas.addEventListener('input', calcular);
  calcular();
})();
