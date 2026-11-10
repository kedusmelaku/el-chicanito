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

    /* Image alt text: English lives in alt, Spanish in data-alt-es. */
    var imgs = document.querySelectorAll("img[data-alt-es]");
    for (var k = 0; k < imgs.length; k++) {
      if (!imgs[k].hasAttribute("data-alt-en")) imgs[k].setAttribute("data-alt-en", imgs[k].alt);
      imgs[k].alt = imgs[k].getAttribute(lang === "es" ? "data-alt-es" : "data-alt-en");
    }

    var buttons = document.querySelectorAll("[data-set-lang]");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].setAttribute("aria-pressed", String(buttons[i].getAttribute("data-set-lang") === lang));
    }
    if (save) {
      try { localStorage.setItem("lang", lang); } catch (e) { /* storage blocked: choice lasts this visit */ }
      try {
        /* Keep the address bar shareable: ?lang=es opens in Spanish. */
        var url = new URL(location.href);
        url.searchParams.set("lang", lang);
        history.replaceState(null, "", url);
      } catch (e) { /* older browser: fine without it */ }
    }
  }

  document.addEventListener("click", function (event) {
    var btn = event.target.closest("[data-set-lang]");
    if (!btn) return;
    setLang(btn.getAttribute("data-set-lang"), true);
  });

  setLang(doc.lang, false);

  /* ---------- Open now: hours come from the JSON-LD, in bakery time (America/Chicago) ---------- */
  var OPEN = 5, CLOSE = 21;
  try {
    var spec = JSON.parse(document.getElementById("business").textContent).openingHoursSpecification[0];
    OPEN = parseInt(spec.opens, 10);
    CLOSE = parseInt(spec.closes, 10);
  } catch (e) { /* keep the defaults above */ }

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
    statusEn.textContent = open ? "Open now, until 9\u00a0PM" : "Closed now, opens at 5\u00a0AM";
    statusEs.textContent = open ? "Abierto ahora, hasta las 9\u00a0p.m." : "Cerrado ahora, abre a las 5\u00a0a.m.";
    statusEl.hidden = false;
  }

  updateStatus();
  setInterval(updateStatus, 60 * 1000);

  /* ---------- Dock: tuck it away (and out of the tab order) while the hero's buttons show ---------- */
  var dock = document.querySelector("[data-dock]");
  var heroActions = document.querySelector("[data-hero-actions]");
  if (dock && heroActions && "IntersectionObserver" in window) {
    new IntersectionObserver(function (entries) {
      var tucked = entries[0].isIntersecting;
      dock.classList.toggle("is-tucked", tucked);
      dock.inert = tucked;
    }).observe(heroActions);
  }
})();
