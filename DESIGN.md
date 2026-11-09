# Design: Rótulo (hand-painted storefront sign)

The page reads as the bakery's own painted signage, seen on a phone.

## Color tokens (`styles.css :root`)
| Token | Value | Role |
|---|---|---|
| `--wall` | #F3E9D6 | Painted wall ground, with a faint grain |
| `--red` | #C8361F | Sign field (hero and footer) |
| `--red-ink` | #A82B17 | Red text on light grounds (5.8:1 on the wall) |
| `--shade` | #6E1B0D | Drop shade under the sign letters |
| `--marigold` | #E8A317 | Order field, call buttons |
| `--sign-yellow` | #FFD34D | Yellow lettering on teal/ink; on red only at large sizes (3.7:1) |
| `--teal` | #1F5E5B | Hours board |
| `--ink` | #1E1813 | Text, top bar, menu board, call dock |
| `--cream` | #FFF4E2 | Text on red/teal/ink (4.8:1 on red) |
| `--ph-*` | ink-soft text, marigold underline, #855A00 label | Placeholders (cream/sign-yellow on the teal board) |

## Type
- Display: **Anybody** (variable, wdth 50–150, wght 100–900). The name uses wdth 64 / 850 with an ink outline and a 6-step drop shade; section titles use wdth 50–70 / 900, uppercase; small labels use wide widths (120–150%) with letter-spacing.
- Body: **Atkinson Hyperlegible Next** at 18px / 1.5.

## Components
- **Painted field:** a full-bleed section in one color (red, teal board, marigold, ink board).
- **Pinstripe:** `outline` 2px with a negative offset inside boards.
- **Slip:** paper card with a dashed top edge (torn from the pad) and a soft shadow.
- **Pad:** numbered order checklist; ruled lines follow the items.
- **Buttons:** 56px tall, 3px ink border, marigold fill (call) or cream outline on red.
- **Placeholder** `.ph`: dark brown bold text, 2px dotted mustard underline, small-caps mustard "TBD" / "Pendiente" label.
- **Photo slot** `.photo`: aspect-ratio frame with corner crop marks.
- **Dock:** fixed call bar on phones. It is hidden while the hero buttons are visible, and hidden entirely on desktop, where the phone number sits in the top bar.

## Rules
- Focus ring: 3px, color set per field through `--focus`.
- One motion only: the sign's drop shade paints in on load (skipped under reduced motion).
- Bilingual: every string is an EN/ES pair of `lang` spans; CSS hides the inactive language.
- No em dashes, no prices, no unconfirmed claims.
