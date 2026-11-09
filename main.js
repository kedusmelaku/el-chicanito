/* El Chicanito Bakery: language toggle, open-now status, call dock. */
(function () {
  "use strict";

  var doc = document.documentElement;

  var titles = {
    en: "El Chicanito Bakery, Mexican bakery in Palatine, IL",
    es: "El Chicanito Bakery, panadería mexicana en Palatine, IL"
  };
  var descriptions = {
    en: "El Chicanito Bakery, 1164 E Dundee Rd, Palatine, IL. Pan dulce, bolillos, tamales, tres leches cakes and flan. Open every day, 5 AM to 9 PM. Call (847) 221-5447.",
    es: "El Chicanito Bakery, 1164 E Dundee Rd, Palatine, IL. Pan dulce, bolillos, tamales, pasteles de tres leches y flan. Abierto todos los días, de 5 a.m. a 9 p.m. Llame al (847) 221-5447."
  };

  /* ---------- Language ---------- */
  function setLang(lang, save) {
    if (lang !== "es") lang = "en";
    doc.lang = lang;
    document.title = titles[lang];
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", descriptions[lang]);

    var buttons = document.querySelectorAll("[data-set-lang]");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].setAttribute("aria-pressed", String(buttons[i].getAttribute("data-set-lang") === lang));
    }
    if (save) {
      try { localStorage.setItem("lang", lang); } catch (e) { /* storage blocked: choice lasts this visit */ }
    }
  }

  document.addEventListener("click", function (event) {
    var btn = event.target.closest("[data-set-lang]");
    if (!btn) return;
    setLang(btn.getAttribute("data-set-lang"), true);
  });

  setLang(doc.lang, false);

  /* ---------- Open now (bakery time: America/Chicago, every day 5:00 to 21:00) ---------- */
  var OPEN = 5, CLOSE = 21;
  var statusEl = document.querySelector("[data-status]");
  var statusEn = document.querySelector("[data-status-en]");
  var statusEs = document.querySelector("[data-status-es]");

  function chicagoHour() {
    var parts = new Intl.DateTimeFormat("en-US", {
      timeZone: "America/Chicago", hour: "numeric", minute: "numeric", hourCycle: "h23"
    }).formatToParts(new Date());
    var h = 0, m = 0;
    for (var i = 0; i < parts.length; i++) {
      if (parts[i].type === "hour") h = parseInt(parts[i].value, 10) % 24;
      if (parts[i].type === "minute") m = parseInt(parts[i].value, 10);
    }
    return h + m / 60;
  }

  function updateStatus() {
    if (!statusEl) return;
    var now;
    try { now = chicagoHour(); } catch (e) { return; } /* no time zone support: keep it hidden */
    var open = now >= OPEN && now < CLOSE;
    statusEl.classList.toggle("is-closed", !open);
    statusEn.textContent = open ? "Open now, until 9 PM" : "Closed now, opens at 5 AM";
    statusEs.textContent = open ? "Abierto ahora, hasta las 9 p.m." : "Cerrado ahora, abre a las 5 a.m.";
    statusEl.hidden = false;
  }

  updateStatus();
  setInterval(updateStatus, 60 * 1000);

  /* ---------- Dock: tuck it away while the hero's own buttons are on screen ---------- */
  var dock = document.querySelector("[data-dock]");
  var heroActions = document.querySelector("[data-hero-actions]");
  if (dock && heroActions && "IntersectionObserver" in window) {
    new IntersectionObserver(function (entries) {
      dock.classList.toggle("is-tucked", entries[0].isIntersecting);
    }).observe(heroActions);
  }
})();
