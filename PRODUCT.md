# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Plain static HTML, CSS and minimal vanilla JS. No framework, no build step. Fonts self-hosted from `fonts/`. (Confirmed by the user in the brief.)

## Users

Neighborhood regulars of a Mexican panadería in Palatine, IL, many Spanish-speaking, plus English speakers. Almost all on phones, often deciding on the spot: call to place an order, check whether the bakery is open, or get directions. A second audience for this spec version is the owner, who will see it on the builder's phone before a pitch.

## Product Purpose

A spec website for El Chicanito Bakery, which has no website today. Page goals, in order (revised by the user after the first build): 1) tap to call, always within reach on mobile; 2) hours and directions, walk-ins welcome every day 5 AM to 9 PM; 3) what they sell by category, with photos high on the page; 4) a smaller Big orders section for whole cakes, whole flan and tamales by the dozen, whose ordering wording is a placeholder (unconfirmed whether ordering ahead is required or recommended, how much notice, which tamale days).

## Positioning

The one bakery at 1164 E Dundee Rd, Palatine, IL 60074 (near Dundee and Rand Rd), phone (847) 221-5447, open every day 5:00 AM to 9:00 PM. Some directories wrongly link to La Chicanita in Aurora, so name, address and phone must be unmistakable everywhere.

## Operating Context

Customers pre-order tamales (one ordered the night before and picked up fresh in the morning) and order whole cakes and flan for birthdays and parties. Ordering happens by phone; the site has no online ordering.

## Capabilities and Constraints

- What they sell (menu categories, no prices): pan dulce (conchas and assorted sweet bread); bolillos, including bolillos with cheese and jalapeño; tamales (pork, rajas con queso, sweet pineapple); tres leches cakes (chocolate and vanilla), custom and birthday cakes; tres leches gelatinas; flan (slices and whole flan for parties); empanadas; Jarritos and other drinks.
- Fully bilingual, English default, obvious language toggle. Spanish written naturally, with uncertain phrasing flagged for a native speaker.
- Unlisted spec site: `noindex, nofollow` meta and a robots.txt that disallows everything.
- LocalBusiness/Bakery JSON-LD with the verified details, ready for launch.
- Undecided (must stay visible placeholders): prices, cake sizes and flavors, order lead time, deposits, tamale days, seasonal items (Christmas tamales, Rosca de Reyes, pan de muerto), owner's name, story, founding year, logo, photos, holiday hours.

## Brand Commitments

- No logo exists yet; the name set in type is the identity for now.
- No em dashes in site copy.
- Avoid clichés: sombreros, cacti, papel picado overload. Avoid generic AI patterns: purple or blue gradients, "Welcome to our bakery" filler, fake testimonials, fake stats, emoji as decoration, stock hero images.

## Evidence on Hand

Verified business facts above (Google listing, Nov 2026). Menu categories come from customer reviews. No photos yet (the user will supply them), no testimonials, no prices. Never copy Google or Yelp reviews. Never make allergen, ingredient or "fresh daily" claims unless confirmed.

## Product Principles

1. Calling is the main action and is always within thumb reach.
2. Name, address and phone are unmistakable, so nobody ends up at the wrong bakery.
3. What they sell, shown with photos, comes before ordering details; big orders are secondary.
4. Nothing unconfirmed passes as fact: every unknown is a visible placeholder the owner approves.
5. Spanish and English are equals, not a translation bolted on.

## Accessibility & Inclusion

Semantic HTML, alt text slots for all photos, strong contrast for outdoor phone use, a keyboard-usable language toggle, and correct `lang` attributes for both languages. Readers of all ages, so body type stays large and legible.
