# El Chicanito Bakery: spec site

An unlisted one-page spec site for El Chicanito Bakery (1164 E Dundee Rd, Palatine, IL 60074, (847) 221-5447). Plain HTML, CSS and a little vanilla JS: no framework and no build step.

- `index.html`: the page (English and Spanish side by side, switched with `lang`)
- `styles.css`: the "Rótulo" hand-painted sign look
- `main.js`: language toggle, live open/closed status (Chicago time), and the call bar
- `robots.txt` + `<meta name="robots" content="noindex, nofollow">`: keep it out of search
- `fonts/`: self-hosted Anybody and Atkinson Hyperlegible Next (both SIL Open Font License)
- `mockups/charola.css`: the direction C look, for comparison only

## Preview

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000/`. Useful links:

- `?lang=es` opens in Spanish
- `?look=charola` shows the direction C mockup

## Placeholders to fill (owner to confirm)

Every unconfirmed item is marked on the page with a small mustard "TBD" (Spanish: "Pendiente") label and a dotted mustard underline. To find them in the code, search `class="ph"`.

1. Holiday hours (Hours board). Also, the "Open now" pill does not know about holidays yet.
2. The whole Big orders opening line: "Call ahead for whole cakes, whole flan, and tamales by the dozen" (placeholder wording)
3. Order ahead: required or just recommended?
4. How much notice for big orders
5. Which days tamales are available
6. Cake sizes, other flavors, deposit
7. Seasonal items: Christmas tamales, Rosca de Reyes, pan de muerto
8. The other pan dulce, by name
9. Empanada fillings
10. Owner's story: who started El Chicanito, when, and why (owner writes or approves)

**Photos** (search `class="photo"`; each slot has the replacement `<img>` with its size and alt text in a comment):

| Photo | Aspect ratio | Suggested size |
|---|---|---|
| Tray of conchas and pan dulce (the large menu photo) | 3:2 | 1200×800 |
| Decorated tres leches cake | 1:1 | 1080×1080 |
| Tamales, a few opened | 1:1 | 1080×1080 |
| Bolillos | 1:1 | 1080×1080 |
| Flan and gelatinas | 1:1 | 1080×1080 |
| Empanadas | 1:1 | 1080×1080 |
| The drinks cooler | 1:1 | 1080×1080 |
| Storefront from Dundee Rd, with the sign visible (bottom of page) | 3:2 | 1200×800 |

**Still unknown, not shown on the page:** logo, owner's name, founding year, prices (none on purpose).

**Before launch:**
- Remove the robots `noindex` meta tag and replace robots.txt.
- Add `url`, `geo` (latitude/longitude) and `image` to the JSON-LD.
- Remove the "Preview site" line in the footer and the `?look=` loader in the `<head>`.

## Spanish for a native speaker to check

I believe the Spanish is natural, but please have a native speaker confirm these lines:

- "Pedidos grandes" as the Big orders title, and "Llame con anticipación para pasteles enteros, flan entero y tamales por docena"
- "Pase cuando guste, todos los días" for "Walk-ins welcome every day"
- "Cuando llame, díganos qué quiere, cuántos y el día y la hora en que pasa a recoger" (usted register used throughout)
- "Pasteles de cumpleaños y sobre pedido" for custom cakes
- "Encargar antes", "Anticipación" (notice) and "Anticipo" (deposit) as labels
- "De puerco" vs "de cerdo" for pork tamales (puerco chosen as the more common Mexican usage)
- Times written "de 5 a.m. a 9 p.m."
- "Sitio de muestra. Contenido pendiente de aprobación." in the footer
