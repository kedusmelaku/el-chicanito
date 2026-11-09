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

Every unconfirmed item has a pink dashed tag on the page (TBD / Pendiente). To find them in the code, search `class="ph"`.

1. Holiday hours (Hours board). Also, the "Open now" pill does not know about holidays yet.
2. Cake sizes and servings
3. Other cake flavors and fillings
4. How many days ahead to order a cake
5. Deposit: yes or no, and how much
6. Which days tamales are made
7. Tamale lead time: can customers order the night before and pick up in the morning?
8. Tamales sold by the piece, the dozen, or both
9. Seasonal orders: Christmas tamales, Rosca de Reyes, pan de muerto (which ones, and when to order)
10. The other pan dulce, by name
11. Empanada fillings
12. Owner's story: who started El Chicanito, when, and why (owner writes or approves)

**Photos** (search `class="photo"`; each slot has the replacement `<img>` with its size and alt text in a comment):

| Photo | Aspect ratio | Suggested size |
|---|---|---|
| Storefront from Dundee Rd, with the sign visible | 3:2 | 1200×800 |
| Tray of conchas and pan dulce | 4:5 | 960×1200 |
| Decorated birthday cake | 4:5 | 960×1200 |
| Tamales, a few opened | 4:5 | 960×1200 |
| Flan and gelatinas | 4:5 | 960×1200 |
| Bolillos, plain and with cheese and jalapeño | 4:5 | 960×1200 |
| Empanadas | 4:5 | 960×1200 |

**Still unknown, not shown on the page:** logo, owner's name, founding year, prices (none on purpose).

**Before launch:**
- Remove the robots `noindex` meta tag and replace robots.txt.
- Add `url`, `geo` (latitude/longitude) and `image` to the JSON-LD.
- Remove the "Preview site" line in the footer and the `?look=` loader in the `<head>`.

## Spanish for a native speaker to check

I believe the Spanish is natural, but please have a native speaker confirm these lines:

- "Encargos" as the section title, and "Encargos de temporada"
- "díganos qué necesita y se lo tenemos listo para cuando pase" (usted register used throughout)
- "Pasteles de cumpleaños y sobre pedido" for custom cakes
- "qué quiere que diga" for the cake inscription
- "Anticipación" as the label for order lead time, and "Anticipo" for deposit
- "De puerco" vs "de cerdo" for pork tamales (puerco chosen as the more common Mexican usage)
- Times written "de 5 a.m. a 9 p.m."
- "Sitio de muestra. Contenido pendiente de aprobación." in the footer
