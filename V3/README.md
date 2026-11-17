# English Adventure – Version 3

Vokabel-App für Englisch. Läuft im Browser (GitHub Pages), ohne Konto und ohne Cloud.
Der Lernstand wird **auf dem Gerät** gespeichert.

## Dateien
| Datei | Inhalt |
|---|---|
| `index.html` | die App |
| `vokabeln.js` | alle Vokabeln aller Bücher und Units – hier ergänzen |
| `geschichten.js` | Geschichten pro Unit (optional) |
| `manifest.webmanifest`, `sw.js`, `*.png` | Home-Bildschirm-App und Offline-Betrieb |

## Veröffentlichen
1. Alle Dateien ins Repository hochladen (gleicher Ordner).
2. Settings → Pages → Branch `main`, Ordner `/ (root)`.
3. Auf iPad/iPhone die Seite in Safari öffnen → **Teilen → Zum Home-Bildschirm**.
   Wichtig: Nur so löscht Safari den Lernstand nicht nach 7 Tagen ohne Nutzung.

## Jede Woche
Die Lehrerin sagt z. B. „Buch 1, Unit 13“ → in der App **Heute → Ändern** → Unit und Testtag wählen.
Die App plant die Woche bis zum Test: Neu → Abrufen → Generalprobe → Testtag.

## Vokabeln eintragen
```js
{ buch: "Buch 1", kapitel: "Unit 13", en: "dog", de: "der Hund", emoji: "🐶" },
```
- `buch` und `kapitel` genau so schreiben, wie die Lehrerin sie nennt.
- Deutsche Nomen **mit Artikel** – die App prüft ihn.
- Mehrere Bedeutungen mit Komma trennen: `de: "der Ort, der Platz"` → eine reicht.
- Optional: `merk` (Merkhilfe), `beispiel`, `beispielDe`, `gegenteil`, `bild`.

## Prüfregeln (wie die Lehrerin)
Zählen: Groß-/Kleinschreibung, Artikel, ä/ö/ü/ß, Apostroph.
Freiwillig: Satzzeichen am Ende, „to“ bei Verben, Langform (you are = you're), „the“.

## Sichern
Elternbereich (Fortschritt → Eltern, Rechenaufgabe) → **Exportieren**.
Die Datei enthält alle Kinder, Lernstände, Tests, Notizen und eigenen Bilder.
Importieren: zusammenführen oder ersetzen; vorher wird automatisch ein Wiederherstellungspunkt angelegt.
