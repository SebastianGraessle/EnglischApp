# English Adventure – Version 3.1

Vokabel-App für Englisch. Läuft im Browser (GitHub Pages), ohne Konto.
**Standard: Der Lernstand wird nur auf dem Gerät gespeichert.**
Synchronisierung zwischen Geräten ist eine Sonderfunktion (siehe `sync-sonderfunktion/ANLEITUNG.md`).

## Dateien
| Datei | Inhalt |
|---|---|
| `index.html` | die App |
| `vokabeln.js` | alle Vokabeln aller Bücher und Units, mit Eselsbrücken – hier ergänzen |
| `geschichten.js` | Geschichten pro Unit (optional) |
| `bilder/` | lustige Merkbilder (Beispiele: downstairs, parcel, weird, doorbell, useful) |
| `manifest.webmanifest`, `sw.js`, `*.png` | Home-Bildschirm-App und Offline-Betrieb |

## Veröffentlichen
1. Alle Dateien und den Ordner `bilder` ins Repository hochladen.
2. Settings → Pages → Branch `main`, Ordner `/ (root)`.
3. iPad/iPhone: Seite in Safari öffnen → **Teilen → Zum Home-Bildschirm**
   (sonst löscht Safari den Lernstand nach 7 Tagen ohne Nutzung).

## Jede Woche
Lehrerin sagt „Buch 1, Unit 13“ → **Heute → Ändern** → Unit und Testtag wählen.

## Vokabeln, Eselsbrücken, Bilder
```js
{ buch: "Buch 1", kapitel: "Unit 13", en: "dog", de: "der Hund", emoji: "🐶",
  merk: "🔊 dog – „Dogge“ ist ein großer Hund",
  bild: "bilder/buch1-unit13/dog.jpg" },
```
- Deutsche Nomen **mit Artikel**. Mehrere Bedeutungen mit Komma trennen.
- Eselsbrücken-Arten: 🧩 Zerlegen · 🎬 Verrücktes Bild · 🔊 Klingt wie · ↔ Gegenteil · ✍️ Falle · 💬 Mein Satz
- Lustige Bilder nur für 5–8 schwierige Wörter pro Unit – sonst verlieren sie ihre Wirkung.
- Bilder als JPG, ca. 640 × 640 px, im Ordner `bilder/` ablegen.

## Sichern
Fortschritt → Eltern (Rechenaufgabe) → **Exportieren / Importieren**.
Der Export enthält nie Zugangsdaten der Synchronisierung.
